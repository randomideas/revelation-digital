import React, { Component } from 'react';
import axios from "axios";
import ReactTooltip from 'react-tooltip';

class Nav extends Component {
  state = {
    pagedata: [],
    showInfo: 0,
    show: false
  };

  componentDidMount() {
    const url = "https://development.revelation.digital/wp-json/newrd/v1/rd_nav";
    axios.get(url).then(e => {
      this.setState({ pagedata: e.data.ResponseData, showInfo: 1 });
    });
  }

  render() {
    const page = this.props.page;

    // Determine current page path
    let currentPath = "";
    if (typeof window !== "undefined") {
      currentPath = window.location.pathname;
    }

    return (
      <div className="solutions__nav">
        {this.state.showInfo === 1 ? (
          <>
            {this.state.pagedata.map((prop, i) => {
              // Normalize link path
              const linkValue = prop.title.toLowerCase();
              const isExternal = /^https?:\/\//.test(linkValue);
              const slugPath = isExternal ? linkValue : `/${linkValue.replace(/^\/+/, '')}`;
              const isCurrent = !isExternal && slugPath === currentPath ? "is_active" : "";

              return (
                <React.Fragment key={`Nav${i}`}>
                  {isExternal ? (
                    <a data-tip={prop.tooltip} href={slugPath} target="_self" rel="noopener noreferrer" className={isCurrent}>{prop.title}.</a>
                  ) : (
                    <a data-tip={prop.tooltip} href={slugPath} className={isCurrent}>{prop.title}.</a>
                  )}
                  <ReactTooltip place="bottom" type="dark" effect="float" />
                </React.Fragment>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Nav;

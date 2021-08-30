import React, {Component} from 'react';
import axios from "axios"
import ReactTooltip from 'react-tooltip';

class Nav extends Component {
	
	
	state = {
        pagedata: [],
		showInfo: 0,
		show: false
		
    };
	componentDidMount() {
		
		var url = "https://revelation.digital/wp-json/newrd/v1/rd_nav";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({showInfo: 1})
		})
    }
	render() {
		var page = this.props.page;
		return (
			<div className="solutions__nav">
				{(this.state.showInfo === 1) ? (
						<>
						{this.state.pagedata.map((prop,i) => {return (
							<>
							<a data-tip={prop.tooltip} href={prop.title.toLowerCase()} className={(prop.title === page) ? ("is_active") : ("")} data-tippy-content={prop.tooltip}>{prop.title}</a>
							<ReactTooltip place="bottom" type="dark" effect="float"/>
							</>
						)})}
					</>
				) : ("")}
			</div>
		)
	}
}



export default Nav
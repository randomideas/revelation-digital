import React, {Component} from 'react';
import axios from "axios";

class SocialMenuFooter extends Component {
	
	
	state = {
        pagedata: [],
		showInfo: 0,
		show: false
		
    };
	componentDidMount() {
		
		var url = "https://development.revelation.digital/wp-json/newrd/v1/rd_social_menu";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({showInfo: 1})
		})
    }
	render() {
		return (
			<div className="social-icons">
				{(this.state.showInfo === 1) ? (
					<>
						{this.state.pagedata.map((prop,i) => {return (
							 <a key={"Smenu"+i} href={prop.Link} rel="noreferrer noopener" target="_blank" className="icon"><img src={prop.IconF} alt=""/></a>
						)})}
					</>
				) : ("")}
			</div>
		)
	}
}



export default SocialMenuFooter
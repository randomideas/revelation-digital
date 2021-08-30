import React, {Component} from 'react';
import axios from "axios"
import SocialMenu from "./SocialMenu"
import Menubg from '../../images/menu_bg.mp4';
class Header extends Component {
	
	
	state = {
        pagedata: [],
		showInfo: 0,
		show: false
		
    };
	
	componentDidMount() {
		
		var url = "https://revelation.digital/wp-json/newrd/v1/rd_menu";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({showInfo: 1})
		})
    }
	
	render() {
		
		return (
			
				<>
				<header className={this.state.show === false ? "header" : "header body-menu-open"} >
					<a href="#" className="header-toggle" onClick={()=>{this.setState({show:!this.state.show})}} >menu toggle</a>
					<div className="header-content">
						<a href="" className="logo">
							<img src="https://revelation.digital/wp-content/uploads/2020/02/logo.svg" alt="Revelation Digital"/>
						</a>
					</div>
				</header>
					<div className="menu-wrapper" style={{ display: this.state.show === false ? "none" : "block" }} >
					<div className="container">
						<ul className="menu">
						{(this.state.showInfo === 1) ? (
							<>
							{this.state.pagedata.map((prop,i) => {return (
								<li key={"Menu"+i} >
							<a  href={"/"+prop.Slug} >{prop.Name}</a>
								</li>
							)})}
							</>
						) : ("")}
						</ul>
						<SocialMenu/>
					</div>
					
					<video src={Menubg} autoPlay playsInline muted loop></video>
    
				</div>
				</>
			
		)
	}
}



export default Header
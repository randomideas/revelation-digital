import React, {Component} from 'react';
import { Link} from 'gatsby'
import axios from "axios"
import SocialMenu from "./SocialMenu"
import Menubg from '../../images/menu_bg.mp4';
import LazyLoad from 'react-lazyload';
class Header extends Component {
	
	
	state = {
        pagedata: [],
		showInfo: 0,
		show: false
		
    };
	
	componentDidMount() {
		
		var url = "https://development.revelation.digital/wp-json/newrd/v1/rd_menu";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({showInfo: 1})
		})
		
		
    }
	
	render() {
		let str_url = "";
		const isBrowser = () => typeof window !== "undefined"
		if(isBrowser()){
			str_url = window.location.pathname;
			str_url.replace('/', '');
		}
		

		return (
			
				<>
			
				<header className={this.state.show === false ? "header" : "header body-menu-open"} >
					<a href="#" className="header-toggle" onClick={()=>{this.setState({show:!this.state.show})}} >menu toggle</a>
					<div className="header-content">
						<a href="/" className="logo">
							<img width="356" height="58" src="https://development.revelation.digital/wp-content/uploads/2020/02/logo.svg" alt="Revelation Digital"/>
						</a>
					</div>
				</header>
					<div className="menu-wrapper" style={{ display: this.state.show === false ? "none" : "block" }} >
					<div className="container">
						<ul className="menu">
						{(this.state.showInfo === 1) ? (
							<>
							{this.state.pagedata.map((prop,i) => {return (
								<li key={"Menu"+i} className={("/"+prop.Slug === str_url) ? ("current-menu-item") : ("")} >
							<a  href={"/"+prop.Slug} >{prop.Name}</a>
								</li>
							)})}
							</>
						) : ("")}
						</ul>
						<SocialMenu/>
					</div>
					<LazyLoad height={200} >
					<video src={Menubg} autoPlay playsInline muted loop></video>
    					</LazyLoad>	
				</div>

				</>
			
		)
	}
}



export default Header

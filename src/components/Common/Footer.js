import React, {Component} from 'react';
import axios from "axios"
import SocialMenuFooter from "./SocialMenuFooter"

class Footer extends Component {
	
	
	state = {
        pagedata: [],
		showInfo: 0,
		show: false
		
    };
	
	componentDidMount() {
		
		var url = "https://development.revelation.digital/wp-json/newrd/v1/rd_footer_menu";
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
				<footer>
				<div className="container">
					<div className="footer-top">
						<div className="row">
							<div className="col col--3 col--sm-12">
							<h2 class="footer-heading">Solutions</h2>
								<ul className="menu-sm">
									{(this.state.showInfo === 1) ? (
										<>
										{this.state.pagedata.Solutions.map((prop,i) => {return (
											<li key={"Menu"+i} className={("/"+prop.Slug === str_url) ? ("current-menu-item") : ("")} >
										<a  href={"/"+prop.Slug} >{prop.Name}</a>
											</li>
										)})}
										</>
									) : ("")}
								</ul>
							</div>
							<div className="col col--3 col--sm-12">
							<h2 class="footer-heading">Success Stories</h2>
								<ul className="menu-sm">
									{(this.state.showInfo === 1) ? (
										<>
										{this.state.pagedata.Successstories.map((prop,i) => {return (
											<li key={"Menu"+i} className={("/"+prop.Slug === str_url) ? ("current-menu-item") : ("")} >
										<a  href={"/"+prop.Slug} >{prop.Name}</a>
											</li>
										)})}
										</>
									) : ("")}
								</ul>
							</div>
							<div className="col col--3 col--sm-12">
							<h2 class="footer-heading">Media Services</h2>
								<ul className="menu-sm">
									{(this.state.showInfo === 1) ? (
										<>
										{this.state.pagedata.Marketingservices.map((prop,i) => {return (
											<li key={"Menu"+i} className={("/"+prop.Slug === str_url) ? ("current-menu-item") : ("")} >
										<a  href={"/"+prop.Slug} >{prop.Name}</a>
											</li>
										)})}
										</>
									) : ("")}
								</ul>
							</div>
							<div className="col col--3 col--sm-12">
							<h2 class="footer-heading">Contact</h2>
								<ul className="menu-sm">
									{(this.state.showInfo === 1) ? (
										<>
										{this.state.pagedata.Contact.map((prop,i) => {return (
											<li key={"Menu"+i} className={("/"+prop.Slug === str_url) ? ("current-menu-item") : ("")} >
										<a  href={"/"+prop.Slug} >{prop.Name}</a>
											</li>
										)})}
										</>
									) : ("")}
								</ul>
							</div>
						
						{/* <div className="col col--4 col--sm-12">
							<ul className="menu-sm">
								{(this.state.showInfo === 1) ? (
									<>
									{this.state.pagedata.Second.map((prop,i) => {return (
										<li key={"Menu"+i} >
									<a  href={"/"+prop.Slug} >{prop.Name}</a>
										</li>
									)})}
									</>
								) : ("")}
							</ul>
						</div> */}
					
					{/* <div className="col col--3 col--sm-12 hide--sm-down">
						<ul className="menu-lg">
							{(this.state.showInfo === 1) ? (
								<>
								{this.state.pagedata.Primary.map((prop,i) => {return (
									<li key={"Menu"+i} className={("/"+prop.Slug === str_url) ? ("current-menu-item") : ("")} >
								<a  href={"/"+prop.Slug} >{prop.Name}</a>
									</li>
								)})}
								</>
							) : ("")}
						</ul>
					</div> */}
         
					<div className="col col--3 col--sm-12 hide--sm-up">
						<SocialMenuFooter/>
					</div>
					<div className="col col--5 col--sm-12">
						<img src="https://development.revelation.digital/wp-content/uploads/2020/02/icon-footer.png" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" width="80" height="113"/>
					</div>
				</div>
				</div>
				
        
			
     
			<div className="footer-bottom">
        <div className="row">
          <div className="col col--6 col--sm-12">
	        <p>&copy; 2024 Revelation Digital Media | All rights reserved<br />A <a href="http://www.statusproductions.com.au" target="_blank"  rel="noreferrer noopener">Status Productions Pty Ltd</a> Company</p>
            {/* <p>Site by <a href="https://www.qltech.com.au/">QL Tech</a></p> */}
          </div>
          <div className="col col--6 col--sm-12">
            <div className="social-icons hide--sm-down">
            <SocialMenuFooter/>
            </div>
           
          </div>
         
        </div>
       
      </div>
      </div>
      
   
  
  </footer>
				</>
			
		)
	}
}



export default Footer
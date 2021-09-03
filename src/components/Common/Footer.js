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
		
		var url = "https://revelation.digital/wp-json/newrd/v1/rd_menu_both";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({showInfo: 1})
		})
    }
	render() {
		let str_url = window.location.pathname;
		str_url.replace('/', '');
		str_url = "";
		return (
			
				<>
				<footer>
				<div className="container">
					<div className="footer-top">
						<div className="row">
							<div className="col col--3 col--sm-12 hide--sm-up">
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
							</div>
						
						<div className="col col--4 col--sm-12">
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
						</div>
					
					<div className="col col--3 col--sm-12 hide--sm-down">
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
					</div>
         
					<div className="col col--3 col--sm-12 hide--sm-up">
						<SocialMenuFooter/>
					</div>
					<div className="col col--5 col--sm-12">
						<img src="https://revelation.digital/wp-content/uploads/2020/02/icon-footer.png" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" width="80" height="113"/>
					</div>
				</div>
				</div>
				
        
			
     
			<div className="footer-bottom">
        <div className="row">
          <div className="col col--6 col--sm-12">
	        <p>&copy;  Revelation Digital Media | All rights reserved<br />A <a href="http://www.statusproductions.com.au" target="_blank"  rel="noreferrer noopener">Status Productions Pty Ltd</a> Company</p>
            <p>Site by <a href="https://www.qltech.com.au/">QL Tech</a></p>
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
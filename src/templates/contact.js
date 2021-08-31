import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

class Contact extends Component {
	
	constructor(props) {
    super(props);
    
        this.clickHandler = this.clickHandler.bind(this);
   
  }
	clickHandler(param){
	
		var items = document.getElementsByClassName("contact-card-body");
		 for (var i=0; i < items.length; i++) {
			items[i].classList.remove("active");
		}
		var items = document.getElementsByClassName("jsContactCardTrigger");
		 for (var i=0; i < items.length; i++) {
			items[i].classList.remove("active");
		}
		document.getElementById("contact-card-"+param).classList.add("active"); 
		document.getElementById("id-"+param).classList.add("active"); 
	}
	render() {
		var base = this.props.pageContext.Data.data.additional_data.Contact;
		return (
			<Layout>
				<>
				<Helmet>
					<title>Page title | Revelation Digital - Eye-Opening Programmatic Media</title>
				</Helmet>
				<div className="contact-hero">
					<div className="container container-980">
						<div className="row row--65">
							<div className="col col--7 col--sm-12">
								<h1 className="">{base.hero_title}<span>{base.hero_subtitle}</span></h1>
							</div>
							<div className="col col--5 col--sm-12">
								<p className="" data-stellar-delay=".3s" dangerouslySetInnerHTML={{ __html: base.hero_text}} />
							</div>
						</div>
					</div>
				</div>
				<div className="contact-main">
				  <div className="container">
					<div className="would-like">
					  <div className="row">
						<div className="col col--6 col--sm-12">
						  <p className=" ">{base.contact_title}</p>
						</div>    
						<div className="col col--6 col--sm-12">
						  <ul className=" ">
							{base.forms.map((propforms,i) => {return (
							<li><a href="#" className= "jsPopupToggle" data-popup={"#contact-popup-"+(i+1)}>{propforms.title}</a></li>
							)})}
						  </ul>
						  <div className="line-vertical-left-wrapper">
							<div className="line-vertical-left is_active"></div>
						  </div>
						</div>       
					  </div>     
					</div>
				  </div>
				</div>
				<div className="contact-where">
					<div className="diagonal-line"></div>
						<div className="container">
							<div className="row">
								<div className="col col--1">&nbsp;</div>
								<div className="col col--4 col--sm-12">
									<div className="contact-where-text jsContactCardMenu ">
										{base.locations.map((proplocations,i) => {return (
										<a href="javascript:;" id={"id-"+i} onClick={() => this.clickHandler(i)}  className={(i == 0) ? ("jsContactCardTrigger block text-bebas text-bebas--big text-bebas--stroke active") : ("jsContactCardTrigger block text-bebas text-bebas--big text-bebas--stroke")}>{proplocations.title}</a>
										)})}
									</div>
								</div>
								<div className="col col--6 col--sm-12">
									<div className="contact-card" data-stellar-ratio="1.1">
										{base.locations.map((proplocations,i) => {return (
											<>
										<div id={"contact-card-"+i} className={(i == 0) ? ("contact-card-body active") : ("contact-card-body")}>
												<img src={proplocations.image.url} alt={proplocations.image.alt} />
												<div className="contact-card-text">
													<p className="text-bebas text-bebas--big text-bebas--stroke contact-card-big-text">{proplocations.title2}</p>
													  <address>
														<p dangerouslySetInnerHTML={{ __html: proplocations.address}} />
														<p dangerouslySetInnerHTML={{ __html: proplocations.phone}} />
													  </address>
												</div>
											</div>
											</>
										)})}
									</div>
								</div>
							</div>
						</div>
					</div>
				
				<section className="section-find-more">
					<div className="container">
						{base.find_more_links.map((links) => 
							<>
							<a href={links.link} className="find-more-link">
								<h3 className="text-bebas" dangerouslySetInnerHTML={{ __html: links.text}} />
								<span className="arrow">
									<svg xmlns="http://www.w3.org/2000/svg" width="113.526" height="43.006" viewBox="0 0 113.526 43.006">
										<g id="Group_11" data-name="Group 11" transform="translate(0.594 0.503)">
											<path id="Line_Copy_5" data-name="Line Copy 5" d="M110.625.875.406.813" transform="translate(0 20.056)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"/>
											<path id="Line_Copy_6" data-name="Line Copy 6" d="M28.51,1.076.406.813" transform="matrix(-0.704, 0.71, -0.71, -0.704, 112.367, 21.413)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"/>
											<path id="Line_Copy_7" data-name="Line Copy 7" d="M28.51-1.076.406-.812" transform="matrix(-0.704, -0.71, 0.71, -0.704, 112.367, 20.587)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"/>
										</g>
									</svg>
								</span>
							</a>
							</>
						)}
					</div>
				</section>
				</>
			</Layout>	
		)
	}
}



export default Contact
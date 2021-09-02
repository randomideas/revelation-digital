import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import Nav from "../components/Common/Nav"
import Testimonials from "../components/Common/Testimonials"
import GetTouch from "../components/Common/GetTouch"
import Listing from "../components/CSC/Listing"
import { Helmet } from "react-helmet"
import Counter from 'react-number-counter'
import bg from "../images/hero/bg.jpg"
import smoke1 from "../images/hero/smoke1.png"
import devices from "../images/hero/devices.png"
import smoke2 from "../images/hero/smoke2.png"
import detective from "../images/hero/detective.png"
import flare from "../images/hero/flare.png"
import smoke3 from "../images/hero/smoke3.png"
import Torus from "../images/Torus_2.mp4"
import Float from "../images/Float_2.mp4"
import Pump from "../images/Pump_2.mp4"
import Sprial from "../images/Sprial_2.mp4"
import Parallax from 'parallax-js'
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';

class Page extends Component {
	
	constructor(props) {
		super(props);
        this.clickHandler = this.clickHandler.bind(this);
	}
	
	componentDidMount() {
		if(this.props.pageContext.Data.slug === "home"){
			var scene = document.getElementById('scene');
			var parallaxInstance = new Parallax(scene);
		}
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
		var PageCode = this.props.pageContext.Data.slug;
		var seo = this.props.pageContext.Data.seo;
		var is_page = 0;
		if(PageCode === "about"){
			var base = this.props.pageContext.Data.data.additional_data.About;
			is_page = 1;
		}
		if(PageCode === "brief-us"){
			var base = this.props.pageContext.Data.data;
			is_page = 1;
		}
		if(PageCode === "case-study"){
			var base = this.props.pageContext.Data.data;
			is_page = 1;
		}
		if(PageCode === "case-studies"){
			var base = this.props.pageContext.Data.data.additional_data.CSC;
			is_page = 1;
		}
		if(PageCode === "contact"){
			var base = this.props.pageContext.Data.data.additional_data.Contact;
			is_page = 1;
		}
		if(PageCode === "creative-specs"){
			var base = this.props.pageContext.Data.data;
			is_page = 1;
		}
		if(PageCode === "home"){
			var base = this.props.pageContext.Data.data.additional_data.Home;
			is_page = 1;
		}
		if(PageCode === "privacy"){
			var base = this.props.pageContext.Data.data;
			is_page = 1;
		}
		if(PageCode === "rejoice"){
			var base = this.props.pageContext.Data.data.additional_data.Rejoice;
			is_page = 1;
			var img = base.hero_image.url;
			var sectionStyle = { 
			  backgroundImage: `url(${img})`
			};
		}
		if(PageCode === "relate"){
			var base = this.props.pageContext.Data.data.additional_data.Relate;
			is_page = 1;
			var img = base.hero_image.url;
			var sectionStyle = { 
			  backgroundImage: `url(${img})`
			};
		}
		if(PageCode === "resonate"){
			var base = this.props.pageContext.Data.data.additional_data.Resonate;
			is_page = 1;
			var img = base.hero_image.url;
			var sectionStyle = { 
			  backgroundImage: `url(${img})`
			};
		}
		if(PageCode === "reveal"){
			var base = this.props.pageContext.Data.data.additional_data.Reveal;
			is_page = 1;
		}
		if(PageCode === "solutions"){
			var base = this.props.pageContext.Data.data.additional_data.Solutions;
			is_page = 1;
		}
		if(is_page === 0){
			var base = this.props.pageContext.Data.data;
		}
		var seo = this.props.pageContext.Data.seo;
		
		return (
			<Layout>	
			<>
				<Helmet>
					<title>{seo.title}</title>
					<meta name="title" content={seo.title}></meta>
					<meta name="description" content={seo.metadesc}></meta>
					<meta name="keywords" content={seo.focuskw}></meta>
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="article"></meta>
					<meta property="og:title" content={seo.opengraphtitle}></meta>
					<meta property="og:description" content={seo.opengraphdescription}></meta>
					<meta property="og:site_name" content="Revelation Digital"></meta>
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta property="twitter:title" content={seo.twittertitle}></meta>
					<meta property="twitter:description" content={seo.twitterdescription}></meta>
				</Helmet>
				
				{/* About Us Page Code */}
				<> {(PageCode === "about") ? (
						<>
						<section className="about-top-section">
							<div className="container">
								<div className="row row--00">
									<div className="col col--6 col--sm-12">
										<ReactWOW delay='0.4s' animation='fadeInLeft'>
										<div className="top-section-text" data-wow-delay="0.4s">
											<h1 className="text-bebas text-bebas--big text-bebas--white text-bebas--no-letter-spacing" dangerouslySetInnerHTML={{ __html: base.about_intro_heading}} />
										</div>
										</ReactWOW>
									</div>
									<div className="col col--6 col--sm-12">
										<ReactWOW delay='0.8s' animation='fadeInUp'>
										<div className="top-section-paragraph" data-wow-delay="0.8s">
											<span dangerouslySetInnerHTML={{ __html: base.about_intro_text}} />
										</div>
										</ReactWOW>
									</div>
								</div>
							</div>
						</section>
						<section className="about-top-intro">
							<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top">
								<div className="line-vertical-center is_active"></div>
							</div>
							<div className="row row--00">
								<div className="col col--6 col--sm-12">
									<div className="smoke-wrapper"></div>
									<div className="pink-wrapper-text"></div>
									<ReactWOW  animation='fadeInUp'>
									<h2 className="  text-bebas text-bebas--ultra-big text-bebas--stroke text-bebas--stroke-white" dangerouslySetInnerHTML={{ __html: base.about_intro_outline_text}} />
									</ReactWOW>
								</div>
								<div className="col col--6 col--sm-12" data-stellar-ratio="1.3">
									<img src={base.about_intro_image.url} className="about-top-intro-image"  width="1234" height="787" />
								</div>
							</div>
						</section>
						<div className="section-divided-text">
							<div className="container">
								{base.about_text.map((prop,i) => {return (
								<div className="divided-text-wrapper">
									<div className="row">
										<ReactWOW  animation='fadeInUp'>
										<div className="col col--5 col--sm-12 ">
											<h3 className="text-bebas text-bebas--big text--pink" dangerouslySetInnerHTML={{ __html: prop.title}} />
										</div>
										</ReactWOW>
										<ReactWOW delay='0.3s' animation='fadeInUp'>
										<div className="col col--6 col--sm-12" data-wow-delay="0.3s">
											<div className="content-area" dangerouslySetInnerHTML={{ __html: prop.text}} />	
										</div>
										</ReactWOW>
									</div>
								</div>
								)})}
							</div>
						</div>	
						<section className="section-quote">
							<div className="skyscraper"></div>
							<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top">
								<div className="line-vertical-center is_active"></div>
							</div>
							<div className="container">
								{base.about_quote_line.map((propquote,i) => {return (
								<ReactWOW  animation='fadeInUp'>
								<p className={"text-bebas text-bebas--big text-bebas--white line"+(i+1)} dangerouslySetInnerHTML={{ __html: propquote.quote}} />
								</ReactWOW>
								)})}
							</div>
						</section>
						<section className="about-stat-section">
							<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top">
								<div className="line-vertical-center is_active"></div>
							</div>
							<div className="container">
								<div className="about-stat-section-title">
									<h2 className="text-bebas text-bebas--big text-bebas--white" dangerouslySetInnerHTML={{ __html: base.about_stats_heading}} />
								</div>
							</div>
							<div className="stat-items-wrapper">
								{base.about_stats.map((propstat,i) => {return (
									<div className="stat-item">
										<span className="number text-bebas text-bebas--ultra-big text-bebas--stroke">
											<span><Counter start={1} end={propstat.number} delay={200} /></span>
											<span>{propstat.number_postfix}</span>
										</span>
										 <span className="label text-bebas text-bebas--big text-bebas--white">{propstat.text}</span>
											 {(base.about_stats.length === i) ? (<a href={base.about_deeper_link} className="text--pink dig-link">{base.about_deeper_link_text}</a>) : ("")}
									</div>
								)})}
							</div>
						</section>
						<section className="section-find-more">
							<div className="container">
								{base.about_links.map((links) => 
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
								)}
							</div>
						</section>
						<Testimonials/>
						<GetTouch/>
						</>
					) : ("")} 
				</>
				
				{/* Brief Us Page Code */}
				<> {(PageCode === "brief-us") ? (
						<>
						<div className="simple-hero">
							<div className="cloud-left"><img src={cloud1} alt="" /></div>
							<div className="cloud-right"><img src={cloud2} alt="" /></div>
							<div className="container">
								<h1 className="text-bebas text-bebas--big">{this.props.pageContext.Data.title}</h1>
							</div>
						</div>
						<div className="section section--normal-margin default-page">
							<div className="container container-small">
								<div className="text-area" dangerouslySetInnerHTML={{ __html: this.props.pageContext.Data.data.content}} />
									
							</div>
						</div>
						</>
					) : ("")} 
				</>
				{/* Case Study Page Code */}
				<> {(PageCode === "case-study") ? (
						<>
						<div className="simple-hero">
							<div className="cloud-left"><img src={cloud1} alt="" /></div>
							<div className="cloud-right"><img src={cloud2} alt="" /></div>
							<div className="container">
								<h1 className="text-bebas text-bebas--big">{this.props.pageContext.Data.title}</h1>
							</div>
						</div>
						<div className="section section--normal-margin default-page">
							<div className="container container-small">
								<div className="text-area" dangerouslySetInnerHTML={{ __html: this.props.pageContext.Data.data.content}} />
									
							</div>
						</div>
						</>
					) : ("")} 
				</>
				
				{/* Case Studies Page Code */}
				<> {(PageCode === "case-studies") ? (
						<>
						<section className="client-stories-hero-section" style={ sectionStyle }	>
							<div className="container">
								<ReactWOW  animation='fadeInRight'>
								<div className="client-stories-hero-text">
									<h1 className="text-bebas text-bebas--big text--pink text-bebas--no-letter-spacing" dangerouslySetInnerHTML={{ __html: base.title }} />
								</div>
								</ReactWOW>
							</div>
							<div className="line-vertical-center-wrapper line-vertical-center-wrapper--bottom">
								<div className="line-vertical-center is_active"></div>
							</div>
						</section>
						<section className="section-client-stories">
							<div className="diagonal-line"></div>
							<div className="container container-1210">
								<div className="client-stories-wrapper jsClientStoriesWrapper">
									<Listing/>
								</div>
							</div>
						</section>
						{base.more_links.map((prop,i) => {return (
						<div className="section-find-more">
							<div className="container">
								<a href={prop.link} className="find-more-link">
								<h3 className="text-bebas">{prop.text}</h3>
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
							</div>
						</div>
						)})}
						<GetTouch/>
						</>
					) : ("")} 
				</>
				
				{/* Contact Page Code */}
				<> {(PageCode === "contact") ? (
					<>
						<div className="contact-hero">
							<div className="container container-980">
								<div className="row row--65">
									<div className="col col--7 col--sm-12">
										<ReactWOW  animation='fadeInUp'>
										<h1 className="">{base.hero_title}<span>{base.hero_subtitle}</span></h1>
										</ReactWOW>
									</div>
									<div className="col col--5 col--sm-12">
										<ReactWOW  animation='fadeInUp'>
										<p className="" data-stellar-delay=".3s" dangerouslySetInnerHTML={{ __html: base.hero_text}} />
										</ReactWOW>
									</div>
								</div>
							</div>
						</div>
						<div className="contact-main">
						  <div className="container">
							<div className="would-like">
							  <div className="row">
								<div className="col col--6 col--sm-12">
									<ReactWOW  animation='fadeInLeft'>
									<p className=" ">{base.contact_title}</p>
									</ReactWOW>
								</div>    
								<div className="col col--6 col--sm-12">
								  <ReactWOW  animation='fadeInUp'>
								  <ul className=" ">
									{base.forms.map((propforms,i) => {return (
									<li><a href="#" className= "jsPopupToggle" data-popup={"#contact-popup-"+(i+1)}>{propforms.title}</a></li>
									)})}
								  </ul>
								  </ReactWOW>
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
										<ReactWOW  animation='fadeInUp'>
											<div className="contact-where-text jsContactCardMenu ">
												{base.locations.map((proplocations,i) => {return (
												<a href="javascript:;" id={"id-"+i} onClick={() => this.clickHandler(i)}  className={(i == 0) ? ("jsContactCardTrigger block text-bebas text-bebas--big text-bebas--stroke active") : ("jsContactCardTrigger block text-bebas text-bebas--big text-bebas--stroke")}>{proplocations.title}</a>
												)})}
											</div>
											</ReactWOW>
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
					) : ("")} 
				</>
				
				{/* Creative Specs Page Code */}
				<> {(PageCode === "creative-specs") ? (
						<>
							<div className="simple-hero">
								<div className="cloud-left"><img src={cloud1} alt="" /></div>
								<div className="cloud-right"><img src={cloud2} alt="" /></div>
								<div className="container">
									<h1 className="text-bebas text-bebas--big">{this.props.pageContext.Data.title}</h1>
								</div>
							</div>
							<div className="section section--normal-margin default-page">
								<div className="container container-small">
									<div className="text-area" dangerouslySetInnerHTML={{ __html: this.props.pageContext.Data.data.content}} />
										
								</div>
							</div>
						</>	
					) : ("")} 
				</>
				
				{/* Home Page Code */}
				<> {(PageCode === "home") ? (
						<>
							<div className="hero-home">
								<div className="hero_parallax" id="scene">
									<div className="hero_layer hero_bg" style={{backgroundImage: "url("+bg+")"}} ></div>
									<div data-depth="0.3" className="hero_layer" style={{backgroundImage: "url("+smoke1+")"}} ></div>
									<div data-depth="0.20" className="hero_layer" style={{backgroundImage: "url("+devices+")"}}  ></div>
									<div data-depth="0.15" className="hero_layer" style={{backgroundImage: "url("+smoke2+")"}}  ></div>
									<div data-depth="0.06" className="hero_layer" style={{backgroundImage: "url("+detective+")"}}  ></div>
									<div data-depth="0.06" className="hero_layer hero_flare" style={{backgroundImage: "url("+flare+")"}}  ></div>
									<div data-depth="-0.50" className="hero_layer" style={{backgroundImage: "url("+smoke3+")"}} ></div>
								</div>
							</div>
							<div className="hero-home-title">
								<div className="text">
									<ReactWOW delay='0.4s' animation='fadeInUp'><h1 className=" " data-wow-delay="0.4s">{base.hero_title}</h1></ReactWOW>
									<ReactWOW delay='0.4s' animation='fadeInUp'><p className=" " data-wow-delay="0.8s">{base.hero_second_text}</p></ReactWOW>
								</div>
								<div className="line-vertical-center-wrapper">
									<div className="line-vertical-center is_active"></div>
								</div>
							</div>
							<div className="home-text-1">
								<div className="container">
									<ReactWOW  animation='fadeInLeft'><h2 className="" dangerouslySetInnerHTML={{ __html: base.intro_section_heading}} /></ReactWOW>
									<ReactWOW  animation='fadeInRight'><h3 className="" dangerouslySetInnerHTML={{ __html: base.intro_section_subheading}} /></ReactWOW>
									<div className="row row--100">
										<div className="col col--7 col--sm-12">
											<ReactWOW  animation='fadeInLeft'><p className="" dangerouslySetInnerHTML={{ __html: base.intro_section_paragraph}} /></ReactWOW>
										</div>
										<div className="col col--5 col--sm-12">
											<ReactWOW  animation='fadeInUp'><a href={base.intro_section_learn_more_link.url}  className="btn btn-purple">{base.intro_section_learn_more_link.title}</a></ReactWOW>
										</div>
									</div>
									<ReactWOW  animation='fadeInUp'><h4 className="hide--sm-down" dangerouslySetInnerHTML={{ __html: base.intro_section_welcome_text}} /></ReactWOW>
								</div>
							</div>
							<div className="home-solutions-intro">
								<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top">
									<div className="line-vertical-center is_active"></div>
								</div>
								<div className="container">
									<div className="row row--65">
										<div className="col col--7 col--sm-12 pull-right" data-stellar-ratio="1.2">
											<ReactWOW  animation='fadeInLeft'><h2 className="" dangerouslySetInnerHTML={{ __html: base.intro_solutions_title}} /></ReactWOW>
										</div>
										<div className="col col--5 col--sm-12 intro_solutions_paragraph">
											<ReactWOW  animation='fadeInRight'><p className="" dangerouslySetInnerHTML={{ __html: base.intro_solutions_paragraph}} /></ReactWOW>
										</div>
									</div>
								</div>
							</div>
							{base.solutions_section.map((prop,i) => {return (
								<div className={(prop.image_position == "left") ? ("home-solutions-part home-solutions-part-alt") : ("home-solutions-part")}>
									<div className="img-wrapper stellar" data-stellar-ratio="1.6">
										<video src={prop.video.url} autoPlay playsInline muted loop></video>
									</div>
									<div className="container">
										<ReactWOW  animation={(prop.image_position == "left") ? ("fadeInRight") : ("fadeInLeft")}>
										<div className={(prop.image_position == "left") ? ("text Right") : ("text Left")} >
											<span dangerouslySetInnerHTML={{ __html: prop.text}} />
												<a href={prop.read_more_url} className="read-more">Read on</a>
										</div>
										</ReactWOW>
									</div>
								</div>
							)})}
							<Testimonials/>
							<GetTouch/>
						</>
					) : ("")} 
				</>
				
				{/* Privacy Page Code */}
				<> {(PageCode === "privacy") ? (
						<>
							<div className="simple-hero">
								<div className="cloud-left"><img src={cloud1} alt="" /></div>
								<div className="cloud-right"><img src={cloud2} alt="" /></div>
								<div className="container">
									<h1 className="text-bebas text-bebas--big">{this.props.pageContext.Data.title}</h1>
								</div>
							</div>
							<div className="section section--normal-margin default-page">
								<div className="container container-small">
									<div className="text-area" dangerouslySetInnerHTML={{ __html: this.props.pageContext.Data.data.content}} />
										
								</div>
							</div>
						</>
					) : ("")} 
				</>
				
				{/* Rejoice Page Code */}
				<> {(PageCode === "rejoice") ? (
						<>
						<Nav page="Rejoice" />
							<div className="hero-solution--single" style={ sectionStyle }>
								<div className="container">
									<div className="hero-text">
										<ReactWOW  animation='fadeInUp'>
										 <h1 className="text-bebas   text-bebas--ultra-big text--pink solution_flare solution_flare_60">{base.hero_title}</h1>
										 </ReactWOW>
										<ReactWOW delay='1s' animation='fadeInUp'><h2  >{base.hero_subtitle}</h2></ReactWOW>
										<ReactWOW delay='1.4s' animation='fadeInUp'><h3 >{base.hero_text}</h3></ReactWOW>
									</div>
								</div>
							</div>
							
							{base.sections.map((prop,i) => {return (
								<>
								<>
								{(prop.acf_fc_layout === "text_image") ? (
									<div className={(i % 2 == 0) ? ("text-image") : ("text-image text-image--alt")} style={{backgroundImage: "url("+prop.image.url+")"}} >
										<div className="container">
											<ReactWOW animation='fadeInUp'>
											<div className="text">
												<span dangerouslySetInnerHTML={{ __html: prop.text }} ></span>
												
												<a href="https://vimeo.com/325733520" className="read-more solution-read-more" data-fancybox="">See Example</a>
											</div>
											</ReactWOW>
										</div>
									</div>
								) : ("")}
								</>
								<>
								{(prop.acf_fc_layout === "simple_text") ? (
									<div className="section--normal-margin">
										<div className="container">
											<ReactWOW  animation='fadeInLeft'>
											<p className="text-bebas text-bebas--big text-bebas--white" dangerouslySetInnerHTML={{ __html: prop.text }} />
											</ReactWOW>
										</div>
									</div>
								) : ("")}
								</>
								
								<>
								{(prop.acf_fc_layout === "text_image_style2") ? (
									<div className="section--normal-margin">
										<div className="container">
											<div className="text-image--style2">
												<div className="image" data-stellar-ratio="1.08">
													<img src={prop.image.url} alt={prop.image.alt} />
												</div>
												<div className="text" dangerouslySetInnerHTML={{ __html: prop.text }} />
													
											</div>
										</div>
									</div>
								) : ("")}
								</>
								<>
								{(prop.acf_fc_layout === "features") ? (
									<div className="section--normal-margin">
										<div className="container">
											<ReactWOW  animation='fadeInLeft'>
											<h2 className={(prop.title_center == true)? ("text-bebas text-bebas--big text--pink features-title features-title--center") : ("text-bebas text-bebas--big text--pink features-title")} dangerouslySetInnerHTML={{ __html: prop.title }} />
											</ReactWOW>

									<div className={(prop.three_cols == true) ? ("features-table features-table--3") : ("features-table")}>
										{prop.table.map((proptable,k) => {return (	
										<ReactWOW  animation='zoomIn' delay={'0.'+((k+1)*2)+'s'} >		
										<div className="item  ">
											<img src={proptable.icon.url} alt=""/>
											<h4>{proptable.title} </h4>
											  <p>{proptable.text}</p>
										</div>
										</ReactWOW>
									   )})} 
									</div>

								</div>
							</div>
								) : ("")}
								</>
								<>
								{(prop.acf_fc_layout === "partners") ? (
									<div className="section--normal-margin">
										<div className="container">
											<h2 className="text-bebas text-bebas--big text--pink features-title features-title--center" dangerouslySetInnerHTML={{ __html: prop.title }} />
											<div className="partners">
												{prop.partners.map((proppartners,j) => {return (
													<div className={(proppartners.small == true) ? ("item  item--small") : ("item")}>
														<img src={proppartners.image.url} alt={proppartners.image.alt} />
													</div>
												)})} 
											</div>
										</div>	
									</div>	
								) : ("")}
								</>
								</>
								
								
							)})}
							
							<>
							{(base.solution_cta_text !== "") ? (
							<div className="section-find-more">
								<div className="container">
									<a href={base.solution_cta} className="find-more-link">
										<h3 className="text-bebas">{base.solution_cta_text}</h3>
										<span className="arrow">
											<svg xmlns="http://www.w3.org/2000/svg" width="113.526" height="43.006" viewBox="0 0 113.526 43.006">
											  <g id="Group_11" data-name="Group 11" transform="translate(0.594 0.503)">
												<path id="Line_Copy_5" data-name="Line Copy 5" d="M110.625.875.406.813" transform="translate(0 20.056)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
												<path id="Line_Copy_6" data-name="Line Copy 6" d="M28.51,1.076.406.813" transform="matrix(-0.704, 0.71, -0.71, -0.704, 112.367, 21.413)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
												<path id="Line_Copy_7" data-name="Line Copy 7" d="M28.51-1.076.406-.812" transform="matrix(-0.704, -0.71, 0.71, -0.704, 112.367, 20.587)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
											  </g>
											</svg>
										</span>
									</a>
								</div>
							</div>
							
							) : ("")}
							</>
							
							
							<Nav page="Rejoice" />
							<Testimonials/>
							<GetTouch/>
							</>
					) : ("")} 
				</>
				
				{/* Relate Page Code */}
				<> {(PageCode === "relate") ? (
						<>
						<Nav page="Relate" />
							<div className="hero-solution--single" style={ sectionStyle }>
								<div className="container">
									<div className="hero-text">
										<ReactWOW  animation='fadeInUp'>
										 <h1 className="text-bebas   text-bebas--ultra-big text--pink solution_flare solution_flare_60">{base.hero_title}</h1>
										 </ReactWOW>
										<ReactWOW delay='1s' animation='fadeInUp'><h2  >{base.hero_subtitle}</h2></ReactWOW>
										<ReactWOW delay='1.4s' animation='fadeInUp'><h3 >{base.hero_text}</h3></ReactWOW>
									</div>
								</div>
							</div>
							
							{base.sections.map((prop,i) => {return (
								<>
								<>
								{(prop.acf_fc_layout === "text_image") ? (
									<div className={(i % 2 == 0) ? ("text-image") : ("text-image text-image--alt")} style={{backgroundImage: "url("+prop.image.url+")"}} >
										<div className="container">
											<ReactWOW animation='fadeInUp'>
											<div className="text">
												<span dangerouslySetInnerHTML={{ __html: prop.text }} ></span>
												
												<a href="https://vimeo.com/325733520" className="read-more solution-read-more" data-fancybox="">See Example</a>
											</div>
											</ReactWOW>
										</div>
									</div>
								) : ("")}
								</>
								<>
								{(prop.acf_fc_layout === "simple_text") ? (
									<div className="section--normal-margin">
										<div className="container">
											<ReactWOW  animation='fadeInLeft'>
											<p className="text-bebas text-bebas--big text-bebas--white" dangerouslySetInnerHTML={{ __html: prop.text }} />
											</ReactWOW>
										</div>
									</div>
								) : ("")}
								</>
								
								<>
								{(prop.acf_fc_layout === "text_image_style2") ? (
									<div className="section--normal-margin">
										<div className="container">
											<div className="text-image--style2">
												<div className="image" data-stellar-ratio="1.08">
													<img src={prop.image.url} alt={prop.image.alt} />
												</div>
												<div className="text" dangerouslySetInnerHTML={{ __html: prop.text }} />
													
											</div>
										</div>
									</div>
								) : ("")}
								</>
								<>
								{(prop.acf_fc_layout === "features") ? (
									<div className="section--normal-margin">
										<div className="container">
											<ReactWOW  animation='fadeInLeft'>
											<h2 className={(prop.title_center == true)? ("text-bebas text-bebas--big text--pink features-title features-title--center") : ("text-bebas text-bebas--big text--pink features-title")} dangerouslySetInnerHTML={{ __html: prop.title }} />
											</ReactWOW>

									<div className={(prop.three_cols == true) ? ("features-table features-table--3") : ("features-table")}>
										{prop.table.map((proptable,k) => {return (	
										<ReactWOW  animation='zoomIn' delay={'0.'+((k+1)*2)+'s'} >		
										<div className="item  ">
											<img src={proptable.icon.url} alt=""/>
											<h4>{proptable.title} </h4>
											  <p>{proptable.text}</p>
										</div>
										</ReactWOW>
									   )})} 
									</div>

								</div>
							</div>
								) : ("")}
								</>
								<>
								{(prop.acf_fc_layout === "partners") ? (
									<div className="section--normal-margin">
										<div className="container">
											<h2 className="text-bebas text-bebas--big text--pink features-title features-title--center" dangerouslySetInnerHTML={{ __html: prop.title }} />
											<div className="partners">
												{prop.partners.map((proppartners,j) => {return (
													<div className={(proppartners.small == true) ? ("item  item--small") : ("item")}>
														<img src={proppartners.image.url} alt={proppartners.image.alt} />
													</div>
												)})} 
											</div>
										</div>	
									</div>	
								) : ("")}
								</>
								</>
								
								
							)})}
							
							<>
							{(base.solution_cta_text !== "") ? (
							<div className="section-find-more">
								<div className="container">
									<a href={base.solution_cta} className="find-more-link">
										<h3 className="text-bebas">{base.solution_cta_text}</h3>
										<span className="arrow">
											<svg xmlns="http://www.w3.org/2000/svg" width="113.526" height="43.006" viewBox="0 0 113.526 43.006">
											  <g id="Group_11" data-name="Group 11" transform="translate(0.594 0.503)">
												<path id="Line_Copy_5" data-name="Line Copy 5" d="M110.625.875.406.813" transform="translate(0 20.056)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
												<path id="Line_Copy_6" data-name="Line Copy 6" d="M28.51,1.076.406.813" transform="matrix(-0.704, 0.71, -0.71, -0.704, 112.367, 21.413)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
												<path id="Line_Copy_7" data-name="Line Copy 7" d="M28.51-1.076.406-.812" transform="matrix(-0.704, -0.71, 0.71, -0.704, 112.367, 20.587)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
											  </g>
											</svg>
										</span>
									</a>
								</div>
							</div>
							
							) : ("")}
							</>
							
							
							<Nav page="Relate" />
							<Testimonials/>
							<GetTouch/>
							</>
					) : ("")} 
				</>
				
				{/* Resonate Page Code */}
				<> {(PageCode === "resonate") ? (
						<>
							<Nav page="Resonate" />
								<div className="hero-solution--single" style={ sectionStyle }>
									<div className="container">
										 
										<div className="hero-text">
											<ReactWOW  animation='fadeInUp'>
											 <h1 className="text-bebas   text-bebas--ultra-big text--pink solution_flare solution_flare_60">{base.hero_title}</h1>
											 </ReactWOW>
											<ReactWOW delay='1s' animation='fadeInUp'><h2  >{base.hero_subtitle}</h2></ReactWOW>
											<ReactWOW delay='1.4s' animation='fadeInUp'><h3 >{base.hero_text}</h3></ReactWOW>
										</div>
									</div>
								</div>
								
								{base.sections.map((prop,i) => {return (
									<>
									<>
									{(prop.acf_fc_layout === "text_image") ? (
										<div className={(i % 2 == 0) ? ("text-image") : ("text-image text-image--alt")} style={{backgroundImage: "url("+prop.image.url+")"}} >
											<div className="container">
												<ReactWOW animation='fadeInUp'>
												<div className="text">
													<span dangerouslySetInnerHTML={{ __html: prop.text }} ></span>
													
													<a href="https://vimeo.com/325733520" className="read-more solution-read-more" data-fancybox="">See Example</a>
												</div>
												</ReactWOW>
											</div>
										</div>
									) : ("")}
									</>
									<>
									{(prop.acf_fc_layout === "simple_text") ? (
										<div className="section--normal-margin">
											<div className="container">
												<ReactWOW  animation='fadeInLeft'>
												<p className="text-bebas text-bebas--big text-bebas--white" dangerouslySetInnerHTML={{ __html: prop.text }} />
												</ReactWOW>
											</div>
										</div>
									) : ("")}
									</>
									
									<>
									{(prop.acf_fc_layout === "text_image_style2") ? (
										<div className="section--normal-margin">
											<div className="container">
												<div className="text-image--style2">
													<div className="image" data-stellar-ratio="1.08">
														<img src={prop.image.url} alt={prop.image.alt} />
													</div>
													<div className="text" dangerouslySetInnerHTML={{ __html: prop.text }} />
														
												</div>
											</div>
										</div>
									) : ("")}
									</>
									<>
									{(prop.acf_fc_layout === "features") ? (
										<div className="section--normal-margin">
											<div className="container">
												<ReactWOW  animation='fadeInLeft'>
												<h2 className={(prop.title_center == true)? ("text-bebas text-bebas--big text--pink features-title features-title--center") : ("text-bebas text-bebas--big text--pink features-title")} dangerouslySetInnerHTML={{ __html: prop.title }} />
												</ReactWOW>

										<div className={(prop.three_cols == true) ? ("features-table features-table--3") : ("features-table")}>
											{prop.table.map((proptable,k) => {return (
											<ReactWOW  animation='zoomIn' delay={'0.'+((k+1)*2)+'s'} >		
											<div className="item  ">
												<img src={proptable.icon.url} alt=""/>
												<h4>{proptable.title} </h4>
												  <p>{proptable.text}</p>
											</div>
											</ReactWOW>
										   )})} 
										</div>

									</div>
								</div>
									) : ("")}
									</>
									<>
									{(prop.acf_fc_layout === "partners") ? (
										<div className="section--normal-margin">
											<div className="container">
												<h2 className="text-bebas text-bebas--big text--pink features-title features-title--center" dangerouslySetInnerHTML={{ __html: prop.title }} />
												<div className="partners">
													{prop.partners.map((proppartners,j) => {return (
														<div className={(proppartners.small == true) ? ("item  item--small") : ("item")}>

						<img src={proppartners.image.url} alt={proppartners.image.alt} />

					  </div>
													)})} 
												</div>
											</div>	
										</div>	
									) : ("")}
									</>
									</>
									
									
								)})}
								
								<>
								{(base.solution_cta_text !== "") ? (
								<div className="section-find-more">
									<div className="container">
										<a href={base.solution_cta} className="find-more-link">
											<h3 className="text-bebas">{base.solution_cta_text}</h3>
											<span className="arrow">
												<svg xmlns="http://www.w3.org/2000/svg" width="113.526" height="43.006" viewBox="0 0 113.526 43.006">
												  <g id="Group_11" data-name="Group 11" transform="translate(0.594 0.503)">
													<path id="Line_Copy_5" data-name="Line Copy 5" d="M110.625.875.406.813" transform="translate(0 20.056)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
													<path id="Line_Copy_6" data-name="Line Copy 6" d="M28.51,1.076.406.813" transform="matrix(-0.704, 0.71, -0.71, -0.704, 112.367, 21.413)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
													<path id="Line_Copy_7" data-name="Line Copy 7" d="M28.51-1.076.406-.812" transform="matrix(-0.704, -0.71, 0.71, -0.704, 112.367, 20.587)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
												  </g>
												</svg>
											</span>
										</a>
									</div>
								</div>
								
								) : ("")}
								</>
								
								
								<Nav page="Resonate" />
								<Testimonials/>
								<GetTouch/>
						</>
					) : ("")} 
				</>
				
				{/* Reveal Page Code */}
				<> {(PageCode === "reveal") ? (
						<>
							<Nav page="Reveal" />
								<div className="hero-solution--single" style={ sectionStyle }>
									<div className="container">
										<div className="hero-text">
											 <ReactWOW  animation='fadeInUp'>
											 <h1 className="text-bebas   text-bebas--ultra-big text--pink solution_flare solution_flare_60">{base.hero_title}</h1>
											 </ReactWOW>
											<ReactWOW delay='1s' animation='fadeInUp'><h2>{base.hero_subtitle}</h2></ReactWOW>
											<ReactWOW delay='1.4s' animation='fadeInUp'><h3>{base.hero_text}</h3></ReactWOW>
										</div>
									</div>
								</div>
								
								{base.sections.map((prop,i) => {return (
									<>
									<>
									{(prop.acf_fc_layout === "text_image") ? (
										<div className={(i % 2 == 0) ? ("text-image") : ("text-image text-image--alt")} style={{backgroundImage: "url("+prop.image.url+")"}} >
											<div className="container">
												<ReactWOW animation='fadeInUp'>
												<div className="text">
													<span dangerouslySetInnerHTML={{ __html: prop.text }} ></span>
													
													<a href="https://vimeo.com/325733520" className="read-more solution-read-more" data-fancybox="">See Example</a>
												</div>
												</ReactWOW>
											</div>
										</div>
									) : ("")}
									</>
									
									<>
									{(prop.acf_fc_layout === "simple_text") ? (
										<div className="section--normal-margin">
											<div className="container">
												<ReactWOW  animation='fadeInLeft'>
												<p className="text-bebas text-bebas--big text-bebas--white" dangerouslySetInnerHTML={{ __html: prop.text }} />
												</ReactWOW>
											</div>
										</div>
									) : ("")}
									</>
									
									<>
									{(prop.acf_fc_layout === "text_image_style2") ? (
										<div className="section--normal-margin">
											<div className="container">
												<div className="text-image--style2">
													<div className="image" data-stellar-ratio="1.08">
														<img src={prop.image.url} alt={prop.image.alt} />
													</div>
													<div className="text" dangerouslySetInnerHTML={{ __html: prop.text }} />
														
												</div>
											</div>
										</div>
									) : ("")}
									</>
									
									<>
									{(prop.acf_fc_layout === "features") ? (
										<div className="section--normal-margin">
											<div className="container">
												<ReactWOW  animation='fadeInLeft'>
												<h2 className={(prop.title_center == true)? ("text-bebas text-bebas--big text--pink features-title features-title--center") : ("text-bebas text-bebas--big text--pink features-title")} dangerouslySetInnerHTML={{ __html: prop.title }} />
												</ReactWOW>

										<div className={(prop.three_cols == true) ? ("features-table features-table--3") : ("features-table")}>
											{prop.table.map((proptable,k) => {return (	
											<ReactWOW  animation='zoomIn' delay={'0.'+((k+1)*2)+'s'} >
											<div className="item  ">
												<img src={proptable.icon.url} alt=""/>
												<h4>{proptable.title} </h4>
												  <p>{proptable.text}</p>
											</div>
											</ReactWOW>
										   )})} 
										</div>

									</div>
								</div>
									) : ("")}
									</>
									<>
									{(prop.acf_fc_layout === "partners") ? (
										<div className="section--normal-margin">
											<div className="container">
												<h2 className="text-bebas text-bebas--big text--pink features-title features-title--center" dangerouslySetInnerHTML={{ __html: prop.title }} />
												<div className="partners">
													{prop.partners.map((proppartners,j) => {return (
														<div className={(proppartners.small == true) ? ("item  item--small") : ("item")}>

						<img src={proppartners.image.url} alt={proppartners.image.alt} />

					  </div>
													)})} 
												</div>
											</div>	
										</div>	
									) : ("")}
									</>
									</>
									
									
								)})}
								
								<>
								{(base.solution_cta_text !== "") ? (
								<div className="section-find-more">
									<div className="container">
										<a href={base.solution_cta} className="find-more-link">
											<h3 className="text-bebas">{base.solution_cta_text}</h3>
											<span className="arrow">
												<svg xmlns="http://www.w3.org/2000/svg" width="113.526" height="43.006" viewBox="0 0 113.526 43.006">
												  <g id="Group_11" data-name="Group 11" transform="translate(0.594 0.503)">
													<path id="Line_Copy_5" data-name="Line Copy 5" d="M110.625.875.406.813" transform="translate(0 20.056)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
													<path id="Line_Copy_6" data-name="Line Copy 6" d="M28.51,1.076.406.813" transform="matrix(-0.704, 0.71, -0.71, -0.704, 112.367, 21.413)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
													<path id="Line_Copy_7" data-name="Line Copy 7" d="M28.51-1.076.406-.812" transform="matrix(-0.704, -0.71, 0.71, -0.704, 112.367, 20.587)" fill="none" stroke="#fff" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path>
												  </g>
												</svg>
											</span>
										</a>
									</div>
								</div>
								
								) : ("")}
								</>
								
								
								<Nav page="Reveal" />
								<Testimonials/>
								<GetTouch/>
						</>
					) : ("")} 
				</>
				
				{/* Solutions Page Code */}
				<> {(PageCode === "solutions") ? (
						<>
							<div className="solutions_content">
								<ReactWOW delay='0.6s' animation='fadeInLeft'>
								<div className="solutions_intro" dangerouslySetInnerHTML={{ __html: base.hero_text_column_left }} />
								</ReactWOW>
								<div className="solutions_quads">
									<ReactWOW delay='0.8s' animation='fadeInUp'>
									<a className="solutions_quad" href="/reveal/">
										<div>
											<h2>R<span>eveal</span>.</h2>
											<p>Smarter Dashboards for making more informed decisions.</p>
										</div>
										<video src={Torus} autoPlay playsInline muted loop></video>
									</a>
									</ReactWOW>
									<ReactWOW delay='0.9s' animation='fadeInUp'>
									<a className="solutions_quad" href="/relate/">
										<div>
											<h2>R<span>elate</span>.</h2>
											<p>Advanced Media Buying & Sophisticated Audience Targeting.</p>
										</div>
										<video src={Float} autoPlay playsInline muted loop></video>
									</a>
									</ReactWOW>
									<ReactWOW delay='1s' animation='fadeInUp'>
									<a className="solutions_quad"  href="/resonate/">
										<div>
											<h2>R<span>esonate</span>.</h2>
											<p>Engaging Ad Creative for getting noticed & purchased.</p>
										</div>
										<video src={Pump} autoPlay playsInline muted loop></video>
									</a>
									</ReactWOW>
									<ReactWOW delay='1.1s' animation='fadeInUp'>
									<a className="solutions_quad"  href="/rejoice/">
										<div>
											<h2>R<span>ejoice</span>.</h2>
											<p>Performance Media that'll have you singing Hallelujah!</p>
										</div>
										<video src={Sprial} autoPlay playsInline muted loop></video>
									</a>
									</ReactWOW>

					</div>
							</div>
							<Testimonials/>
							<GetTouch/>
						</>
					) : ("")} 
				</>
				
				{/* Common Page Code */}
				<> {(is_page === 0) ? (
						<>
						<div className="simple-hero">
							<div className="cloud-left"><img src={cloud1} alt="" /></div>
							<div className="cloud-right"><img src={cloud2} alt="" /></div>
							<div className="container">
								<h1 className="text-bebas text-bebas--big">{this.props.pageContext.Data.title}</h1>
							</div>
						</div>
						<div className="section section--normal-margin default-page">
							<div className="container container-small">
								<div className="text-area" dangerouslySetInnerHTML={{ __html: this.props.pageContext.Data.data.content}} />
									
							</div>
						</div>
						</>
					) : ("")} 
				</>
				
				
			</>
			</Layout>	
		)
		
	}
	
}	

export default Page
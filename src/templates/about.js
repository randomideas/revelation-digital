import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import Testimonials from "../components/Common/Testimonials"
import GetTouch from "../components/Common/GetTouch"
import { Helmet } from "react-helmet"
import Counter from 'react-number-counter'

class AboutUs extends Component {
	
	
	
	
	render() {
		var base = this.props.pageContext.Data.data.additional_data.About;
		return (
			<Layout>
				<>
				<Helmet>
					<title>Page title | Revelation Digital - Eye-Opening Programmatic Media</title>
				</Helmet>
				<section className="about-top-section">
					<div className="container">
						<div className="row row--00">
							<div className="col col--6 col--sm-12">
								<div className="top-section-text" data-wow-delay="0.4s">
									<h1 className="text-bebas text-bebas--big text-bebas--white text-bebas--no-letter-spacing" dangerouslySetInnerHTML={{ __html: base.about_intro_heading}} />
								</div>
							</div>
							<div className="col col--6 col--sm-12">
								<div className="top-section-paragraph" data-wow-delay="0.8s">
									<span dangerouslySetInnerHTML={{ __html: base.about_intro_text}} />
								</div>
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
							<h2 className="  text-bebas text-bebas--ultra-big text-bebas--stroke text-bebas--stroke-white" dangerouslySetInnerHTML={{ __html: base.about_intro_outline_text}} />
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
								<div className="col col--5 col--sm-12 ">
									<h3 className="text-bebas text-bebas--big text--pink" dangerouslySetInnerHTML={{ __html: prop.title}} />
								</div>
								<div className="col col--6 col--sm-12" data-wow-delay="0.3s">
									<div className="content-area" dangerouslySetInnerHTML={{ __html: prop.text}} />	
								</div>
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
						<p className={"text-bebas text-bebas--big text-bebas--white line"+(i+1)} dangerouslySetInnerHTML={{ __html: propquote.quote}} />
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
			</Layout>	
		)
	}
}



export default AboutUs
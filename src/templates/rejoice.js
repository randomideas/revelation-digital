import React, {Component} from 'react';
import Layout from "../components/layout"
import Nav from "../components/Common/Nav"
import Testimonials from "../components/Common/Testimonials"
import GetTouch from "../components/Common/GetTouch"
import { Helmet } from "react-helmet"

class Rejoice extends Component {
	
	
	
	render() {
		var base = this.props.pageContext.Data.data.additional_data.Rejoice;
		var img = base.hero_image.url;
		var sectionStyle = { 
		  backgroundImage: `url(${img})`
		};
		
		return (
			<Layout>
				<>
				<Helmet>
					<title>Page title | Revelation Digital - Eye-Opening Programmatic Media</title>
				</Helmet>
				<Nav page="Rejoice" />
				<div className="hero-solution--single" style={ sectionStyle }>
					<div className="container">
						<div className="hero-text">
							 <h1 className="text-bebas   text-bebas--ultra-big text--pink solution_flare solution_flare_60">{base.hero_title}</h1>
							<h2  >{base.hero_subtitle}</h2>
							<h3 >{base.hero_text}</h3>
						</div>
					</div>
				</div>
				
				{base.sections.map((prop,i) => {return (
					<>
					<>
					{(prop.acf_fc_layout === "text_image") ? (
						<div className={(i % 2 == 0) ? ("text-image") : ("text-image text-image--alt")} style={{backgroundImage: "url("+prop.image.url+")"}} >
							<div className="container">
								<div className="text">
									<span dangerouslySetInnerHTML={{ __html: prop.text }} ></span>
									
									<a href="https://vimeo.com/325733520" className="read-more solution-read-more" data-fancybox="">See Example</a>
								</div>
							</div>
						</div>
					) : ("")}
					</>
					<>
					{(prop.acf_fc_layout === "simple_text") ? (
						<div className="section--normal-margin">
							<div className="container">
								<p className="text-bebas text-bebas--big text-bebas--white" dangerouslySetInnerHTML={{ __html: prop.text }} />
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
								<h2 className={(prop.title_center == true)? ("text-bebas text-bebas--big text--pink features-title features-title--center") : ("text-bebas text-bebas--big text--pink features-title")} dangerouslySetInnerHTML={{ __html: prop.title }} />

						<div className={(prop.three_cols == true) ? ("features-table features-table--3") : ("features-table")}>
							{prop.table.map((proptable,k) => {return (	
							<div className="item  ">
								<img src={proptable.icon.url} alt=""/>
								<h4>{proptable.title} </h4>
								  <p>{proptable.text}</p>
							</div>
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
			</Layout>	
		)
	}
}



export default Rejoice
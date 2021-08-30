import React, {Component} from 'react';
import Layout from "../components/layout"
import Nav from "../components/Common/Nav"
import Testimonials from "../components/Common/Testimonials"
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
					{(prop.acf_fc_layout === "text_image") ? (
						<div className={(i % 2 == 0) ? ("text-image text-image--alt") : ("text-image")} style={{backgroundImage: "url("+prop.image.url+")"}} >
							<div className="container">
								<div className="text">
									<span dangerouslySetInnerHTML={{ __html: prop.text }} ></span>
									
									<a href="https://vimeo.com/325733520" className="read-more solution-read-more" data-fancybox="">See Example</a>
								</div>
							</div>
						</div>
					) : ("")}
					</>
				)})}
				<Nav page="Rejoice" />
				<Testimonials/>
				</>
			</Layout>	
		)
	}
}



export default Rejoice
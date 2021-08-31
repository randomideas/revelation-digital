import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Testimonials from "../components/Common/Testimonials"
import GetTouch from "../components/Common/GetTouch"
import Torus from "../images/Torus_2.mp4"
import Float from "../images/Float_2.mp4"
import Pump from "../images/Pump_2.mp4"
import Sprial from "../images/Sprial_2.mp4"

class Solutions extends Component {
	
	
	
	render() {
		var base = this.props.pageContext.Data.data.additional_data.Solutions;
		return (
			<Layout>
				<>
				<Helmet>
					<title>Page title | Revelation Digital - Eye-Opening Programmatic Media</title>
				</Helmet>
				<div className="solutions_content">
					<div className="solutions_intro" dangerouslySetInnerHTML={{ __html: base.hero_text_column_left }} />
					<div className="solutions_quads">
						<a className="solutions_quad" href="/reveal/">
							<div>
								<h2>R<span>eveal</span>.</h2>
								<p>Smarter Dashboards for making more informed decisions.</p>
							</div>
							<video src={Torus} autoPlay playsInline muted loop></video>
						</a>
						<a className="solutions_quad" href="/relate/">
							<div>
								<h2>R<span>elate</span>.</h2>
								<p>Advanced Media Buying & Sophisticated Audience Targeting.</p>
							</div>
							<video src={Float} autoPlay playsInline muted loop></video>
						</a>
						<a className="solutions_quad"  href="/resonate/">
							<div>
								<h2>R<span>esonate</span>.</h2>
								<p>Engaging Ad Creative for getting noticed & purchased.</p>
							</div>
							<video src={Pump} autoPlay playsInline muted loop></video>
						</a>
						<a className="solutions_quad"  href="/rejoice/">
							<div>
								<h2>R<span>ejoice</span>.</h2>
								<p>Performance Media that'll have you singing Hallelujah!</p>
							</div>
							<video src={Sprial} autoPlay playsInline muted loop></video>
						</a>

		</div>
				</div>
				<Testimonials/>
				<GetTouch/>
				</>
			</Layout>	
		)
	}
}



export default Solutions
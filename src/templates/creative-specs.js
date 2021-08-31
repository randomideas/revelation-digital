import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';

class Creative extends Component {
	
	
	render() {
		
		return (
			<Layout>
				<>
					<Helmet>
						<title>{this.props.pageContext.Data.title} - Revelation Digital </title>
					</Helmet>
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
			</Layout>	
		)
	}
}



export default Creative
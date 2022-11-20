import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import GetTouch from "../components/Common/GetTouch"
import { Link} from 'gatsby'
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';
import Counter from 'react-number-counter'
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';

class Blog extends Component {
	
	constructor(props) {
    super(props);
   
  }
	
	
	
	
	render() {
		console.log(this.props.pageContext.Data);
		
		return (
		
			<Layout>
				<>
				<Helmet>
					<title>Blog . Revelation Digital </title>
					
				</Helmet>
				<div className="simple-hero">
							<div className="cloud-left"><img src={cloud1} alt="" /></div>
							<div className="cloud-right"><img src={cloud2} alt="" /></div>
							<div className="container">
								<h1 className="text-bebas text-bebas--big">Blog</h1>
							</div>
						</div>
	
						<div className="section section--normal-margin default-page">
	
							{this.props.pageContext.Data && this.props.pageContext.Data.map( prop => {
														return (
															<>
							 
							 <div class="cs_results-row">
							 <div class="cs_results-row__col cs_results-row__col--text">
							 	{(prop.image != "") ? (<><img  src={prop.image} /></>) : ("")}
							 </div>
							 <div class="cs_results-row__col cs_results-row__col--text">
								 <h3 class="text-bebas text-bebas--big text--pink">{prop.title}</h3>
<p><Link to={"/blog/"+prop.slug}  class="jsContactCardTrigger block text-bebas text-bebas--big text-bebas--stroke">Read More</Link></p>
							 </div>
							 </div>
							 </>
															
														)
													})}
						</div>
				
				<GetTouch/>
				</>
			</Layout>
			
		)
		
	}
	
}

export default Blog

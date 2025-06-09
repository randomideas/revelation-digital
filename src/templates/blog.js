import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import GetTouchDiff from "../components/Common/GetTouchDiff"
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
	<div className="container container-small">
	<div class="row">
	
							{this.props.pageContext.Data && this.props.pageContext.Data.map( prop => {
														return (
															<>
							 
							 
							 <div class="col-lg-4 col4 col-md-4 col-sm-6 blogsec">
							 	{(prop.image != "") ? (<><img  src={prop.image} /></>) : ("")}
							 
								 <h3 class="ttl text-bebas text-bebas--big text--pink">{prop.title}</h3>
<p><a href={"/blog/"+prop.slug}  class="jsContactCardTrigger block text-bebas text-bebas--big linkreadmore">Read More</a></p>
							 </div>
							 
							 </>
															
														)
													})}
						</div>
</div>
</div>
				
				<GetTouchDiff/>
				</>
			</Layout>
			
		)
		
	}
	
}

export default Blog

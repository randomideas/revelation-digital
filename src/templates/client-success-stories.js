import React, {Component} from 'react';
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import GetTouch from "../components/Common/GetTouch"
class ClientStory extends Component {
	
	
	
	render() {
		
		return (
			<Layout>
				<>
				<Helmet>
					<title>Client Success Stories - Revelation Digital </title>
				</Helmet>
				<section className="client-stories-hero-section">
				  <div className="container">
					<div className="client-stories-hero-text wow fadeInRight">
					  <h1 className="text-bebas text-bebas--big text--pink text-bebas--no-letter-spacing">
						
					  </h1>
					</div>
				  </div>
				  <div className="line-vertical-center-wrapper line-vertical-center-wrapper--bottom">
					<div className="line-vertical-center"></div>
				  </div>
				</section>
				<div className="section-find-more">
  <div className="container">
   
    <a href="/solutions" className="find-more-link">
      <h3 className="text-bebas"></h3>
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
				<GetTouch/>
				</>
			</Layout>	
		)
	}
}



export default ClientStory
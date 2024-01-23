import React from "react"
import {withPrefix} from "gatsby"
import Helmet from 'react-helmet'
import "../styles/style.css"
import favicon from '../images/favicon.png';
import Header from "./Common/Header"
import Footer from "./Common/Footer"

const TemplateWrapper = ({ children }) => (
  <div>
     <Helmet title="RD" link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]} />
	<Helmet>
	 {/* jquery */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src={withPrefix("js/stellar.js")} ></script>
	</Helmet>
    <Header/>
      <main className="main-content" >{children}</main>
	<Footer/>  
  </div>
)

export default TemplateWrapper

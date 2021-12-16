import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import GetTouch from "../components/Common/GetTouch"
import { Link} from 'gatsby'
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';
import Counter from 'react-number-counter'

class CSD extends Component {
	
	constructor(props) {
    super(props);
   
  }
	
	getYTEmbedURL(url, controls = true) {

	  var shortUrlRegex   = '/youtu.be\/([a-zA-Z0-9_-]+)\??/i';
	  var longUrlRegex    = '/youtube.com\/((?:embed)|(?:watch))((?:\?v\=)|(?:\/))([a-zA-Z0-9_-]+)/i';
		var p =/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	  var controls_str    = controls ? '?controls=1' : '';
		
		if(url.match(p)){
			
			var matches = url.match(p);
			
			return 'https://www.youtube.com/embed/' + matches[matches.length - 2];
		}
		if(url.match(p)){
			
			var matches = url.match(p);
			return 'https://www.youtube.com/embed/' + matches[matches.length - 2];
		}
		return false;
	}

	getVimeoEmbedURL(url) {
		if(url.match('/https:\/\/vimeo.com\/(\\d+)/')){
			var matches = url.match('/https:\/\/vimeo.com\/(\\d+)/');
			return 'http://player.vimeo.com/video/' + matches[1];
		}
		return false;
	}

	getYTiframe(embedURL) {
		return '<iframe width="560" height="315" src="' + embedURL + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
	}

	getVimeoiframe(embedURL) {
		return '<iframe width="560" height="315" src="' + embedURL + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
	}

	getHTML5Video(url) {
		return '<video controls><source src="' + url + '"></source></video>';
	}

	 getVideoHTML(url) {
	  if ( this.getYTEmbedURL(url) )
		return this.getYTiframe(this.getYTEmbedURL(url));
	  if ( this.getVimeoEmbedURL(url) )
		return this.getVimeoiframe(this.getVimeoEmbedURL(url));
	  return this.getHTML5Video(url);
	}
	
	
	render() {
		console.log(this.props.pageContext.Data.Data);
		var img = this.props.pageContext.Data.Data.hero_image.url;
		var sectionStyle = { 
		  backgroundImage: `url(${img})`
		};
		var seo = this.props.pageContext.Data.Data.seo;
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		  };
		return (
		
			<Layout>
				<>
				<Helmet>
					<title>{this.props.pageContext.Data.title} . Revelation Digital </title>
					
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
				<section className="case-study-hero-section" style={ sectionStyle }>
					<div className="container">
						<div className="case-study-hero-text">
							<h1 className="text-bebas text-bebas--ultra-big text-bebas--stroke text-bebas--stroke-white  ">{this.props.pageContext.Data.title}</h1>
							<p className="text-bebas text-bebas--big text-bebas--white text-bebas--no-letter-spacing" dangerouslySetInnerHTML={{ __html: this.props.pageContext.Data.Data.hero_title}} />
						</div>
					</div>
				</section>
				<div className="case-study-intro-section case-study-intro-section--no-diagonal case-study-intro-section--cs-intro">
					<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top is_cs-intro">
						<div className="line-vertical-center is_active"></div>
					</div>
				</div>
				{(this.props.pageContext.Data.Data.sections !== false) ? (
				<>
				{this.props.pageContext.Data.Data.sections.map((section) =>
					<>
					
					<>
					{(section.acf_fc_layout === "simple_text") ? (
						<>
						<section className="cs_simple-text-section section--normal-margin no-mt">
						  <div className="container">
							<ReactWOW animation='fadeInUp'>
							<div className="cs_simple-text" dangerouslySetInnerHTML={{ __html: section.text}} >
							</div>
							</ReactWOW>
						  </div>
						</section>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "products_used") ? (
						<>
							<section className="cs_products-used-section section--normal-margin">
								<div className="cs_products-used">
									<div className="cs_products-used__title">
									  <h2>{section.cs_title}</h2>
									</div>
									<div className="cs_products-used-list">
									{section.checkboxes.map((checkboxd) =>
										<>
										<Link href={checkboxd.link.url} className={(checkboxd.checked === true) ? ("cs_products-used-list__item cs_products-used-list__item--active") : ("cs_products-used-list__item")} >{checkboxd.link.title}.</Link>
										</>
									)}
									</div>
								</div>
							</section>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "results") ? (
						<>
							<section className="cs_results-section section--normal-margin">
								<div className="container">
									<div className="cs_results-title">
										<h2>{section.title}</h2>
									</div>
									{section.list.map((lists) =>
										<div className={(lists.reversed_alignment) ? ("cs_results-row cs_results-row--reversed") : ("cs_results-row")}>
											<div className="cs_results-row__col cs_results-row__col--graph">
											{(lists.graph.indexOf("domo.com") > -1) ? (
												<div className="cs_results-row-graph domo">
													<iframe src={lists.graph}></iframe>
												</div>
												) : (
												<div className="cs_results-row-graph">
													<img src={lists.graph} alt="" />
												</div>
												)}
											</div>
											<div className="cs_results-row__col cs_results-row__col--text">
											<ReactWOW  animation={(lists.reversed_alignment) ? ("fadeInLeft") : ("fadeInRight")}>	
											  <div className={(lists.reversed_alignment) ? ("cs_results-row-text") : ("cs_results-row-text")}>
												<h3>{lists.text}</h3>
												<p>{lists.subtext}</p>
											  </div>
											  </ReactWOW>
											</div>
										</div>
									)}
								</div>
							</section>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "revelations") ? (
						<>
						<section className="cs_revelations-section section--normal-margin">
							<div className="cs_revelations-artwork" data-stellar-ratio="1.1" style={{backgroundImage: "url("+section.image.url+")"}} ></div>
							<div className="container">
								<div className="cs_results-title cs_results-title--revelations">
									<h2>{section.title}</h2>
								</div>
								<div className="cs_revelations-list">
									{section.list.map((lists,i) =>
										<>
											<div className="cs_revelations-list-item">
												<ReactWOW animation='fadeIn'>
												<div className="cs_revelations-list-item__index">
												{(i+1)}
												</div>
												</ReactWOW>
												<ReactWOW animation='fadeInRight'>
												<div className="cs_revelations-list-item__text" dangerouslySetInnerHTML={{ __html: lists.text}} />
												
												
												</ReactWOW>
											</div>
										</>
									)}
								</div>
							</div>
						</section>
						</>
					) : ("")}
					</>
					<>
					{(section.acf_fc_layout === "work") ? (
						<>
							<section className="cs_work-section section--normal-margin">
								<div className="container">
									<div className="cs_results-title cs_results-title--work">
										<h2>{section.title}</h2>
									</div>
									{section.subsections.map((subsection,i) =>
										<>
										<>
										{(subsection.type === 'text') ? (
											<div className="cs_work-subsection">
											  <div className="container">
												<ReactWOW animation='fadeInUp'>
												<div className="cs_simple-text cs_simple-text--work" dangerouslySetInnerHTML={{ __html: subsection.text}} />
												</ReactWOW>  
												
											  </div>
											</div>
										) : ("")}
										</>
										<>
										{(subsection.type === 'slider') ? (
											 <div className="cs_work-subsection">
											  <div className="cs_work-slider-wrapper jsCSWorkSliderWrapper">
												<div className="cs_work-slider jsCSWorkSlider">
												<Slider {...settings}>
												{subsection.slides.map((slide,i) =>	
													<div className="cs_work-slide">
														<img src={slide.image.url} alt={slide.image.alt} />
													</div>
												)}	
												</Slider>
												</div>
											  </div>
											</div>
										) : ("")}
										</>
										<>
										{(subsection.type === 'icons') ? (
											<div className="cs_work-subsection--icons">
												<div className="container">
													<div className="features-table features-table--3">
														{subsection.icons.map((icon,k) =>	
															<ReactWOW animation='zoomIn' delay={'0.'+(k*2)+'s'} >
																<div className="item" >
																	<img src={icon.icon.url} alt={icon.icon.alt} />
																	<h4>{icon.label}</h4>
																</div>
															</ReactWOW>  
														)}
													</div>
												</div>
											</div>
										) : ("")}
										</>
										<>
										{(subsection.type === 'image') ? (
											 <div className="cs_work-subsection">
											  <div className="container">
												<div className="cs_work-fullwidth-image">
												  <img src={subsection.image.url} alt={subsection.image.alt} />
												</div>
											  </div>
											</div>
										) : ("")}
										</>
										<>
										{(subsection.type === 'video') ? (
											 <div className="cs_work-subsection">
											  <div className="container">
												<div className="embed-responsive embed-responsive-16by9" dangerouslySetInnerHTML={{ __html: this.getVideoHTML(subsection.video)}}  />
											  </div>
											</div>
										) : ("")}
										</>
										</>
									)}
								</div>
							</section>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "quote") ? (
						<>
							<section className="case-study-client-quote">
							  <div className="container">
								<span className="quote-icon">
								  <svg xmlns="http://www.w3.org/2000/svg" width="229" height="187" viewBox="0 0 229 187">
									<path id="_" data-name="“" d="M227,185H131.516V99.685L174.754,0H215.29L189.167,89.806H227V185ZM95.484,185H0V99.685L43.238,0H83.774L57.65,89.806H95.484V185Z" transform="translate(1 1)" fill="none" stroke="#b019d4" stroke-miterlimit="10" stroke-width="2"/>
								  </svg>
								</span>
								<ReactWOW  animation='fadeInUp'>
								<div className="quote">
								  <p className="quote-title text-bebas text-bebas--big text-bebas--stroke">{section.title}</p>
								  <blockquote className="content-area">
									<span dangerouslySetInnerHTML={{ __html: section.text}} ></span>
									<cite>{section.cite}</cite>
								  </blockquote>
								</div>
								</ReactWOW>
							  </div>
							</section>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "epilogue") ? (
						<>
							<section class="cs_epilogue-section">
						  <div class="cs_epilogue-artwork"></div>
						  <div class="container">
						  <ReactWOW  animation='fadeInUp'>
							<div class="cs_epilogue-content" dangerouslySetInnerHTML={{ __html: section.text}} />
							</ReactWOW> 
							
						  </div>
						</section>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "epilogue") ? (
						<>
							<section className="cs_epilogue-section">
						  <div className="cs_epilogue-artwork"></div>
						  <div className="container">
						  <ReactWOW  animation='fadeInUp'>
							<div className="cs_epilogue-content" dangerouslySetInnerHTML={{ __html: section.text}} />
							</ReactWOW> 
							
						  </div>
						</section>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "journey") ? (
						<>
						<section className="cs_journey-section section--normal-margin">
							<div className="container">
								<div className="cs_results-title cs_results-title--journey">
								  <h2>{section.title}</h2>
								</div>
								{section.subsections.map((subsection,i) =>
										<>
											 <div className="cs_journey-subsection">
									  <div className="cs_journey-top">
										<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top is_cs-internal">
										  <div className="line-vertical-center"></div>
										</div>
									  </div>
									  <ReactWOW  animation='fadeInUp'>
									  <div className="cs_journey-subtitle">
										<h3>{subsection.title}</h3>
									  </div>
									  </ReactWOW> 
									  <div className="cs_journey-subsection-row">
										<div className="cs_journey-subsection-row__col">
										 <ReactWOW  animation='fadeInLeft'>
										  <div className="cs_journey-subsection-content" dangerouslySetInnerHTML={{ __html: subsection.left_column_text}}  />
											</ReactWOW> 
										</div>
										<div className="cs_journey-subsection-row__col">
										 <ReactWOW  animation='fadeInRight'>
										  <div className="cs_journey-subsection-content" dangerouslySetInnerHTML={{ __html: subsection.right_column_text}} />
											</ReactWOW> 
										</div>
									  </div>
									</div>
										</>
								)}
								
								
							</div>
						</section>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "divided_text") ? (
						<>
							<div className="section-divided-text section-divided-text--case-study">
								<div className="container">
									{section.groups.map((group,i) =>
									<>
										<div className="divided-text-group">
											 <ReactWOW  animation='fadeInRight'>
											<h2 className="divided-text-title text-bebas text-bebas--big text-bebas--stroke">{group.title}</h2>
											</ReactWOW> 
											{group.columns.map((column,k) =>
											<>
												<div className="divided-text-wrapper">
												<div className="row">
												  <div className="col col--5 col--sm-12">
													<ReactWOW  animation='fadeInUp'>
													<h3 className="text-bebas text-bebas--big text--pink">{column.title}</h3>
													</ReactWOW> 
												  </div>
												  <div className="col col--6 col--sm-12">
													<ReactWOW  animation='fadeInUp' delay={'0.3s'} >
													<div className="content-area">
													  <span dangerouslySetInnerHTML={{ __html: column.text}} ></span>
													  {(column.button) ? (
														<a href={column.button.url} className="case-study-link">{column.button.title}</a>
													  ) : ("")}
													</div>
													</ReactWOW> 
												  </div>
												</div>
											  </div>
											</>
											)}
										</div>	
									</>
									)}
								</div>
							</div>
						</>
					) : ("")}
					</>
					
					<>
					{(section.acf_fc_layout === "stats") ? (
						<>
							<section className="case-study-stat-section">
							  <div className="container">
							  <ReactWOW  animation='fadeInLeft'>
								<div className="case-study-stat-section-title">
								  <h2 className="text-bebas text-bebas--big text-bebas--white text-bebas--no-letter-spacing">{section.title}</h2> 
								</div>
								</ReactWOW> 
							  </div>
							  <div className="stat-items-wrapper stat-items-wrapper--case-study jsStatsWrapper">
								{section.stats.map((stat,i) =>
									<>
										<LazyLoad height={200}  >
										<div className={(stat.large) ? ("stat-item stat-item--style-2") : ("stat-item stat-item--style-1")} >
											<span className="number text-bebas text-bebas--ultra-big text-bebas--stroke">
												<span>{stat.stat_prefix}</span>
												<span><Counter start={1} end={stat.stat} delay={8} /></span>
												<span>{stat.number_postfix}</span>
											</span>
											<ReactWOW  animation='fadeInUp'>
											<span className="label">{stat.text}</span>
											</ReactWOW> 	 
										</div>
										</LazyLoad>
									</>
								)}	
							  </div>
							  </section>
						</>
					) : ("")}
					</>
					
					
					</>
				)}
				</> ) : ("")}

				<div className="section-find-more">
	<div className="container">
			<a href="" className="find-more-link">
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
			<h3 className="text-bebas">Read Next Story </h3>
			<a href="" className="find-more-link">
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

				
				{this.props.pageContext.Data.Data.more_links.map((links) => 
					<div className="section-find-more">
						<div className="container">
							<a href={links.link} className="find-more-link">
								<h3 className="text-bebas">{links.text}</h3>
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
				)} 
				
				<GetTouch/>
				</>
			</Layout>
			
		)
		
	}
	
}

export default CSD

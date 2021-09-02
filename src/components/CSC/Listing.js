import React, {Component} from 'react';
import axios from "axios"


class Listing extends Component {
	
	constructor(props) {
    super(props);
    
        this.hoverHandler = this.hoverHandler.bind(this);
   
  }
	state = {
        pagedata: [],
		showInfo: 0,
		show: false
		
    };
	hoverHandler(param){
		document.getElementById("jsClientStickyImage").style.backgroundImage = "url('"+param+"')"; 
	}
	componentDidMount() {
		
		var url = "https://revelation.digital/wp-json/newrd/v1/rd_cs";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({showInfo: 1})
		})
    }
	render() {
		
		return (
			
				<>
				{(this.state.showInfo === 1) ? (
					<>
					<ul className="clients-menu jsClientStoriesMenu">
						{this.state.pagedata.map((prop,i) => {return (
							<li><a onMouseOver={() => this.hoverHandler(prop.img)} href={"/case-studies/"+prop.slug} data-image={prop.img} className="text-bebas text-bebas--big text-bebas--stroke">{prop.title}</a></li>
						)})}
					</ul>
					<div className="client-image-helper">
						<div id="jsClientStickyImage" className="client-image jsClientImage jsClientStickyImage" style={{backgroundImage: "url("+this.state.pagedata[0].img+")"}} ></div>
					</div>
					</>
				) : ("")}
				</>
			
		)
	}
}



export default Listing
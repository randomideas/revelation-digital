import React, {Component} from 'react';
import axios from "axios"

class GetTouch extends Component {
	
	
	state = {
        pagedata: [],
		showInfo: 0,
		show: false
		
    };
	componentDidMount() {
		
		var url = "https://revelation.digital/wp-json/newrd/v1/rd_get_touch";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({showInfo: 1})
		})
    }
	render() {
		return (
			<div className="social-icons">
				{(this.state.showInfo === 1) ? (
					<>
						<div className="get-in-touch get-in-touch--client-stories no-triangle" data-stellar-background-ratio=".2">
							<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top-alt">
								<div className="line-vertical-center"></div>
							</div>
							<div className="container container-980">
								<div className="row row--80">
									<div className="col col--6 col--sm-12" >
										<h2 dangerouslySetInnerHTML={{ __html: this.state.pagedata.get_in_touch_heading}} />
									</div>
									<div className="col col--6 col--sm-12" dangerouslySetInnerHTML={{ __html: this.state.pagedata.get_in_touch_text}} />
								</div>
							</div>
						</div>
					</>
				) : ("")}
			</div>
		)
	}
}



export default GetTouch
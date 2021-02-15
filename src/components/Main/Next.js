import React, { Component } from 'react';
import Avatars from "./avatars";
import Candidates from "./candidates-line";
import Linestyle from "../lineHR";
import './body.css';


class Next extends Component {

	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}
	}

	componentDidMount(){

		fetch('https://api-test.vanhack.dev/Calendar')
			.then(res => res.json())
			.then(json => {

				this.setState({
					isLoaded: true,
					items: json, 
				})
			});
	}

	render(){

		var { isLoaded, items } = this.state;

		if (!isLoaded){
			return <div> Loading .. </div>;
		}

		else {

		  	return (
			  	<div>
				    <div className="grid-container top">
					  <div className="grid-item first">Candidate</div>
					  <div className="grid-item">Interview Step</div>
					  <div className="grid-item">Scheduled time</div>
					  <div className="grid-item"></div>
					  <div className="grid-item"></div>
					  <div className="grid-item"></div>
					</div>

					<Linestyle color="black" />

					
							{items.map(item => (
								<div key={item.id}>
									<Candidates 
										style="grid-container"
						  				img={item.image}
						  				candidate={item.name}
						  				qualification={item.title}
						  				interviewStep={item.interviewStep}
						  				textSchedule={item.scheduledTime}
						  				textButton="Get interview link"
						  				href={"https://api-test.vanhack.dev/Calendar/interviewlink/" + item.id }
									/>
								</div>
							))}
					
				</div>
  			);
		}
	}
}


export default Next;

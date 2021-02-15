import React, { Component } from 'react';
import Avatars from "./avatars";
import Candidates from "./candidates-line";
import Linestyle from "../lineHR";
import './body.css';


class Calendar extends Component {

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

			const waitingCandidates = items.filter(item => item.status === "Waiting Confirmation");
			const upcomingCandidates = items.filter(item => item.status === "Scheduled");
			const doneCandidates = items.filter(item => item.status === "Done");

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

					<Linestyle color="#f7f7f7" />

					<h1>Waiting confirmation</h1>

							{waitingCandidates.map(item => (
							<div key={item.id}>
								<Candidates 
									style="grid-container"
								  	img={item.image}
								  	candidate={item.name}
								  	qualification={item.title}
								  	interviewStep={item.interviewStep}
								  	styleSchedule="waiting"
								  	textSchedule="Waiting confirmation"
								  	buttonStyle="none"
								  	type="waiting"
								/>
							</div>
						))}


					<h1>Upcoming</h1>

						{upcomingCandidates.map(item => (
							<div key={item.id}>
								<Candidates 
									style="grid-container upcoming"
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



					

					<h1>Done</h1>	

					  	{doneCandidates.map(item => (
							<div key={item.id}>
								<Candidates 
									style="grid-container"
					  				img={item.image}
					  				candidate={item.name}
					  				qualification={item.title}
					  				interviewStep={item.interviewStep}
					  				textSchedule={item.scheduledTime}
					  				textButton="Move to the next step"
					  				href={"https://api-test.vanhack.dev/Calendar/movenextstep/" + item.id }
					  				textSideButton="Reject"
					  				linkTextSide={"https://api-test.vanhack.dev/Calendar/reject/" + item.id}
								/>
							</div>
						))}

				</div>
			);
		}
	}
}


export default Calendar;

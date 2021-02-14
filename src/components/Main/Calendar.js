import React, { Component } from 'react';
import Avatars from "./avatars";
import Candidates from "./candidates-line";
import './body.css';


function Calendar() {
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

		<hr />

		<h1>Waiting confirmation</h1>
		<Candidates 
			style="grid-container"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Jorge Watson"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	styleSchedule="waiting"
		  	textSchedule="Waiting confirmation"
		  	buttonStyle="none"
		  	type="waiting"
		/>


		<h1>Upcoming</h1>
		<Candidates 
			style="grid-container upcoming"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Brooklyn Simmons"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	textSchedule="Tue, Nov, 18th - 10:00am"
		  	textButton="Get interview link"
		/>

		<Candidates 
			style="grid-container upcoming"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Esther Howard"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	textSchedule="Tue, Nov, 18th - 10:00am"
		  	textButton="Get interview link"
		/>

		<h1>Done</h1>
		<Candidates 
			style="grid-container"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Robert Fox"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	textSchedule="Tue, Nov, 18th - 10:00am"
		  	textButton="Move to the next step"
		  	textSideButton="Reject"
		/>

		<Candidates 
			style="grid-container"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Cameron Williamson"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	textSchedule="Tue, Nov, 18th - 10:00am"
		  	textButton="Move to the next step"
		  	textSideButton="Reject"
		/>

		<Candidates 
			style="grid-container"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Robert Fox"
		  	qualification="FullStack Developer"
		  	interviewStep="HR Interview"
		  	textSchedule="Tue, Nov, 18th - 10:00am"
		  	textButton="Move to the next step"
		  	buttonStyle="none"
		/>
		
	</div>
  );
}


export default Calendar;

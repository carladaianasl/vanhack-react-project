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

		<Candidates 
			style="grid-container"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Brooklyn Simmons"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	textSchedule="Tue, Nov, 18th - 10:00am"
		  	textButton="Get interview link"
		/>

		<Candidates 
			style="grid-container"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Esther Howard"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	textSchedule="Tue, Nov, 18th - 10:00am"
		  	textButton="Get interview link"
		/>

		<Candidates 
			style="grid-container"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Esther Howard"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	textSchedule="Tue, Nov, 18th - 10:00am"
		  	textButton="Get interview link"
		/>
		
		
	</div>
  );
}


export default Calendar;

import React, { Component } from 'react';
import Avatars from "./avatars";
import OutlinedButtons from "../button";
import Candidates from "./candidates-calendar";
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
		  	candidate="Brooklyn Simmons"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	styleSchedule=""
		  	textSchedule="Waiting confirmation"
		/>


		<h1>Upcoming</h1>
		<Candidates 
			style="grid-container upcoming"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Brooklyn Simmons"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	styleSchedule=""
		  	textSchedule="Waiting confirmation"
		/>

		<Candidates 
			style="grid-container upcoming"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Brooklyn Simmons"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	styleSchedule=""
		  	textSchedule="Waiting confirmation"
		/>

		<h1>Done</h1>
		<Candidates 
			style="grid-container"
		  	img="/static/images/avatar/2.jpg"
		  	candidate="Brooklyn Simmons"
		  	qualification="FullStack Developer"
		  	interviewStep="Technical Interview"
		  	styleSchedule=""
		  	textSchedule="Waiting confirmation"
		/>
		
	</div>
  );
}


export default Calendar;

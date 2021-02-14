import React, { Component } from 'react';
import Avatars from "./avatars";
import './body.css';

function Calendar() {
  return (
  	<div>
	    <div class="grid-container top">
		  <div class="grid-item first">Candidate</div>
		  <div class="grid-item">Interview Step</div>
		  <div class="grid-item">Scheduled time</div>
		  <div class="grid-item"></div>
		</div>

		<hr />

		<h1>Waiting confirmation</h1>
		<div class="grid-container">
		  <div class="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Jorge Watson </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div class="grid-item second">Technical Interview</div>
		  <div class="grid-item third"> Waiting confirmation </div>
		  <div class="grid-item">...</div>
		</div>

		<h1>Upcoming </h1>
		<div class="grid-container upcoming">
		  <div class="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Brooklyn Simmons </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div class="grid-item second">Technical Interview</div>
		  <div class="grid-item third"> Waiting confirmation </div>
		  <div class="grid-item">...</div>
		</div>

		<div class="grid-container upcoming">
		  <div class="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Esther Howard </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div class="grid-item second">Technical Interview</div>
		  <div class="grid-item third"> Waiting confirmation </div>
		  <div class="grid-item">...</div>
		</div>

		<h1>Done</h1>
		<div class="grid-container">
		  <div class="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Roberta Fox </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div class="grid-item second">Technical Interview</div>
		  <div class="grid-item third"> Waiting confirmation </div>
		  <div class="grid-item">...</div>
		</div>
		
		<div class="grid-container">
		  <div class="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Cameron Williamson </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div class="grid-item second">Technical Interview</div>
		  <div class="grid-item third"> Waiting confirmation </div>
		  <div class="grid-item">...</div>
		</div>

		<div class="grid-container">
		  <div class="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Roberta Fox </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div class="grid-item second">Technical Interview</div>
		  <div class="grid-item third"> Waiting confirmation </div>
		  <div class="grid-item">...</div>
		</div>
	</div>
  );
}


export default Calendar;

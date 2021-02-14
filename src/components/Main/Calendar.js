import React, { Component } from 'react';
import Avatars from "./avatars";
import OutlinedButtons from "../button";
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
		<div className="grid-container">
		  <div className="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Jorge Watson </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div className="grid-item second"> Technical Interview</div>
		  <div className="grid-item">
		  	<button className="waiting"> Waiting confirmation </button> </div>
		  <div className="grid-item">
		  		<OutlinedButtons name="Get interview link" buttonstyle="button-calendar" color="primary" />
		  </div>
		  <div className="grid-item"></div>
		  <div className="grid-item">...</div>
		</div>

		<h1>Upcoming </h1>
		<div className="grid-container upcoming">
		  <div className="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Brooklyn Simmons </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div className="grid-item second">Technical Interview</div>
		  <div className="grid-item third"> Tue, Nov, 18th - 10:00am </div>
		  <div className="grid-item">...</div>
		</div>

		<div className="grid-container upcoming">
		  <div className="grid-item first">
		  	<Avatars 
		  		alt="Name"
		  		img="/static/images/avatar/2.jpg"	/>
		  	<div className="calendar-name"> Esther Howard </div>
		  	<div className="calendar-title"> FullStack Developer</div>
		  </div>
		  <div className="grid-item second">Technical Interview</div>
		  <div className="grid-item third"> Tue, Nov, 18th - 10:00am </div>
		  <div className="grid-item">...</div>
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
		  <div class="grid-item third"> Tue, Nov, 18th - 10:00am </div>
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
		  <div class="grid-item"> Tue, Nov, 18th - 10:00am </div>
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
		  <div class="grid-item second">HR Interview</div>
		  <div class="grid-item third"> Tue, Nov, 18th - 10:00am </div>
		  <div class="grid-item">...</div>
		</div>
	</div>
  );
}


export default Calendar;

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Avatars from "./avatars";
import OutlinedButtons from "../button";
import './body.css';


const Candidates = (props) =>{

  return (
    <div>
     
      <div className="grid-container {props.background}">
        
        <div className="grid-item first">
          <Avatars 
              alt={props.avatarName}
              img={props.img} />
          <div className="calendar-name"> {props.candidate} </div>
          <div className="calendar-title"> {props.qualification}</div>
        </div>
          
        <div className="grid-item second"> {props.interviewStep}</div>
        <div className="grid-item">
          <button className={props.styleSchedule}> {props.textSchedule} </button> </div>
        <div className="grid-item">
          <OutlinedButtons name={props.textButton} buttonstyle={props.styleButton} color="primary" />
        </div>
        <div className="grid-item">{props.textSideButton}</div>
        <div className="grid-item">...</div>
      </div>
    </div>
  );
}

export default Candidates;
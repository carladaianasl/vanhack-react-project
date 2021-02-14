import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Avatars from "./avatars";
import OutlinedButtons from "../button";
import './body.css';


const Candidates = (props) =>{

  return (     
      <div className={props.style}>
        
        <div className="grid-item first">
           <Avatars 
                alt={props.avatarName}
                img={props.img}
            />
          <div className="calendar-name"> {props.candidate} </div>
          <div className="calendar-title"> {props.qualification}</div>
        </div>
          
        <div className="grid-item second"> 
            {props.interviewStep}
        </div>

        <div className="grid-item">
            <span className={props.styleSchedule}> {props.textSchedule} </span> 
        </div>

        <div className="grid-item">
            <div className={props.buttonStyle}>
                <OutlinedButtons name={props.textButton} buttonstyle={props.bstyle} color="primary" />
            </div>
        </div>

        <div className="grid-item">{props.textSideButton}</div>

        <div className="grid-item">...</div>

      </div>
  );
}

export default Candidates;
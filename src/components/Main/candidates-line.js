import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Avatars from "./avatars";
import OutlinedButtons from "../button";
import Options from "./optionMenu";
import './body.css';
import moment from 'moment';

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
            <span className={props.styleSchedule}> { moment(props.textSchedule).isValid() ?  moment(props.textSchedule).format("ddd, MMM, Do - hh:mma") : props.textSchedule} </span> 
        </div>

        <div className="grid-item">
            <div className={props.buttonStyle}>
                <OutlinedButtons
                  name={props.textButton}
                  buttonstyle={props.bstyle}
                  color="primary"
                  href={props.href}
                />
            </div>
        </div>

        <div className="grid-item">
          <a href={props.linkTextSide}>
            {props.textSideButton}
          </a>
        </div>

        <div className="grid-item">
            <Options
              type={props.type}
            />
        </div>

      </div>
  );
}

export default Candidates;
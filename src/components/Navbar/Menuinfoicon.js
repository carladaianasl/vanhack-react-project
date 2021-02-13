import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import ItSkills from "./ItSkills";
import './Navbar.css';

const useStyles = makeStyles({
  root: {
    color: 'black',
    display: 'flex',
    width: '100%',
    fontSize: '15px',
  },
});

function SimpleMenuInfo() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <InfoOutlinedIcon style={{ fontSize: 28 }} className="icon-info" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}></InfoOutlinedIcon>
      <Menu
        id="simple-menu"
        width="200px"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}   
        className="horiz-menu"  
        >

        <MenuItem onClick={handleClose} className={classes.root}> <EmojiTransportationOutlinedIcon /> <span className="text-icon">Drift sidecorp </span></MenuItem>
        <MenuItem onClick={handleClose} className={classes.root}> <AccountCircleOutlinedIcon /> <span className="text-icon"> 1 Position </span> </MenuItem>
        <MenuItem onClick={handleClose} className={classes.root}> <MonetizationOnOutlinedIcon /> <span className="text-icon"> $CAD 100 - 140k </span> </MenuItem>
        <MenuItem onClick={handleClose} className={classes.root}> <RoomOutlinedIcon /> <span className="text-icon"> Remote </span> </MenuItem>
        <MenuItem onClick={handleClose} className={classes.root}> <i className="fas fa-laptop-code" style={{ paddingLeft: '4px'}} ></i> 
          <div style={{ marginLeft: '10px' }}> 

            <ItSkills 
              name="Machine Learning"
            />

            <ItSkills 
              name="Signal R"
            />

            <ItSkills 
              name="Dapper"
            />

            <ItSkills 
              name="Signar R"
            />

            <ItSkills 
              name="Dapper"
            />


          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenuInfo;
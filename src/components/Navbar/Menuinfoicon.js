import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmojiTransportationOutlinedIcon from '@material-ui/icons/EmojiTransportationOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

function SimpleMenuInfo() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles({
    root: {
      backgroundColor: 'red',
    },
  });

  return (
    <div>
      <InfoOutlinedIcon style={{ fontSize: 28 }} className="icon-info" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}></InfoOutlinedIcon>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> <EmojiTransportationOutlinedIcon /> Drift sidecorp</MenuItem>
        <MenuItem onClick={handleClose}> <AccountCircleOutlinedIcon /> 1 Position</MenuItem>
        <MenuItem onClick={handleClose}> <MonetizationOnOutlinedIcon /> $CAD 100 - 140k</MenuItem>
        <MenuItem onClick={handleClose}> <RoomOutlinedIcon /> Remote</MenuItem>
        <MenuItem onClick={handleClose}> <i class="fas fa-laptop-code"></i> Remote</MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenuInfo;
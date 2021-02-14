import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.3),
      textTransform: 'none',
      color: '#0675ce',
      borderColor: '#0675ce',
    },
  },
}));

const OutlinedButtons = (props) =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        color={props.color}
        className={props.buttonstyle} >
        
          {props.name}

      </Button>
    </div>
  );
}

export default OutlinedButtons;
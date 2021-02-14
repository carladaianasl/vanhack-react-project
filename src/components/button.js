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
      fontSize: '14px',
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
      >
        
          {props.name}

      </Button>
    </div>
  );
}

export default OutlinedButtons;
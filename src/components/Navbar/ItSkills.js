import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

const ItSkills = (props) =>{
  const classes = useStyles();

  return (
    <div className="text-skills">
        {props.name}
    </div>
  );
}

export default ItSkills;
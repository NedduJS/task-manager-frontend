import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

import '../assets/styles/NewTask.css';

const WhiteCheckbox = withStyles({
  root: {
    color: 'white',
  },
})(Checkbox);

const WhiteTextField = withStyles({
  root: {
    '& label.Mui-unfocused': {
      color: 'red',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  },
})(TextField);

const NewTask = ({ display }) => {
  return (
    <div className={`newTask ${display}`}>
      <WhiteCheckbox checked={false} />
      <form action='submit'>
        <WhiteTextField id='standard-basic' label='Add a task' color='white' />
      </form>
    </div>
  );
};

export default NewTask;

/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';

import {
  postTask,
  getTasks,
  changeDisplayForm,
} from '../redux/tasks/taskActions';

import '../assets/styles/NewTask.css';

const BlackCheckbox = withStyles({
  root: {
    color: 'black',
  },
})(Checkbox);

const WhiteTextField = withStyles({
  root: {
    '& label.Mui-unfocused': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
  },
})(TextField);

const NewTask = ({ newtaskForm, postTask, getTasks, changeDisplayForm }) => {
  const [task, setTask] = useState('');

  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  const handleChange = (e) => {
    const newTask = e.target.value;
    setTask(newTask);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const item = {
      title: task,
      description: 'Under construction',
      completed: false,
    };
    await postTask(item);
    getTasks();
    changeDisplayForm('displayNone');
    setTask('');
  };

  return (
    <div
      className={`newTask ${newtaskForm}`}
      onClick={handlePropagation}
      role='presentation'>
      <BlackCheckbox checked={false} />
      <form action='submit' className='form'>
        <WhiteTextField
          id='standard-basic'
          label='Add a task'
          value={task}
          onChange={handleChange}
          inputProps={{ style: { fontSize: '1.5rem' } }}
          fullWidth
        />
      </form>
      <IconButton color='secondary' onClick={handleClick}>
        <PublishIcon />
      </IconButton>
    </div>
  );
};

const mapDispatchToProps = {
  postTask,
  getTasks,
  changeDisplayForm,
};

const mapStateToProps = ({ newtaskForm }) => {
  return { newtaskForm };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);

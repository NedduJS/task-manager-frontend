import React from 'react';
import { connect } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';

import { editTask, getTasks } from '../redux/tasks/taskActions';

import '../assets/styles/TaskItem.css';

const TaskItem = ({ task, editTask, getTasks }) => {
  const handleCheck = async (e) => {
    const editedTask = { ...task, completed: !task.completed };
    await editTask(editedTask);
    getTasks();
  };

  return (
    <div className='taskItem'>
      <Checkbox checked={task.completed} onClick={handleCheck} />
      {task.completed ? <del>{task.title}</del> : <p>{task.title}</p>}
    </div>
  );
};

const mapDispatchToProps = {
  editTask,
  getTasks,
};

export default connect(null, mapDispatchToProps)(TaskItem);

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import '../assets/styles/TaskItem.css';

const TaskItem = ({ task }) => {
  return (
    <div className='taskItem'>
      <Checkbox checked={task.completed} />
      {task.completed ? <del>{task.title}</del> : <p>{task.title}</p>}
    </div>
  );
};

export default TaskItem;

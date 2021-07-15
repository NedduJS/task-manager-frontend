import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const TaskItem = ({ task }) => {
  return (
    <div>
      <Checkbox checked={task.completed} />
      {task.completed ? <del>{task.title}</del> : <p>{task.title}</p>}
    </div>
  );
};

export default TaskItem;

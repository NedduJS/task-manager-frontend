import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

const Incompleted = ({ taskList }) => {
  const incompletedTask = taskList.filter((item) => item.completed === false);

  return (
    <div className='incompleted'>
      {incompletedTask.map((item) => {
        return <TaskItem key={item.id} task={item} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ task }) => {
  return { taskList: task.task };
};

export default connect(mapStateToProps, null)(Incompleted);

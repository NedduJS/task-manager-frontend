import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

const Completed = ({ taskList }) => {
  const completedTask = taskList.filter((item) => item.completed === true);

  return (
    <div className='completed'>
      <p className='completed_title'>Completed</p>
      {completedTask.map((item) => {
        return <TaskItem key={item.id} task={item} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ task }) => {
  return { taskList: task };
};

export default connect(mapStateToProps, null)(Completed);

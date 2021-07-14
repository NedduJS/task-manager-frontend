/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';

import AddIcon from '@material-ui/icons/Add';
import AddButton from '../components/AddButton';

const getData = async () => {
  try {
    const response = await fetch(
      'https://young-coast-17015.herokuapp.com/api/tasks/'
    );
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getData());
  }, [tasks]);

  return (
    <div className='home'>
      <h1 className='home__title'>Task Manager</h1>
      {tasks.map((task) => {
        return <h1>{task.title}</h1>;
      })}
      <AddButton startIcon={<AddIcon />}>Add Task</AddButton>
    </div>
  );
};

export default Home;

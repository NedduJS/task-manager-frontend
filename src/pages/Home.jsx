import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import AddButton from '../components/AddButton';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>Task Manager</h1>
      <AddButton startIcon={<AddIcon />}>Add Task</AddButton>
    </div>
  );
};

export default Home;

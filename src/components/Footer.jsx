/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import AddButton from './AddButton';
import NewTask from './NewTask';

import '../assets/styles/Footer.css';

const Footer = () => {
  const [display, setDisplay] = useState('displayNone');

  const handleClick = () => {
    setDisplay('display');
  };

  return (
    <div className='footer'>
      <AddButton
        className='home_addBtn'
        startIcon={<AddIcon />}
        onClick={handleClick}>
        Add Task
      </AddButton>
      <NewTask display={display} />
    </div>
  );
};

export default Footer;

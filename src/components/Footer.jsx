import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import AddButton from './AddButton';

import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <AddButton className='home_addBtn' startIcon={<AddIcon />}>
        Add Task
      </AddButton>
    </div>
  );
};

export default Footer;

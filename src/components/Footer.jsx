/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { connect } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import AddButton from './AddButton';

import { changeDisplayForm } from '../redux/tasks/taskActions';

import '../assets/styles/Footer.css';

const Footer = ({ changeDisplayForm }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    changeDisplayForm('display');
  };

  return (
    <div className='footer'>
      <AddButton
        className='home_addBtn'
        startIcon={<AddIcon />}
        onClick={handleClick}>
        Add Task
      </AddButton>
    </div>
  );
};

const mapDispatchToProps = {
  changeDisplayForm,
};

export default connect(null, mapDispatchToProps)(Footer);

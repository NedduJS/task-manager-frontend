/* eslint-disable comma-dangle */
import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { changeDisplayForm } from '../redux/tasks/taskActions';

import '../assets/styles/Home.css';

const Home = ({ changeDisplayForm }) => {
  const handleClick = () => {
    changeDisplayForm('displayNone');
  };

  return (
    <div className='home' onClick={handleClick} role='presentation'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  changeDisplayForm,
};

export default connect(null, mapDispatchToProps)(Home);

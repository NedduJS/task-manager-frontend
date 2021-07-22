/* eslint-disable comma-dangle */
import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { changeDisplayForm } from '../redux/tasks/taskActions';
import useWindowDimensions from '../utils/useWindowDimensions';

import '../assets/styles/Home.css';

const Home = ({ changeDisplayForm }) => {
  const { width } = useWindowDimensions();

  const handleClick = () => {
    changeDisplayForm('displayNone');
  };

  return (
    <div className='home' onClick={handleClick} role='presentation'>
      {width < 1024 ? (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Footer />
          <Main />
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  changeDisplayForm,
};

export default connect(null, mapDispatchToProps)(Home);

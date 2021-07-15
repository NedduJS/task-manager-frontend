/* eslint-disable comma-dangle */
import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;

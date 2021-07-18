import React from 'react';
import { connect } from 'react-redux';

import Completed from './Completed';
import Incompleted from './Incompleted';
import NewTask from './NewTask';

import '../assets/styles/Main.css';

const Main = ({ fetching, error }) => {
  return (
    <div className='main'>
      {fetching ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Incompleted />
          <Completed />
        </>
      )}
      {error && <h1>{error}</h1>}
      <NewTask />
    </div>
  );
};

const mapStateToProps = ({ fetching, error }) => {
  return {
    fetching,
    error,
  };
};

export default connect(mapStateToProps, null)(Main);

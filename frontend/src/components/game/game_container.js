import { connect } from 'react-redux';
import React from 'react';
import App from '../../App.js';

const msp = (state) => {
  return {
    user: state.session.name
  };
};


export default connect(msp)(App);
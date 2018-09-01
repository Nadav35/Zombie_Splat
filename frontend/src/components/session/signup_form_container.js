import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser, loginUser } from '../../util/session_api_util';
import SessionForm from './session_form';


const msp = (state) => {
  return {
    errors: Object.values(state.errors),
    formType: 'Sign up',
    navLink: <Link to="/login">log in</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(registerUser(user)),
    loginDemoUser: (user) => dispatch(loginUser(user))
  };
};

export default connect(msp, mdp)(SessionForm);

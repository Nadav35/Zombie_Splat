import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../util/session_api_util';
import SessionForm from './session_form';
import { setHealth } from '../../actions/player_actions';


const msp = ({ errors }) => {
  return {
    errors: Object.values(errors),
    formType: 'Login',
    navLink: <Link to="/">sign up</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
    loginDemoUser: () => dispatch(loginUser({
      email: "bob1@yahoo.com",
      password: "123456"
    })),
    setHealth: (health) => dispatch(setHealth(health))
  };
};

export default connect(msp, mdp)(SessionForm);
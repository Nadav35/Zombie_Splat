import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import loginFormContainer from './session/login_form_container';
import App from '../App';

const MainApp = () => (
  <div>
    <Switch>
      <Route exact path ="/login" component={loginFormContainer} />
      <Route exact path ="/game" component={App} />
      <Route exact path ="/" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default MainApp;
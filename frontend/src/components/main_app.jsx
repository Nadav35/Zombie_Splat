import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';

const MainApp = () => (
  <div>
    <Switch>
      <Route exact path ="/" component={SignupFormContainer} />

    </Switch>

  </div>
);

export default MainApp;
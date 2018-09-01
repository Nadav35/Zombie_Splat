import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jwtDecode from 'jwt-decode';
import * as APIUtil from './util/session_api_util';
// Components
import configureStore from './store/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/root';
import {removeZombie, resetZombies, setZombieCount} from './actions/zombie_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  if (localStorage.jwtToken) {
    // Set auth token header auth
    APIUtil.setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwtDecode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(APIUtil.setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(APIUtil.logoutUser());
      // Redirect to login
      window.location.href = '/login';
    }
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.removeZombie = removeZombie;
  window.resetZombies = resetZombies;
  window.setZombieCount = setZombieCount;



  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  registerServiceWorker();
});

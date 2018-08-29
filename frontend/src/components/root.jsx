import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import MainApp from './main_app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <MainApp />
    </HashRouter>
  </Provider>
);

export default Root;
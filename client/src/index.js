import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './redux/store/createStore';
import ConnectClientWS from './socket-io/ConnectClient';
import routes from './routes';

import App from './App';

const rootReact = document.getElementById('root');
const store = createStore();

const { dispatch } = store;

dispatch(ConnectClientWS());

const renderApp = (Component, appRoutes) => {
  render(
    <Provider store={store}>
      <Component routes={appRoutes}/>
    </Provider>, rootReact
  );
};

renderApp(App, routes);;

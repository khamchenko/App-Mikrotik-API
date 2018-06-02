import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './App.css';

const App = ({ routes }) => (
  <BrowserRouter basename="/">
    {renderRoutes(routes)}
  </BrowserRouter>
);

export default App;

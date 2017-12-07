import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';


const App = () => (
  <Provider {...{ store }}>
    <BrowserRouter>
      <p>
          Have a lot of fun!
      </p>
    </BrowserRouter>
  </Provider>
);

export default App;

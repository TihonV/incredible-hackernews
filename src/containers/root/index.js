import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import store from '../../store';

import NotFound from '../layout/404';
import Page from '../layout/page';

const App = () => (
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={
          () => <Redirect to="/topstories" />
        }
      />
      {
        ['top', 'best', 'new', 'ask', 'job', 'show'].map(k => (
          <Route
            key={k}
            exact
            path={`/${k}stories`}
            component={Page}
          />
        ))
      }
      <Route path="/" component={NotFound} />
    </Switch>
  </BrowserRouter>
  </Provider>
);

export default App;

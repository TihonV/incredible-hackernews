import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Page from '../layout/page';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={
          () => <Redirect to="/topstories" />
        }
      />
      <Route
        exact
        path="/topstories"
        component={Page}
      />
      <Route
        exact
        path="/beststories"
        component={Page}
      />
      <Route
        path="/beststories/:id"
        component={Page}
      />
      <Route
        exact
        path="/newstories"
        component={Page}
      />
      <Route
        exact
        path="/askstories"
        component={Page}
      />
    </Switch>
  </BrowserRouter>
);

export default App;

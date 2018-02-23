/** @jsx h */

import { h, Component } from 'preact';
import Router from 'preact-router';

import { URI_PREFIX } from '../../consts';

import Redirect from '../../components/Redirect';
import MenuBar from '../../components/menubar';
import NotFound from '../layout/404';
import Page from '../layout/page';
import { firebaseInit } from '../../api';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ db: firebaseInit() });
  }

  render(props, { db }) {
    // const { db } = this.state;
    return (
      <div>
        <MenuBar />
        <Router>
          <Redirect path={URI_PREFIX} to={`${URI_PREFIX}/topstories`} />
          {
            ['top', 'best', 'new', 'ask', 'job', 'show'].map(k => [
              <Page key={k} db={db} path={`${URI_PREFIX}/${k}stories`} />,
              <Page key={`_${k}`} db={db} path={`${URI_PREFIX}/${k}stories/:id`} />,
            ])
          }
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;

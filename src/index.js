// eslint-disable-next-line no-unused-vars
/** @jsx h */

import { h, render } from 'preact';
import 'preact/devtools';
import './index.css';
import App from './containers/root';

render(
  <App />,
  document.getElementById('root'),
);

// if (module.hot) {
//   module.hot.accept();
// }

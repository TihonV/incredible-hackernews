import React from 'react';
import { Link } from 'react-router-dom';

import logoSvg from './logo.svg';

const headerStyle = {
  height: '3em',
  width: 'calc(100% - 8em)',
  display: 'flex',
  padding: '0 4em',
  background: '#f60',
  alignContent: 'stretch',
};

const logoStyle = {
  width: '2em',
  height: '2em',
  filter: 'invert(1)',
  margin: 'auto',
};

const navStyle = {
  display: 'flex',
  width: 'calc(100% - 2em)',
};

const pStyle = {
  paddingLeft: '1em',
  paddingRight: '1em',
  textTransform: 'capitalize',
};
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};
const forkPStyle = {
  marginLeft: 'auto',
  paddingLeft: '1em',
  paddingRight: '1em',
  textTransform: 'capitalize',
};

const MenuBar = () => (
  <header style={headerStyle}>
    <picture style={logoStyle}>
      {/* Workaround for parcel */}
      {/* Uri may starting at `/dist` */}
      <source srcSet={`/dist/${logoSvg}`} type="image/svg+xml" />
      <img src={`/dist/${logoSvg}`} alt="" />
    </picture>
    <nav style={navStyle}>
      {
        ['new', 'top', 'best', 'ask', 'job', 'show'].map(k => (
          <p
            key={`nav_${k}`}
            style={pStyle}
          >
            <Link
              style={linkStyle}
              to={`/${k}stories`}
            >
              {k}
            </Link>
          </p>
        ))
      }
      <p style={forkPStyle}>
        <a
          href="https://github.com/tihonv/incredible-hackernews"
          style={linkStyle}
        >
          Fork me!
        </a>
      </p>
    </nav>
  </header>
);

export default MenuBar;

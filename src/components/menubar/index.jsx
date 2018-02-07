/** @jsx h */
import { h } from 'preact';
import { Link } from 'preact-router/match';

import { URI_PREFIX } from '../../consts/index';

import logo from '../../assets/logo.svg';
import forkImg from '../../assets/fork-light-64px.png';

import './menubar.css';

const headerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '3em',
  width: 'calc(100% - 2em)',
  maxWidth: '100%',
  padding: '0 1em',
  display: 'flex',
  justifyContent: 'space-between',
  background: '#f60',
  alignItems: 'center',
  zIndex: '1000',
};

const logoStyle = {
  width: '2em',
  height: '2em',
  paddingRight: '1em',
  filter: 'invert(1)',
  margin: 'auto',
  flex: '0 1 auto',
};

const navStyle = {
  display: 'flex',
  height: 'inherit',
  justifyContent: 'flex-start',
  flex: '1 1 auto',
};
const linkStyle = {
  overflow: 'hidden',
  color: '#fff',
  padding: '0 1em',
  fontSize: '20px',
  margin: '0 .1rem',
  textTransform: 'capitalize',
  textDecoration: 'none',
  height: 'inherit',
  lineHeight: '3rem',
};
const lastLinkStyle = {
  ...linkStyle,
  margin: '0 0 0 auto',
  justifySelf: 'flex-end',
  textTransform: 'capitalize',
  lineHeight: '3rem',
};

const forkIconStyle = {
  display: 'inline-block',
  height: 'calc(100% - 1.6rem)',
  margin: '.8rem 0 auto 0',
  textAlign: 'middle',
};

const MenuBar = () => (
  <header style={headerStyle}>
    <picture style={logoStyle}>
      {/* Workaround for parcel */}
      {/* Uri may starting at `/dist` */}
      <source srcSet={logo} type="image/svg+xml" />
      <img src={logo} alt="" />
    </picture>
    <nav style={navStyle}>
      {
        ['new', 'top', 'best', 'ask', 'job', 'show'].map(k => (
          <Link
            key={k}
            style={linkStyle}
            href={`${URI_PREFIX}/${k}stories`}
            className="menubar-link"
          >
            {k}
          </Link>
        ))
      }
      <a
        href="https://github.com/tihonv/incredible-hackernews"
        style={lastLinkStyle}
        className="menubar-link"
      >
        <img src={forkImg} style={forkIconStyle} alt="" />
      </a>
    </nav>
  </header>
);

export default MenuBar;

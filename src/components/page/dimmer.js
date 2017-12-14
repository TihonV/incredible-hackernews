import React from 'react';
import PropTypes from 'prop-types';

const sectionStyle = {
  borderBottom: '1px solid',
  display: 'flex',
  flexDirection: 'row',
  padding: '.5em 0',
  color: '#444',
};

const asideStyle = {
  display: 'block',
  margin: 'auto .5em auto 0',
  minWidth: '2.5em',
  minHeight: '2.5em',
  maxWidth: '2.5em',
  maxHeight: '2.5em',
  borderRadius: '50%',
  fontSize: '1.5em',
  color: '#fff',
  lineHeight: '2.6em',
  textAlign: 'center',
  background: '#bbb',
};

const headerStyle = {
  fontSize: '1.4em',
};

const footerStyle = {
  fontSize: '.8em',
};

const loaderStyle = {
  fontFamily: 'AurekBeshNarrow',
  fontSize: '1.2em',
};

const Dimmer = ({ number }) => (
  <section style={sectionStyle} className="card">
    <aside style={asideStyle}>{ number }</aside>
    <article style={loaderStyle}>
      <header style={headerStyle}>Please wait... Loading post.</header>
      <footer style={footerStyle}>May you lost a comment</footer>
    </article>
  </section>
);

Dimmer.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Dimmer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS, Map } from 'immutable';

import { getStory } from '../../api';

class Shortcut extends Component {
  shouldComponentUpdate(nextProps) {
    return !this.props.item.equals(nextProps.item);
  }

  render() {
    const {
      number, postId, item, path, loadPost,
    } = this.props;

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
    };

    const numberStyle = {
      maxHeigth: '2.5em',
      maxWidth: '2.5em',
    };

    const headerStyle = {
      fontSize: '1.4em',
    };

    const footerStyle = {
      fontSize: '.8em',
    };

    const Dimmer = (
      <section style={sectionStyle}>
        <aside style={asideStyle}>
          <svg
            viewBox="0 0 120 120"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={numberStyle}
          >
            <circle cx="60" cy="60" r="50" fill="#bbb" />
            <text
              x="50%"
              y="62.5%"
              fontSize="40"
              textAnchor="middle"
              stroke="#fff"
              fill="#fff"
              strokeWidth="1.5px"
              lengthAdjust="spacingAndGlyphs"
              viewBox="width"
            >
              { number }
            </text>
          </svg>
        </aside>
        <article>
          <header style={headerStyle} />
          <footer style={footerStyle} />
        </article>
      </section>
    );
    const Content = (
      <section style={sectionStyle}>
        <aside style={asideStyle}>
          <svg
            viewBox="0 0 120 120"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={numberStyle}
          >
            <circle cx="60" cy="60" r="50" fill="#bbb" />
            <text
              x="50%"
              y="62.5%"
              fontSize="40"
              textAnchor="middle"
              stroke="#fff"
              fill="#fff"
              strokeWidth="1.5px"
              lengthAdjust="spacingAndGlyphs"
              viewBox="width"
            >
              { number }
            </text>
          </svg>
        </aside>
        <article>
          <header style={headerStyle}>{
            item.get('url', '') === '' ? item.get('title', '') : (
              <a href={item.get('url', '')}>{ item.get('title', '') }</a>
            )
          }</header>
          <footer style={footerStyle}>
            <span>{ item.get('score', 0) } points by { item.get('by', 0) } </span>
            <time>{ Date(item.get('time')).toString().slice(0, 21) } </time>
            <a href="/#">comments</a>
          </footer>
        </article>
      </section>
    );
    if (item.count() === 0) {
      getStory(postId)
        .then(d => loadPost(fromJS(d).set('path', path)))
        .catch(e => console.log('Error when loading post', e));
    }
    return item.count() !== 0 ? Content : Dimmer;
  }
}

Shortcut.propTypes = {
  number: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  item: PropTypes.instanceOf(Map),
  path: PropTypes.string.isRequired,
  loadPost: PropTypes.func.isRequired,
};

export default Shortcut;

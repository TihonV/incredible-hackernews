import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS, Map } from 'immutable';
import { Link } from 'react-router-dom';

import 'react-virtualized/styles.css';
// import './aurek-besh-narrow.css';
import './shortcut.css';

import { getStory } from '../../api';
import Dimmer from '../../components/page/dimmer';

class Shortcut extends Component {
  shouldComponentUpdate(nextProps) {
    return !this.props.item.equals(nextProps.item);
  }

  render() {
    const {
      number, postId, item, path, loadPost,
    } = this.props;

    const sectionStyle = {
      display: 'flex',
      borderRadius: '.1em',
      flexDirection: 'row',
      padding: '.8em',
      margin: '.5em 0',
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
      marginTop: 'auto',
      fontSize: '.8em',
    };

    const Content = (
      <section style={sectionStyle} className="card">
        <aside style={asideStyle}>{ number }</aside>
        <article>
          <header style={headerStyle}>
            {
              item.get('url', '') === '' ? item.get('title', '') : (
                <a href={item.get('url', '')}>{ item.get('title', '') }</a>
              )
            }
          </header>
          <footer style={footerStyle}>
            <span>{ item.get('score', 0) } points by { item.get('by', 0) } </span>
            <time>{ Date(item.get('time', '')).toString().slice(0, 21) } </time>
            <Link to={`/item/${item.get('id', 'notfound')}`}>comments</Link>
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

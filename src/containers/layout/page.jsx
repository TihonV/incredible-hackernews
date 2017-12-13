import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { List, Map } from 'immutable';

import MenuBar from './menubar';
import { getStoriesIndex } from '../../api';
import a from '../../actions';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      height: 10,
    };
  }

  componentDidMount() {
    const { path } = this.props.match;

    /**
     * @desc Promise for parsing response
     * @property {Promise} value
     */
    const resp = [
      '/newstories',
      '/beststories',
      '/askstories',
      '/jobstories',
      '/topstories',
      '/showstories',
    ].includes(path) ? getStoriesIndex(path) : getStoriesIndex('/topstories');

    /**
     * @func
     * @desc writing posts into store
     * @param {array} data
     */
    const writePosts = (data) => {
      this.props.loadList(List(data).reduce(
        (list, value) => list.set(value, new Map()),
        new Map(),
      ));
    };

    // TODO: Make generator for trying when network error

    resp.then(writePosts).catch((e) => { console.log('Error when updating: ', e); });
  }

  render() {
    const { items } = this.props;
    return (
      <Fragment>
        <MenuBar />
        <main>Content</main>
      </Fragment>
    );
  }
}

Page.propTypes = {
  /* eslint-disable react/require-default-props */
  // From react-router-dom
  match: PropTypes.objectOf(PropTypes.string),

  // From redux store
  items: PropTypes.instanceOf(Map),
  dispatch: PropTypes.func,

  // From dispatch
  loadList: PropTypes.func,
  loadPost: PropTypes.func,
  /* eslint-enable react/require-default-props */
};

const mapStateToProps = state => ({ items: state.get('items', new Map()) });
const mapDispatchToProps = dispatch => ({
  loadList: list => dispatch(a.loadList(list)),
  loadPost: _id => dispatch(a.loadPost(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { List, OrderedMap } from 'immutable';

import MenuBar from './menubar';
import Shortcut from './shortcut';
import { getStoriesIndex } from '../../api';
import a from '../../actions';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      height: 20,
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
        (list, value) => list.setIn([path, value], new OrderedMap()),
        this.props.items.get(path, new OrderedMap()),
      ));
    };

    // TODO: Make generator for trying when network error

    resp.then(writePosts).catch((e) => { console.log('Error when updating: ', e); });
  }

  render() {
    const { items, match, loadPost } = this.props;
    const { page, height } = this.state;
    /**
     * @type {OrderedMap}
     */
    const visibleItems = items
      .getIn(['list', match.path], new OrderedMap())
      .slice(page * height, (page + 1) * height).keySeq();
    const mainStyle = {
      width: '70%',
      margin: '1em auto',
      minHeight: 'calc(100vh - 7em)',
    };
    const footerStyle = {
      width: '70%',
      margin: '0 auto',
      height: '2em',
    };

    return (
      <Fragment>
        <MenuBar />
        <main style={mainStyle}>
          {
            /* eslint-disable react/no-array-index-key */
            items.getIn(['list', match.path], new OrderedMap()).count() !== 0 ?
              visibleItems.map((k, i) => (<Shortcut
                key={k}
                number={i + 1 + (page * height)}
                postId={k}
                item={items.getIn(['list', match.path, k], new OrderedMap())}
                loadPost={loadPost}
                path={match.path}
              />)) :
              (<section>Loading...</section>)
            /* eslint-enable react/no-array-index-key */
          }
        </main>
        <footer style={footerStyle}>
          Footer
        </footer>
      </Fragment>
    );
  }
}

Page.propTypes = {
  /* eslint-disable react/require-default-props */
  // From react-router-dom
  match: PropTypes.object,

  // From redux store
  items: PropTypes.object,
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

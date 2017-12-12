import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../api';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      content: {},
    };
  }

  componentDidMount() {
    const { path } = this.props.match;

    /**
     * @desc Promise for parsing response
     * @property {Promise} value
     */
    let resp;

    switch (path) {
    case '/newstories':
      resp = api.updateNewStories().next();
      break;
    case '/beststories':
      resp = api.updateBestStories().next();
      break;
    case '/askstories':
      resp = api.updateAskStories().next();
      break;
    case '/showstories':
      resp = api.updateShowStories().next();
      break;
    case '/jobstories':
      resp = api.updateJobStories().next();
      break;
    default: // 'topstories'
      resp = api.updateTopStories().next();
    }

    resp.value.then((data) => { this.setState({ posts: data }); });
  }

  render() {
    return (<div>Page with posts</div>);
  }
}

Page.propTypes = {
  match: PropTypes.object,
};

export default Page;

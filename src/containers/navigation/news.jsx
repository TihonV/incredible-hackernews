import React from 'react';
import PropTypes from 'prop-types';

const Stories = ({ story }) => {
  switch (story) {
  case 'new':
    return (<div>New Stories</div>);
  case 'top':
    return (<div>Top Stories</div>);
  default: // 'best'
    return (<div>Best Stories</div>);
  }
};

Stories.propTypes = {
  story: PropTypes.oneOf(['new', 'best', 'top']),
};

Stories.defaultProps = {
  story: 'best',
};

export default Stories;

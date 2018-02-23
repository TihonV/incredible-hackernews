import PropTypes from 'prop-types';

export default {
  propTypes: {
    item: {
      id: PropTypes.number.isRequired,
      deleted: PropTypes.bool,
      type: PropTypes.oneOf(['job', 'story', 'comment', 'poll', 'pollopt']).isRequired,
      by: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      text: PropTypes.string,
      dead: PropTypes.bool,
      parent: PropTypes.number,
      poll: PropTypes.number,
      kids: PropTypes.arrayOf(PropTypes.number),
      url: PropTypes.string,
      score: PropTypes.number,
      title: PropTypes.string,
      parts: PropTypes.arrayOf(PropTypes.number),
      descendants: PropTypes.arrayOf(PropTypes.number),
    },
    users: {
      id: PropTypes.string.isRequired,
      delay: PropTypes.number.isRequired,
      created: PropTypes.number.isRequired,
      karma: PropTypes.number.isRequired,
      about: PropTypes.string.isRequired,
      submitted: PropTypes.arrayOf(PropTypes.number).isRequired,
    },
  },
  urls: {
    topstories: 'topstories',
    newstories: 'newstories',
    beststories: 'beststories',
    jobstories: 'jobstories',
    askstories: 'askstories',
    showstories: 'showstories',
  },
};

export const URI_PREFIX = '/incredible-hackernews';

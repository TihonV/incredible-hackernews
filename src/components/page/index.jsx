import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { Post } from '../../containers/post';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblePosts: [],
    };
  }

  componentWillReceiveProps({ pageNumber, posts }) {
    this.setState({
      visiblePosts: posts.slice((20 * (pageNumber - 1)), 20 * pageNumber),
    });
  }

  render({ db }) {
    console.log('render page', this.props, this.state);
    return (
      <div>
        {
          this.state.visiblePosts.map(v => (<Post key={v} itemId={v} db={db} />))
        }
      </div>
    );
  }
};

Page.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.number).isRequired,
  pageNumber: PropTypes.number,
};

Page.defaultProps = {
  pageNumber: 1,
};

export default Page;

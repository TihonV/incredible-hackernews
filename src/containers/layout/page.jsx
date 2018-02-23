import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import Page from '../../components/page';
import { storiesRef } from '../../api';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  margin: '2em auto 0',
};

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    const pageType = this.props.path.toString().split('/')[2];
    (() => {
      this.setState({ pageType });
      this.props.db.child(pageType).on('value', (msg) => {
        this.setState({ stories: msg.val() });
        // console.log('update', pageType, this.state);
      });
    })();
  }

  render() {
    const { db, path } = this.props;
    const { stories } = this.state;
    const pageType = path.toString().split('/')[2];
    const pageNumber = path.toString().split('/')[3] || 1;
    // console.log(this.state);
    return (
      <div style={containerStyle}>
        <header>
          <h2 style={{ textTransform: 'capitalize' }}>{ pageType }</h2>
        </header>
        <Page posts={stories} pageNumber={pageNumber} db={db} />
      </div>
    );
  }
}

PostsList.propTypes = {
  path: PropTypes.string.isRequired,
  db: PropTypes.shape({
    on: PropTypes.func,
    child: PropTypes.func,
  }).isRequired,
};

export default PostsList;

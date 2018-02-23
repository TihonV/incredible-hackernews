import { h, Component } from 'preact';

export class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    const { db, itemId } = this.props;
    db.child(`item/${itemId}`).on('value', (msg) => {
      this.setState({ item: msg.val() });
    });
  }

  render() {
    const { item } = this.state;

    return item === {} ? null : (
      <article>
        <header>
          <h4>{item.title}</h4>
        </header>
        <footer>
          <div>Score: {item.score}</div>
          { item.descendants > 0 && <div>{item.descendants} comments</div> }
          <div>{ Date(item.time) }</div>
          <div>by {item.by}</div>
          { item.url && <a href={item.url}>link</a> }
        </footer>
      </article>
    );
  }
}

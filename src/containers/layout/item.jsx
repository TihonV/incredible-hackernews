import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { item, loadPost } = this.props;
    const loaderStyle = {};
    return item.count === 0 ? (
      <section style={loaderStyle} />
    ) : (
      <section>
        POST {item.get('id', '')}
      </section>
    );
  }
}

export default Item;

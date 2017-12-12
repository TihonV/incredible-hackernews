import React, { Component } from 'react';
import PropTypes from 'prop-types';

import C from '../../consts';

class Shortcut extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      post: { ...C.blankItem },
    };
  }

  render(){
    return (
      <div></div>
    );
  }
}

export default Shortcut;

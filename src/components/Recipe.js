import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Recipe extends Component {
  render (){
    let { title, body } = this.props;

    return (
      <Panel header={title}>
        {body}
      </Panel>
    )
  }
}

export default Recipe;
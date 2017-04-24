import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';

class Recipe extends Component {
  render (){
    let { title, body } = this.props;

    return (
      <Panel header={title}>
        {body}

        <div className="controls">
          <Button bsStyle="danger">Delete</Button>
          <Button bsStyle="primary">Edit</Button>
        </div>        
      </Panel>
    )
  }
}

export default Recipe;
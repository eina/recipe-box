import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class AddRecipe extends Component {
  render(){
    return (
      <div>
        <nav>
            <Link to="/">&larr; Back to Recipe Box</Link>
        </nav>

        <main>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl placeholder="What is your recipe called?"></FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl placeholder="What's in your recipe?" componentClass="textarea"></FormControl>
          </FormGroup>      

          <Button>Add Recipe</Button>
        </main>        
      </div>
    )
  }
}

export default AddRecipe;
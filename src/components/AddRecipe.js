import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';


import { addRecipe } from '../actions'

class AddRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      title: '',
      body: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  submitRecipe(){
    this.props.addNewRecipe(this.state);
    this.setState({
      title: '',
      body: ''
    })
  }

  render(){
    return (
      <div>
        <nav>
            <Link to="/">&larr; Back to Recipe Box</Link>
        </nav>

        <main>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl 
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="What is your recipe called?">
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl 
              name="body"
              value={this.state.body}
              onChange={this.handleInputChange}
              placeholder="What's in your recipe?" componentClass="textarea"></FormControl>
          </FormGroup>      

          <Button onClick={this.submitRecipe}>Add Recipe</Button>
        </main>        
      </div>
    )
  }
}

/*
TO DO:
  1. when button is clicked go back to '/' route
  2. render the stuff from the redux state to the '/' page
*/

const mapStateToProps = (state) => {
  return {
    recipe: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewRecipe: (recipe) => {
      dispatch(addRecipe(recipe))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
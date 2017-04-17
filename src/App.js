import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// components
import RecipeList from './components/RecipeList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipe Box</h1>
          <nav>
            <Link to="/add" className="btn btn-primary">Add Recipe</Link>
          </nav>
        </header>        

        <main>
          <RecipeList recipes={this.props.recipes} />
        </main>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state
  }  
}

export default connect(mapStateToProps, null)(App);

import React, { Component } from 'react';

// components
import Recipe from './Recipe';

class RecipeList extends Component {  
  render(){
    // this is a prop as seen on App.js
    const { recipes } = this.props;

    const renderRecipes = () => {
      return recipes.map((recipe, idx) => {
        return <Recipe key={idx} {...recipe}/>
      })
    }

    return(
      <div>
        { renderRecipes() }
      </div>    
    );
  }  
}

export default RecipeList;
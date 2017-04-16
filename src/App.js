import React, { Component } from 'react';

// components
import RecipeList from './components/RecipeList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          title: 'Beef Stew',
          body: 'Hello I am text'
        }, {
          title: 'Mashed Potatoes',
          body: 'maybe some potatoes, some cream, some salt and pepper'
        }, {
          title: 'Daim Chocolate Torte',
          body: 'just buy it from IKEA'
        }, {
          title: 'Turkey Salad with Avocado',
          body: 'turkey, salad greens, avocado, cherry tomatoes, balsamic vinaigrette'
        },
        
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Recipe Box</h1>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router';

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
        <header>
          <h1>Recipe Box</h1>
          <nav>
            <Link to="/add" className="btn btn-primary">Add Recipe</Link>
          </nav>
        </header>        

        <main>
          <RecipeList recipes={this.state.recipes} />
        </main>        
      </div>
    );
  }
}

export default App;

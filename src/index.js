import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { addRecipe, recipeReducer } from './actions'

// components
import App from './App';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';

// redux
const store = createStore(recipeReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))



store.dispatch(addRecipe({title: 'title', 'body': 'stuff'}))
store.dispatch(addRecipe({title: 'OH MY GOD', 'body': 'IT\'S WORKING'}))

console.log('new state', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={App} />
        <Route path="/add" component={AddRecipe} />
        <Route path="/edit" component={EditRecipe} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

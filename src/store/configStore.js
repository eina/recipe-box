import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { recipeReducer } from '../actions'

const store = createStore(recipeReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store;
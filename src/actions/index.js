import uuidV4 from 'uuid/v4';

export const ADD_RECIPE = 'ADD_RECIPE';

export const addRecipe = (recipe) => {
  return {
    type: ADD_RECIPE,
    recipe
  }
}

export const recipeReducer = (state=[], action) => {
  switch(action.type){
    case ADD_RECIPE:
      return [
        ...state,
        {
          id: uuidV4(),
          title: action.recipe.title,
          body: action.recipe.body
        }        
      ];
    default:
      return state;
  }  
}
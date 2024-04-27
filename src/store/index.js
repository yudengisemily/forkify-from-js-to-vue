import { createStore } from 'vuex';

import recipeModule from './modules/recipe/index.js';
import recipeListModule from './modules/recipeList/index.js';

const store = createStore({
  modules: {
    recipe: recipeModule,
    recipeList: recipeListModule,
  },
  
  
});

export default store;
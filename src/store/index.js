import { createStore } from 'vuex';

import recipeModule from './modules/recipe/index.js';

const store = createStore({
  modules: {
    recipe: recipeModule,
  },
  
  
});

export default store;
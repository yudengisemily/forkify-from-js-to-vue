// 请求数据、定义数据
import { API_URL } from "../../../config.js";
export default {
    async showRecipe(context){
        let Recipe = {};
        
        try{
          const id = window.location.hash.slice(1)
          if(!id) return;
          
          const res = await fetch(`${API_URL}`+id);
          const data = await res.json()
          let {recipe} = data.data;
          Recipe = {
            id: recipe.id,
            title:recipe.title,
            publisher:recipe.publisher,
            sourceUrl:recipe.source_url,
            image: recipe.image_url,
            servings:recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients:recipe.ingredients
          }
        }catch(err){
          // alert(err);
          context.commit('addError',err);
        }
        // console.log(context);
        context.commit('addRecipe',Recipe);
        context.commit('changeIsLoading',false);

        if(context.state.bookmarksRecipe.some(bookmarkR=>bookmarkR.id === Recipe.id)){
          context.state.recipe.bookmarked = true;
        }else {context.state.recipe.bookmarked = false}
    },

    toggleBookmark(context,recipe){
      if(recipe.bookmarked){
        context.commit('removeBookmark',recipe.id)
      }else{
        context.commit('addBookmark',recipe)
      }
    },

    loadBookmarks(context,recipeList){
      recipeList.forEach(recipe => {
        context.commit('addBookmark',recipe)
      });  
    }
}
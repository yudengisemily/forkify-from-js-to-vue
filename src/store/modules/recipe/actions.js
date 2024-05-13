// 请求数据、定义数据
import { API_URL } from "../../../config.js";
import { KEY } from "../../../config.js";
import { TIMEOUT_SEC } from "../../../config.js";
export default {
    async showRecipe(context){
        let Recipe = {};
        
        try{
          const id = window.location.hash.slice(1)
          if(!id) return;
          
          const res = await fetch(`${API_URL}${id}?key=${KEY}`);
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
            ingredients:recipe.ingredients,
            ...(recipe.key && {key:recipe.key}), // key:recipe.key
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
      // context.state.bookmarksRecipe = recipeList❌
      context.commit('addBookmarksFromLockal',recipeList)
    },

    async uploadRecipe(context,recipe){
      try{
        //这一段解释可以看P307
        const ingredients = Object.entries(recipe)
        .filter(entry=>entry[0].startsWith('ingredient')&&entry[1] !== '')
        .map(ing=>{
          const ingArr = ing[1].replaceAll(' ','').split(',')
          if(ingArr.length !== 3){
            throw new Error('Wrong ingredient format! Please use the correct format ;)')
          }
          const [quantity, unit, description] = ingArr
          return {quantity:quantity? +quantity:null,
                  unit,
                  description}
        })

        const Recipe = {
          title: recipe.title,
          source_url: recipe.sourceUrl,
          image_url: recipe.image,
          publisher: recipe.publisher,
          cooking_time: +recipe.cookingTime,
          servings: +recipe.servings,
          ingredients
        }
        // 把数据上传到API
        const timeout = function(s){
          return new Promise(function (_, reject) {
            setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
            }, s * 1000);
          });
        }

        const sendJSON = async function(url, uploadData){ //这段解释可以看P307
          try{
            const fetchPro = fetch(url, {
              method: 'POST',
              headers:{
                'Content-Type':'application/json',
              },
              body: JSON.stringify(uploadData),
            });
            const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)])
            const data = await res.json();

            if(!res.ok) throw new Error(`${data.message} (${res.status})`);
            return data;
          }catch(err){
            throw err
          }
        }

        const data = await sendJSON(`${API_URL}?key=${KEY}`,Recipe)
        console.log(data.data.recipe)
        // 渲染数据
        let reci = {
          id: data.data.recipe.id,
          title:data.data.recipe.title,
          publisher:data.data.recipe.publisher,
          sourceUrl:data.data.recipe.source_url,
          image: data.data.recipe.image_url,
          servings:data.data.recipe.servings,
          cookingTime: data.data.recipe.cooking_time,
          ingredients:data.data.recipe.ingredients
        }

        context.commit('addRecipe',reci);
        context.commit('addBookmark',reci);
        window.history.pushState(null,'',`#${reci.id}`)
      }catch(err){
        throw err
      }
    },

}
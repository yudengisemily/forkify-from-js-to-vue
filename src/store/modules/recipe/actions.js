// // 请求数据、定义数据
// export default{
//     async showRecipe(){
//         try{
//           const id = window.location.hash.slice(1)
//           // const id = this.$route.hash.slice(1)
//           // console.log(this.$route.params);
//           if(!id) return;
  
//           const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/'+id);
//           const data = await res.json()
//           let {recipe} = data.data;
//           this.recipe = {
//             id: recipe.id,
//             title:recipe.title,
//             publisher:recipe.publisher,
//             sourceUrl:recipe.source_url,
//             image: recipe.image_url,
//             servings:recipe.servings,
//             cookingTime: recipe.cooking_time,
//             ingredients:recipe.ingredients
//           }
//           this.isLoading = false;
          
//           ['load','hashchange'].forEach(ev => window.addEventListener(ev,this.showRecipe))
//         }catch(err){
//           alert(err);
//         }
//         context.commit('setRecipe',recipe)
//       }
// }
<template>
  <div class="container">

    <spinner v-if="isLoading"></spinner>

    <the-header></the-header>

    <the-searchresults></the-searchresults>

    <the-recipe v-if="recipe !== null" :recipe="recipe" ></the-recipe>


  </div>

    <div class="overlay hidden"></div>
    <div class="add-recipe-window hidden">
      <button class="btn--close-modal">&times;</button>
      <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
import TheSearchresults from './layout/TheSearchresults.vue';
import TheRecipe from './layout/TheRecipe.vue';
import Spinner from './components/spinner.vue';

export default{
  components: { TheHeader, TheSearchresults, TheRecipe, Spinner },
  data(){
    return{
      // recipe:this.$store.state.recipe,//这里应该用getters而不是直接访问state
      recipe: this.$store.getters['recipe/getRecipe'],
      isLoading:this.$store.getters['recipe/isLoading']
      //如果你的Vuex store是模块化的，并且你的getter位于特定的模块中，你需要以模块名为前缀来访问getter。
    }
  },
  created(){
     //在app.vue文件被创立时，就开始触发请求数据，
    // this.showRecipe(); 
    // 本质就是让recipe有值，但是这一过程在action中得以实现，
    // 那么这里就需要调用action中的行为来使得recipe有值，
    // 再让this.recipe获取到state里的recipe就ok了
    this.$store.dispatch('recipe/showRecipe')
    console.log(this.recipe)
    console.log(this.isLoading)
    console.log(window.location.hash.slice(1))
    
  },
  methods:{
    timeout(s){
      return new Promise(function (_, reject) {
        setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
      });
    },
},
    
}

</script>

<style scoped>

</style>

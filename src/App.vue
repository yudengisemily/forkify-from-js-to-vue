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
    }
  },
  computed:{
    recipe(){
      return this.$store.getters['recipe/getRecipe'];
    },
    isLoading(){
      return this.$store.getters['recipe/isLoading'];
    }
  },
  methods:{
    timeout(s){
      return new Promise(function (_, reject) {
        setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
      });
    },
    addEventListeners() {
      ['load', 'hashchange'].forEach(ev => {
        window.addEventListener(ev, (event) => {
          this.$store.dispatch('recipe/showRecipe');
          });
      });
    },
    removeEventListeners() {
      ['load', 'hashchange'].forEach(ev => {
        window.removeEventListener(ev, (event) => {
          this.$store.dispatch('recipe/showRecipe');
          });
      });
    }
  },

  mounted() {
    // 组件挂载后，添加事件监听器
    this.addEventListeners();
  },
  beforeDestroy() {
    // 组件销毁前，移除事件监听器
    this.removeEventListeners();
  }
    
}

</script>

<style scoped>

</style>

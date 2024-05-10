<template>
  <div class="container">
    <spinner v-if="isLoading"></spinner>
    <the-header></the-header>
    <the-searchresults></the-searchresults>
    <the-recipe v-if="recipe !== null" :recipe="recipe" ></the-recipe>
  </div>
   
  <upload-recipe></upload-recipe>
    
</template>

<script>
import TheHeader from './layout/TheHeader.vue';
import TheSearchresults from './layout/TheSearchresults.vue';
import TheRecipe from './layout/TheRecipe.vue';
import Spinner from './components/spinner.vue';
import UploadRecipe from './components/uploadRecipe.vue'
export default{
  components: { TheHeader, TheSearchresults, TheRecipe, Spinner, UploadRecipe},
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

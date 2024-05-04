<template>
    <div class="search-results">
        <ul class="results">

          <a href="#5ed6604591c37cdc054bcb34">recipe1 </a>

          <error v-if="hasError" :error="errorMessage"></error>

          <li v-else class="preview" v-for="recipe in getRecipePerPage" :key="recipe.id">
            <a class="preview__link" :href="'#'+recipe.id">
              <figure class="preview__fig">
                <img :src="recipe.image" :alt="recipe.title" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">{{recipe.title}}</h4>
                <p class="preview__publisher">{{recipe.publisher}}</p>
                <!-- <div class="preview__user-generated">
                  <svg>
                    <use href="src/img/icons.svg#icon-user"></use>
                  </svg>
                </div> -->
              </div>
            </a>
          </li>

        </ul>

        <pagination 
        :curPage="curPage" 
        :recipePerPage="recipePerPage"
        :numPages="numPages">
        </pagination>

        <p class="copyright">
          &copy; Copyright by
          <a
            class="twitter-link"
            target="_blank"
            href="https://twitter.com/jonasschmedtman"
            >Jonas Schmedtmann</a
          >. Use for learning or your portfolio. Don't use to teach. Don't claim
          as your own.
        </p>
      </div>

</template>
<script>
import error from '../components/error.vue';
import pagination from '../components/pagination.vue'
import { RES_PER_PAGE } from "../config.js";
export default{
  components: { error, pagination },
  data(){
    return{
      errorMessage: 'no recipe for now',
      recipePerPage: RES_PER_PAGE,
      curPage:1,  // 这个变量要从pagination组件传过来，然后修改下方要显示的recipe范围
    }
  },
  computed:{
    recipeList(){
      return this.$store.getters['recipeList/getRecipeList'];
    },
    hasError(){
      if(this.recipeList.length === 0){
        return true;
      }else{return false}
    },
    numPages(){
      return Math.ceil(this.recipeList.length/this.recipePerPage);
    },
    getRecipePerPage(){
      const start = (this.curPage - 1) * this.recipePerPage // 0
      const end = this.curPage * this.recipePerPage // 9 , 下方的slice函数使得并不会取到10，而是取到9     

      return this.recipeList.slice(start,end);
    }
  },
}
</script>

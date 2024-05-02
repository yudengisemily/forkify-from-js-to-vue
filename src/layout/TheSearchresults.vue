<template>
    <div class="search-results">
        <ul class="results">

          <error v-if="hasError"></error>
          <div v-else>
            <li class="preview" v-for="recipe in recipeList" :key="recipe.id">
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
          </div>

        </ul>

        <div class="pagination">
          <!-- <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page 1</span>
          </button>
          <button class="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button> -->
        </div>

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
export default{
  components:{error},
  computed:{
    recipeList(){
      return this.$store.getters['recipeList/getRecipeList'];
    },
    hasError(){
      if(recipeList.length !== 0){
        return true;
      }else{return false}
    }
  }
}
</script>

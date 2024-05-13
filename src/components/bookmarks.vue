<template>
    <li class="preview" v-for="recipe in bookmarksRecipe" :key="recipe.id">
        <a class="preview__link" :href="'#'+recipe.id">
            <figure class="preview__fig">
            <img :src="recipe.image" :alt="recipe.title" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">{{recipe.title}}</h4>
                <p class="preview__publisher">{{recipe.publisher}}</p>
                <!-- <div :class="{ 'preview__user-generated': true, 'hidden': !recipe.key }">
                  <svg>
                    <use href="src/img/icons.svg#icon-user"></use>
                  </svg>
                </div> -->
            </div>
        </a>
    </li>
</template>
<script>
export default {
    computed:{
        bookmarksRecipe(){
            return this.$store.getters['recipe/getBookmarkRecipe'];
        }
    }
}
</script>
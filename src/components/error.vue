<template>
    <div class="error">
        <div>
            <svg>
            <use href="src/img/icons.svg#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>{{ errorMessage }}</p>
    </div>
</template>

<script>
export default{
    props:['error'],
    computed:{
        errorMessage(){
            const errorFromRecipe = this.$store.getters['recipe/getError'];
            const errorFromRecipeList = this.$store.getters['recipeList/getError'];
            return errorFromRecipe || errorFromRecipeList || this.error || '';
        }
    }
}
</script>

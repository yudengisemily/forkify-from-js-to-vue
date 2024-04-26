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
    computed:{
        errorMessage(){
            return this.$store.getters['recipe/getError'];
        }
    }
}
</script>

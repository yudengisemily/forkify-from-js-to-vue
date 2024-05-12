<template>
    <form class="upload" @submit.prevent="submitForm">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="222222222" required name="title" type="text" />
          <label>URL</label>
          <input value="222222222" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="222222222" required name="image" type="text" />
          <label>Publisher</label>
          <input value="222222222" required name="publisher" type="text" />
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

        <!-- 如果一个按钮位于表单内部，并且没有明确指定 type，它的默认类型是 submit。
        当点击这个按钮时，它默认会触发表单的提交事件 -->
        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>

        <error v-if="hasError" :error="error"></error>
    </form>
</template>

<script>
import error from './error.vue'
export default {
  components:{error},
  data(){
    return{
      error:'',
      hasError: false,
    }
  },
  methods:{
    async submitForm(event){
      const dataArr = [...new FormData(event.target)]  //会返回一个array，里面包含所有input的value值
      const data = Object.fromEntries(dataArr)
      // console.log(data)

      try{
        await this.$store.dispatch('recipe/uploadRecipe',data)
        this.hasError = false 
      }catch(err){
        this.error = err
        this.hasError = true
      }
    }
  }
}
</script>

<style scoped>
</style>
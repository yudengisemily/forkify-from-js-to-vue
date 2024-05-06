<template>
    <div class="pagination">
<!-- -------------------------------------------------------------------------- -->
          <button v-if="curPage === numPages && numPages > 1" 
            @click="curPageMinusOne"
            class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page {{this.curPage - 1}}</span>
          </button>
<!-- -------------------------------------------------------------------------- -->
          <button v-else-if="curPage === 1 && numPages > 1" 
            @click="curPagePlusOne"
            class="btn--inline pagination__btn--next">
            <span>Page {{this.curPage + 1}}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
<!-- -------------------------------------------------------------------------- -->
          <div v-else-if="curPage < numPages">
            <button 
            @click="curPageMinusOne"
            class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="src/img/icons.svg#icon-arrow-left"></use>
              </svg>
              <span>Page {{this.curPage - 1}}</span>
            </button>

            <button
            @click="curPagePlusOne" 
            class="btn--inline pagination__btn--next">
              <span>Page {{this.curPage + 1}}</span>
              <svg class="search__icon">
                <use href="src/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div>
<!-- -------------------------------------------------------------------------- -->
    </div>  
</template>
<script>
export default{
  props:['numPages'],
  data(){
    return{
      curPage:1,
    }
  },
  methods:{
    curPagePlusOne(){
      this.curPage += 1;
      this.$emit('passing-curpage',this.curPage);
    },
    curPageMinusOne(){
      this.curPage -= 1;
      this.$emit('passing-curpage',this.curPage);
    }
  }
}
</script>
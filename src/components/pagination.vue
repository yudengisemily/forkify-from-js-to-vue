<template>
    <div class="pagination">
<!-- -------------------------------------------------------------------------- -->
          <button v-if="curPage === numPages && numPages > 1" 
            @click="passingCurPage"
            class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page {{this.curPage - 1}}</span>
          </button>
<!-- -------------------------------------------------------------------------- -->
          <button v-else-if="curPage === 1 && numPages > 1" 
            @click="passingCurPage"
            class="btn--inline pagination__btn--next">
            <span>Page {{this.curPage + 1}}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
<!-- -------------------------------------------------------------------------- -->
          <div v-else-if="curPage < numPages">
            <button 
            @click="passingCurPage"
            class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="src/img/icons.svg#icon-arrow-left"></use>
              </svg>
              <span>Page {{this.curPage - 1}}</span>
            </button>

            <button
            @click="passingCurPage" 
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
  // 要把按钮动态变化的curPage传出去，curPage是怎么改变的？？？
  // curPage 是通过点击事件触发，然后获取到btn的goto属性，这个属性中的值是curPage+1或-1
  props:['numPages'],
  data(){
    return{
      curPage:2,
    }
  },
  methods:{
    passingCurPage(){
      this.$emit('passing-curpage',this.curPage);
    }
  }
}
</script>
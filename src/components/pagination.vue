<template>
    <div class="pagination">

          <button class="btn--inline pagination__btn--prev">
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
          </button>

    </div>  
</template>
<script>
export default{
  // 要把按钮动态变化的curPage传出去，curPage是怎么改变的？？？

  props:['curPage','numPages'],
  methods:{
    controlButtonPageNum(){
      const numPages = this.numPages;
      // page 1, there are other pages
      if(this.curPage === 1 && numPages > 1){

      }
      // last page
      else if(this.curPage === numPages && numPages > 1){

      }
      // other pages
      else if(this.curPage < numPages){

      }
      // page 1, there are no other pages
      else{

      }
    }
  }
}
</script>
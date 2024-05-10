<template>
    <header class="header">
        <img src="src/img/logo.png" alt="Logo" class="header__logo" />
        <form class="search" @submit.prevent="submitForm">
          <input
            type="text"
            class="search__field"
            placeholder="Search over 1,000,000 recipes..."
            v-model.trim="query"
          />
          <button class="btn search__btn">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-search"></use>
            </svg>
            <span>Search</span>
          </button>
        </form>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <button class="nav__btn nav__btn--add-recipe">
                <svg class="nav__icon">
                  <use href="src/img/icons.svg#icon-edit"></use>
                </svg>
                <span>Add recipe</span>
              </button>
            </li>
            <li class="nav__item">
              <button class="nav__btn nav__btn--bookmarks">
                <svg class="nav__icon">
                  <use href="src/img/icons.svg#icon-bookmark"></use>
                </svg>
                <span>Bookmarks</span>
              </button>
              <div class="bookmarks">
                <ul class="bookmarks__list">

                  <div class="message" v-if="bookmarksRecipe.length === 0">
                    <div>
                      <svg>
                        <use href="src/img/icons.svg#icon-smile"></use>
                      </svg>
                    </div>
                    <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                  </div>

                  <bookmarks v-else-if="bookmarksRecipe.length > 0"></bookmarks>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
</template>

<script>
import bookmarks from '../components/bookmarks.vue'
export default{
  components:{ bookmarks },
  data(){
    return{
      query: '',
      storageBookmarks: JSON.parse(localStorage.getItem('bookmarks')),
    }
  },
  computed:{
    bookmarksRecipe(){
        // 清除 localStorage 中的所有数据
        // localStorage.clear();

        if(this.storageBookmarks){  // 如果localStorage里面有书签，那么就把它们更新到状态中的书签序列
          this.$store.dispatch('recipe/loadBookmarks',this.storageBookmarks)
        }

        return this.$store.getters['recipe/getBookmarkRecipe'];
        

    }
  },
  methods:{
    async submitForm(){
      await this.$store.dispatch('recipeList/loadSearchResults',this.query);   
      // console.log(this.$store.getters['recipeList/getRecipeList'])
    },
  },
}
</script>

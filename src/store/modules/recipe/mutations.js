//改变数据
export default {
    addRecipe(state,payload){
        // state.recipe.push(payload);
        state.recipe = payload;    
    },
    changeIsLoading(state,payload){
        state.isLoading = payload;
    },
    addError(state,payload){
        state.error = payload;
    },
    addBookmark(state,payload){
        payload.bookmarked = true;
        state.bookmarksRecipe.push(payload)
        localStorage.setItem('bookmarks',JSON.stringify(state.bookmarksRecipe))
    },
    removeBookmark(state,payload){//注意这里的payload是recipe.id
        const index = state.bookmarksRecipe.findIndex(el => el.id = payload);
        state.bookmarksRecipe.splice(index,1)
        
        if(state.recipe.id === payload){
            state.recipe.bookmarked = false;
        }
        localStorage.setItem('bookmarks',JSON.stringify(state.bookmarksRecipe))
    }
}
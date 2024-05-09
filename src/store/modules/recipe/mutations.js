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
    }
}
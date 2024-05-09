//外界获取数据的途径（方法）
export default {
    getRecipe(state){
        return state.recipe;
    },
    isLoading(state){
        return state.isLoading;
    },
    getError(state){
        return state.error;
    },
    getBookmarkRecipe(state){
        return state.bookmarksRecipe;
    }
}
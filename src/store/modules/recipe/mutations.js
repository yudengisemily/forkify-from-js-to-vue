//改变数据
export default {
    addRecipe(state,payload){
        // state.recipe.push(payload);
        state.recipe = payload;    
    },
    changeIsLoading(state,payload){
        state.isLoading = payload;
    }
}
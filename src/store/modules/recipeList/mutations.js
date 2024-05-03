//改变数据
export default {
    addRecipeList(state,payload){
        state.recipeList = payload;
    },
    updateQuery(state,payload){
        state.query = payload
    },
    addError(state,payload){
        state.error = payload;
    }
}
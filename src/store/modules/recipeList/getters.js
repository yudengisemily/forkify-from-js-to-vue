//外界获取数据的途径（方法）
export default {
    getRecipeList(state){
        return state.recipeList;
    },
    getQuery(state){
        return state.query;
    },
    getError(state){
        return state.error;
    }
}
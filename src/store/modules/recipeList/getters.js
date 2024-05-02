//外界获取数据的途径（方法）
export default {
    getRecipeList(state){
        console.log(state)
        console.log(state.recipeList);
        
        return state.recipeList;
    },
    getQuery(state){
        return state.query;
    }
}
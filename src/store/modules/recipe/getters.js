//外界获取数据的途径（方法）
export default {
    getRecipe(state){
        console.log('2');
        return state.recipe;
    },
    isLoading(state){
        return state.isLoading;
    }
}
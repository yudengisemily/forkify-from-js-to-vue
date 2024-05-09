// 存放数据
import mutations from "./mutations.js"
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced:true,
    state(){
        return{
            isLoading:true,
            recipe:{},
            error:null,
            bookmarksRecipe:[],
        }
    },
    mutations,
    actions,
    getters
}
// 存放数据
import mutations from "./mutations.js"
import actions from './actions.js';
import getters from './getters.js';

export default{
    namespaced:true,
    state(){
        return{
            query:'',
            recipeList:[],
            error:null,
        }
    },
    mutations,
    actions,
    getters
}
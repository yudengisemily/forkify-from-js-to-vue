// 请求数据、定义数据
import { API_URL } from "../../../config.js";

export default {
    async loadSearchResults(context,query){
        let Results = [];
        try{
            const res = await fetch(`${API_URL}?search=${query}`);
            const data = await res.json();
            Results = data.data.recipes.map(reci=>{
                return {
                    id: reci.id,
                    title:reci.title,
                    publisher:reci.publisher,
                    image: reci.image_url,
                }
            })    
        }catch(err){
            alert(err)
        }
        context.commit('addRecipeList',Results);
        context.commit('updateQuery',query);
    },
}
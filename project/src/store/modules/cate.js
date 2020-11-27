import {catelist} from '../../util/axios/index'


const state = {
    catelist:[]
}

const getters = {
   getlist(){
       return state.catelist
   }
}

const mutations = {
    CATELIST(state,x){
        state.catelist = x
            }
}

const actions = {
    getcatelist({commit}){
        catelist({istree:true}).then(res=>{
            console.log(res);
            commit('CATELIST',res.data.list)
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced:true
}
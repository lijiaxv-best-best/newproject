import {bannerlist} from '../../util/axios/index'


const state = {
    bannerlist:[]
}

const getters = {
getbannerlist(state){
    return state.bannerlist
}
}

const mutations = {
GETLIST(state,x){
state.bannerlist = x
}
}

const actions = {

    getlist({commit}){
        bannerlist().then(res =>{
            if(res.data.code==200){
                console.log(res);
commit('GETLIST',res.data.list)
            }
        })
    }
}

export default{
    state,
    getters,mutations,actions,
    namespaced:true
}
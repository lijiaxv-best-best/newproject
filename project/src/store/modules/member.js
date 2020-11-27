import {memberlist} from '../../util/axios/index'

const state={
    memberlist:[]
}
const getters = {
list(state){
    return state.memberlist
}
}
const mutations = {
    GETMEMBERLIST(state,x){
state.memberlist = x
    }
}
const actions = {
getmemberlist({commit}){
    memberlist().then(res=>{
        if(res.data.code==200){
            commit('GETMEMBERLIST',res.data.list)
        }
    })
}
}

export default{
    state,
    getters,
    mutations,
    actions,
    namespaced:true

}
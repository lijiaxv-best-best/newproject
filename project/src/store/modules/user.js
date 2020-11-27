import {userlist,usercount} from '../../util/axios/index'

const state = {
    userlist:[],
    size:2,
    page:1,
    total:0

}

const mutations = {
USERLIST(state,x){
state.userlist = x
},
USERCOUNT(state,x){
    state.total = x
},
CHANGEPAGE(state,e){
    console.log(e);
    state.page = e
}


}

const getters = {
getlist(){
   
    return state.userlist
},

getcount(){
    return state.total
},

getsize(){
    return state.size
}


}

const actions = {
    getuserlist(context){
        userlist({
            size:context.state.size,
            page:context.state.page
        
        }).then(res=>{

context.commit('USERLIST',res.data.list)

         

        })
    },

    getusercount({commit}){
        usercount().then(res=>{
            console.log(res.data.list[0].total);
            commit('USERCOUNT',res.data.list[0].total)

        })
    },

    changepage(context,x){
        context.commit('CHANGEPAGE',x)
        context.dispatch('getuserlist')

    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced:true
}
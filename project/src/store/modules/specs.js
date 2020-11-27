import {specslist,specscount} from '../../util/axios/index'

const state = {
    specslist:[],
    size:2,
    page:1,
    total:0

}

const mutations = {
USERLIST(state,x){
state.specslist = x
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
   
    return state.specslist
},

getcount(){
    return state.total
},

getsize(){
    return state.size
}


}

const actions = {
    getspecslist(context){
        specslist({
            size:context.state.size,
            page:context.state.page
        
        }).then(res=>{

context.commit('USERLIST',res.data.list)

         

        })
    },

    getspecscount({commit}){
        specscount().then(res=>{
            console.log(res.data.list[0].total);
            commit('USERCOUNT',res.data.list[0].total)

        })
    },

    changepage(context,x){
        context.commit('CHANGEPAGE',x)
        context.dispatch('getspecslist')

    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced:true
}
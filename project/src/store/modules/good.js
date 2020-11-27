import {goodslist,goodscount} from '../../util/axios/index'

const state = {
    goodlist:[],
    size:2,
    page:1,
    total:0

}

const mutations = {
    GOODLIST(state,x){
state.goodlist = x
},
GOODCOUNT(state,x){
    state.total = x
},
CHANGEPAGE(state,e){
    console.log(e);
    state.page = e
}


}

const getters = {
getlist(){
   
    return state.goodlist
},

getcount(){
    return state.total
},

getsize(){
    return state.size
}


}

const actions = {
    getgoodlist(context){
        goodslist({
            size:context.state.size,
            page:context.state.page
        
        }).then(res=>{

context.commit('GOODLIST',res.data.list)

         

        })
    },

    getgoodcount({commit}){
        goodscount().then(res=>{
            console.log(res.data.list[0].total);
            commit('GOODCOUNT',res.data.list[0].total)

        })
    },

    changepage(context,x){
        context.commit('CHANGEPAGE',x)
        context.dispatch('getgoodlist')

    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced:true
}
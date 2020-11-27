import {rolelist} from '../../util/axios'



const state = {
    rolelist:[]
}


const getters = {
    getrolelist(state){
        return state.rolelist
    }
}

const mutations = {
    REQ_MENULIST(state,payload){
        state.rolelist = payload
        
    }
}

const actions = {
    getroleListAction({commit}){
        rolelist()
        .then(res=>{
            console.log(res,'响应')
            if(res.data.code==200){
                commit("REQ_MENULIST",res.data.list)
            }
        })
        .catch(err=>{
            console.log(err,'错误响应')
        })
    }
}


//默认导出所有的内容
export default {
    state,
    getters,
    mutations,
    actions,
    //命名空间
    namespaced:true
}
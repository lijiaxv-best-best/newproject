import {getlist} from '../../util/axios'



const state = {
    menuList:[]
}


const getters = {
    getlist(state){
        return state.menuList
    }
}

const mutations = {
    REQ_MENULIST(state,payload){
        state.menuList = payload
    }
}

const actions = {
    getMenuListAction({commit}){
        getlist({istree:true})
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
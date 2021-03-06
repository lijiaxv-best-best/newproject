
import { getSeckList } from '../../util/axios'


const state = {
    seckList: []
}


const getters = {

    getSeckList(state) {
        return state.seckList
    }
}


const mutations = {

    REQ_SECKLIST(state, payload) {
        state.seckList = payload
    }
}


const actions = {

    getSeckListAction({ commit }) {
        getSeckList()
            .then(res => {
                console.log(res, '响应')
                if (res.data.code == 200) {

                    commit("REQ_SECKLIST", res.data.list)
                }
            })
            .catch(err => {
                console.log(err, '错误响应')
            })
    }
}



export default {
    state,
    getters,
    mutations,
    actions,

    namespaced: true
}
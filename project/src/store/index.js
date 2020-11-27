import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


import menu from './modules/menu'
import role from './modules/role'
import user from './modules/user'
import cate from './modules/cate'
import specs from './modules/specs'
import banner from './modules/banner'
import member from './modules/member'
import good from './modules/good'
import seck from './modules/seck'


export default new Vuex.Store({
    modules:{
menu,
role,
user,
cate,
specs,
banner,
member,
good,
seck
    }
})
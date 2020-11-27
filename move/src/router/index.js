import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'/index',
     component:()=>import('../first/index'),
     children:[
       {
         path:'/cart',
         component:()=>import('../second/cart'),
         name:'购物车'
       },
       {
         path:'/home',
         component:()=>import('../second/home'),
         name:"首页"
       },
       {
         path:'/mine',
         component:()=>import('../second/mine'),
         name:'个人中心'
       },
       {
         path:'/sort',
         component:()=>import('../second/sort'),
         name:'分类'
       },
       {
         path:'',
         redirect:'/home'
       }
     ]
   },
   {
path:'/gooddetail',
component:()=>import('../first/gooddetail'),
name:'商品详情'
   },
   {
     path:'/goodlist',
     component:()=>import('../first/goodlist'),
     name:'商品列表'

   },
   {
     path:'/login',
     component:()=>import('../first/login'),
     name:'登录'
   },
   {
     path:'/register',
     component:()=>import('../first/register'),
     name:'注册'
   },
   {
     path:'',
     redirect:'/index'
   }
  ]
})

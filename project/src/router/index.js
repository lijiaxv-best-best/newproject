import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export let secondroute = [
  {
    path:'/menu',
    component:()=>import('../second/menu/menu'),
    name:'菜单管理'
  },
  {
    path:'/role',
    component:()=>import('../second/role/role'),
    name:'角色管理'
  },
  {
    path:'/user',
    component:()=>import('../second/user/user'),
    name:'管理者管理'
  },
  {
    path:'/cata',
    component:()=>import('../second/cate/cate'),
    name:'商品分类'

  },
  {
    path:'/specs',
    component:()=>import('../second/specs/specs'),
    name:'商品规格'
  },
  {
    path:'/banner',
    component:()=>import('../second/banner/banner'),
    name:'轮播图'
  },
  {
    path:'/vip',
    component:()=>import('../second/member/member'),
    name:'会员管理'
  },
  {
    path:'/goods',
    component:()=>import('../second/good/good'),
    name:'商品管理'
  },
  {
    path:'/seck',
    component:()=>import('../second/seck/seck'),
    name:'限时秒杀管理'
  }
]

const router =  new Router({
  routes: [
    {
  path:'/login',
  component:()=>import('../first/login')
    },
    {
      path:'',
      redirect:'/index'
    },
    {
      path:'/index',
      component:()=>import('../first/index'),
      children:[
        
        {
          path:'/home',
          component:()=>import('../second/home')

        },
        ...secondroute,
        {
          path:'',
          redirect:'/home'
        }
      ]
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    next()
    return
  }
  if(sessionStorage.getItem('userinfo')){
    next()
    return
  }
  next('/login')
})

export default router
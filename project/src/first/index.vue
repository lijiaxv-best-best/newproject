<template>
 <div>
<el-container>
  <el-header>管理系统</el-header>
  <el-container>
    <el-aside width="200px">

 <el-menu
      default-active="default"
      class="el-menu-vertical-demo"
     unique-opened
     router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
              <i class="el-icon-s-grid"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu v-for = 'item in getlist' :index="item.url" :key = 'item.id'>
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item  :key='menu.id' v-for = 'menu in item.children' :index="menu.url">
                <span slot="title">{{menu.title}}</span>
              </el-menu-item>
             
            </el-submenu>
           
    </el-menu>

    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
 data() {
 return {
default:'/home',
 };
 },
 mounted(){
   this.default = this.$route.path
   this.getMenuListAction()
 },
 computed:{
   ...mapGetters({getlist:'menu/getlist'})
 },
  methods: {
...mapActions({getMenuListAction:'menu/getMenuListAction'})
    
  }
};
</script>

<style lang="" scoped>
.el-header{
width: 100%;
height: 90vh;
background-color: black;
color: white;
font-size: 30px;
text-align: center;
}
.el-menu-vertical-demo{
    height: 60vh;
}

</style>

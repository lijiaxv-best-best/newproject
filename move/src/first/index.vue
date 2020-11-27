<template>
 <div>
<van-tabbar route v-model="active" active-color = 'red'  @change="onChange">
  <van-tabbar-item to='/home' icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/sort" icon="bars">分类</van-tabbar-item>
  <van-tabbar-item to="/cart" icon="shopping-cart">购物车</van-tabbar-item>
  <van-tabbar-item to="/mine" icon="friends">个人中心</van-tabbar-item>
</van-tabbar>
<router-view></router-view>
 </div>
</template>

<script>

export default {
 data() {
 return {
active:0
 };
 },
 methods: {
     onChange(){
console.log(this.active);
     }
 },


};
</script>

<style lang="" scoped>

</style>

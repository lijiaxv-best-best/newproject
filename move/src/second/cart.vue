<template>
 <div>
<van-nav-bar :title="$route.name" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>


<van-swipe-cell v-for="item in list" :key="item.id">
  <van-card
    :num="item.num"
    :price="item.price"
  
    :title="item.goodsname"
    class="goods-card"
    :thumb="$imgurl+item.img"
  />
  <template #right>
    <van-button @click="del(item.id)" square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>

<div v-if="false"><van-empty  description="描述文字" /></div>


 </div>
</template>

<script>
import {cartlist,cartdelete} from '../util/index'
import { Toast } from "vant";
export default {
 data() {
 return {
list:[]
 };
 },
 mounted() {
   console.log(this.list.length);
  //  console.log(this.$route.query.uid);
  cartlist({uid:JSON.parse(sessionStorage.getItem('userInfo')).uid}).then(res=>{
    console.log(res);
    this.list = res.data.list
  })
 },
methods: {
  
  del(id){
cartdelete({id}).then(res=>{
  if(res.data.code==200){
     cartlist({uid:this.$route.query.uid}).then(res=>{
    console.log(res);
    this.list = res.data.list
  })
Toast.success(res.data.msg)
  }
})
  }
},
};
</script>

<style lang="" scoped>
.goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
</style>

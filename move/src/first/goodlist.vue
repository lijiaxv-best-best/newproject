<template>
 <div>
 <van-nav-bar @click-left="$router.back()" :title="$route.name" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="24" />
      </template>
    </van-nav-bar>

<van-card
v-for="item in list"
:key="item.id"
  @click="tiao(item.id)"
  num="2"
  :price="item.price"
  
  :title="item.goodsname"
  :thumb="$imgurl+item.img"
/>

 </div>
</template>

<script>
import {getgoods} from '../util/index'
export default {
 data() {
 return {
list:[]
 };
 },
 mounted() {
     this.get()
 },
methods: {
    get(){
        getgoods({fid:this.$route.query.id}).then(res=>{
            console.log(res);
this.list = res.data.list
        })
    },
    tiao(id){
    console.log(1);
    this.$router.push({
        path:'/gooddetail',
        query:{
            id
        }

    })
}
},

};
</script>

<style lang="" scoped>

</style>

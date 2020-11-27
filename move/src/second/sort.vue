<template>
 <div>
<van-nav-bar :title="$route.name" @click-left="$router.back()" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>

<div>
    <van-sidebar v-model="activeKey" class="left" @change="change">
  <van-sidebar-item v-for="item in first" :key="item.id" :title="item.catename" />
 
</van-sidebar>

<van-grid :border="false" :column-num="3" class="right" >

  <van-grid-item  :to="'/goodlist?id='+item.id" v-for="item in second" :key="item.id">
    <van-image   :src="$imgurl+item.img" />
    <p class="word">{{item.catename}}</p>
  </van-grid-item>
  
</van-grid>

</div>
 </div>
</template>

<script>
import {getcatetree} from '../util/index'
export default {
 data() {
 return {
      activeKey: 0,
      first:[],
      second:[],
     

 };
 },
 mounted() {
     this.sort()
 },

 methods: {
    change(e){
      
this.activeKey = e
this.sort()
    },
     sort(){
         getcatetree().then(res=>{
             console.log(res);
             this.first = res.data.list
             console.log(this.activeKey);
             this.second = res.data.list[this.activeKey].children
             console.log(this.second);
         })
     }
 },
 tiao(){

 }
};
</script>

<style lang="" scoped>
.left{
    float: left;
}
.word{
    width: 200px;
    font-size: 24px;
}

</style>

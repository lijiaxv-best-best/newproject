<template>
 <div>
 <van-nav-bar
      @click-left="$router.back()"
      :title="$route.name"
      left-text="返回"
      left-arrow
    >
      <template #right>
        <van-icon name="search" size="24" />
      </template>
    </van-nav-bar>

<div>
  <img class="img" :src="$imgurl+detail.img" alt="">
 <p class="goodsname"> {{detail.goodsname}}</p>
  <p class="price">￥{{detail.price}}</p>
  <van-stepper v-model="value" class="right" />
  <p v-html="detail.description"></p>

</div>


<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" />
 
  <van-goods-action-button @click="add" type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" @click="dian" text="立即购买" />
</van-goods-action>

    
 </div>
</template>

<script>
import {getgoodsinfo,cartadd} from '../util/index'
export default {
 data() {
 return {
detail:'',
value:''
 };
 },
 mounted() {
     this.getinfo()
 },
 methods: {
   dian(){
     console.log(this.value);
   },
     getinfo(){
         getgoodsinfo({id:this.$route.query.id}).then(res=>{

this.detail = res.data.list[0]
console.log(this.detail);
         })
     },
     add(){
       console.log(this.value);
       cartadd({
         num:this.value,
         goodsid:this.detail.id,
         uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,

       }).then(res=>{
         console.log(res);
         this.$router.push({
           path:'/cart',
           query:{
             uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
           }
         })
       })
     }
 },
};
</script>

<style lang="" scoped>
.img{
  width: 100%;
  height: 6rem;
  
}
.goodsname{
  font-size: 24px;
}
.price{
  font-size: 24px;
  color: red;
}
.right{
  float: right;
 height: 50px;
}
</style>

<template>
 <div>
<van-nav-bar :title="$route.name" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>

<van-image
  round
  class="img"
  width="4rem"
  height="4rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>

<p>{{info.nickname}}</p>
<van-button @click="tuichu" type="warning">退出登录</van-button>


<div>
          <van-cell title="地址管理" icon="location-o" />
          <van-cell title="我的钱包" icon="balance-list-o" />
          <van-cell title="我的优惠券" icon="coupon-o" />
          <van-cell title="我的二维码" icon="aim" />
      </div>
 </div>
</template>

<script>
export default {
 data() {
 return {
info:''
 };
 },

 mounted() {
   this.info = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : '';
      console.log(this.info);
 },
methods: {
  tuichu(){
    sessionStorage.removeItem('userInfo')
          this.$router.push('/login')
 }
},
};
</script>

<style lang="" scoped>
.img{
  margin-left: 1.5rem;
}
</style>

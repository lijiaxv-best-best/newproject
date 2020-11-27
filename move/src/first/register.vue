<template>
  <div>
    <van-nav-bar
      :title="$route.name"
      left-text="返回"
      right-text="登录"
      left-arrow
      @click-left="$router.back()"
      @click-right="right"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="info.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />

      <van-field
        v-model="info.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <van-field
        v-model="info.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { register } from "../util/index";
import {Toast} from 'vant'
export default {
  data() {
    return {
      info: {
        phone: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
    left() {},
    right() {
      this.$router.push({
        path: "/login",
      });
    },
   onSubmit() {
     console.log(2);
      register(this.info).then(res => {
          if(res.data.code==200){
            console.log(res);
          
Toast.success(res.data.msg)
this.$router.push({
  path:'/login'
})
          }
      });
    },
  },
};
</script>

<style lang="" scoped>
</style>

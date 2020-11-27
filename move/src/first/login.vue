<template>
  <div>
    <van-nav-bar
      :title="$route.name"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="$router.back()"
      @click-right="right"
    />

    <van-form @submit="onSubmit">
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
import { login } from "../util/index";
import { Toast } from "vant";
export default {
  data() {
    return {
      info: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    right() {},
    onSubmit() {
      login(this.info).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          Toast.success(res.data.msg);
          sessionStorage.setItem("userInfo", JSON.stringify(res.data.list));
          this.$router.push({
            path: "/home",
          });
        } else {
          Toast.fail(res.data.msg);
        }
      });
    },
  },
};
</script>

<style lang="" scoped>
</style>

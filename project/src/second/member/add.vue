<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="isshow.show">
      <el-form :model="form">
        <el-form-item label="手机号">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qvxiao">取 消</el-button>
        <el-button type="primary" @click="bianji">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { memberinfo, memberedit } from "../../util/axios/index";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        status: 1,

        nickname: "",
        phone: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters({ list: "member/list" }),
  },
  methods: {
    ...mapActions({ getmemberlist: "member/getmemberlist" }),
    qvxiao() {
      this.$emit("qvxiao");
    },
    getone(uid) {
      memberinfo({ uid }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.form = res.data.list;
          this.form.uid = uid;
          this.$message.success(res.data.msg);
        }
      });
    },
    react() {
      this.form = {
        status: 1,

        nickname: "",
        phone: "",
        password: "",
      };
    },
    bianji() {
      memberedit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.qvxiao();
          this.getmemberlist();
          this.react()
        }
      });
    },
  },
  props: ["isshow"],
};
</script>

<style lang="" scoped>
</style>

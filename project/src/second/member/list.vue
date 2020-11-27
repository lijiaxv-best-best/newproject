<template>
  <div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="uid" label="用户编号" width="180">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" width="180">
      </el-table-column>
      <el-table-column prop="phone" label="手机号"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <div>
            <el-button type="primary" size="mini" @click="bianji(item.row.uid)"
              >编辑</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ list: "member/list" }),
  },
  methods: {
    ...mapActions({ getmemberlist: "member/getmemberlist" }),
    bianji(uid) {
      this.$emit("bianji", uid);
    },
  },
  mounted() {
    this.getmemberlist();
  },
};
</script>

<style lang="" scoped>
</style>

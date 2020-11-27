<template>
  <div>
    <el-table :data="getbannerlist" style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="title" label="轮播图标题" width="180">
      </el-table-column>
      <el-table-column prop="address" label="图片">
        <template slot-scope="item">
          <div>
            <img class="box" :src="$imgurl + item.row.img" alt="" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <div>
            <el-button type="primary" size="mini" @click="bianji(item.row.id)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="del(item.row.id)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { bannerdelete } from "../../util/axios/index";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getlist();
  },
  computed: {
    ...mapGetters({ getbannerlist: "banner/getbannerlist" }),
  },
  methods: {
    ...mapActions({ getlist: "banner/getlist" }),
   bianji(id){
this.$emit('bianji',id)
   },
    del(id) {
      console.log(id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          bannerdelete({ id }).then((res) => {
            console.log(res);
            this.getlist();
            this.$message.success(res.data.msg);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="" scoped>
.box {
  width: 100px;
  height: 100px;
}
</style>

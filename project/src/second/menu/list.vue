<template>
  <div>
    <el-table
      :data="menulist"
      style="width: 100%"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="菜单编号" width="160">
      </el-table-column>
      <el-table-column prop="title" label="菜单名称" width="160">
      </el-table-column>
      <el-table-column prop="pid" label="上级菜单"> </el-table-column>
      <el-table-column prop="icon" label="菜单图标" width="160">
      </el-table-column>
      <el-table-column prop="url" label="菜单地址" width="160">
      </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <div>
            <el-button
              class="but"
              type="primary"
              size="mini"
              @click="bianji(item.row.id)"
              >编辑</el-button
            >
            <el-button
              class="but"
              type="danger"
              size="mini"
              @click="del(item.row.id)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { delmenu } from "../../util/axios/index";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      menulist: "menu/getlist",
    }),
  },
  mounted() {
    this.addlist();
  },
  methods: {
    bianji(id) {
      this.$emit('bianji', id);
    },
    ...mapActions({
      addlist: "menu/getMenuListAction",
    }),
    del(id) {
      console.log(id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delmenu({ id }).then((res) => {
            console.log(res);
            this.addlist();
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
.but {
  float: left;
}
</style>

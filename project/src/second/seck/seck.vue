<template>
  <div>
    <!-- 面包屑 -->
    <bread></bread>
    <!-- 添加按钮 -->
    <el-button type="primary" plain size="small" @click="add">添加</el-button>
    <!-- 列表渲染 -->
    <list @edit="edit"></list>
    <!-- 弹框 -->
    <add ref="dialog" @cancel="cancel" :addInfo="addInfo"></add>
  </div>
</template>

<script>
import bread from "../../components/bread";
import list from "./list";
import add from "./add";
export default {
  data() {
    return {
      addInfo: {
        isShow: false, //弹框打开关闭
        isAdd: true //添加还是编辑
      }
    };
  },
  components: {
    bread,
    list,
    add
  },
  methods: {
    //点击添加打开弹框
    add() {
      this.addInfo.isShow = true;
      //点击添加的时候，告诉弹框你是添加
      this.addInfo.isAdd = true;
    },
    //子组件触发的父组件修改弹框状态
    cancel() {
      this.addInfo.isShow = false;
    },
    //子组件触发父组件联动编辑
    edit(e) {
      this.addInfo.isShow = true;
      this.addInfo.isAdd = false;
      this.$refs.dialog.look(e);
    }
  }
};
</script>

<style lang="" scoped>

</style>
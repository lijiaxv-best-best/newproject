<template>
  <div>
    <bread></bread>
    <el-button type="primary" @click="add">添加</el-button>
    <list @bianji = "bianji"></list>
    <add :isshow="isshow" @qvxiao="qvxiao" ref="father"></add>
  </div>
</template>

<script>
import bread from "../../components/bread";
import list from "./list";
import add from "./add";
export default {
  data() {
    return {
        isshow:{
            show:false,
            bian:false
        }
    };
  },
  components: {
    bread,
    list,
    add,
  },
  methods: {
      add(){
          this.isshow.show = true
          this.isshow.bian = false
      },
       qvxiao(e){
      this.isshow.show = e
  },
  bianji(id){
this.isshow.show =true
this.isshow.bian = true
this.$refs.father.look(id)
  }
  },

 
};
</script>

<style lang="" scoped>
</style>

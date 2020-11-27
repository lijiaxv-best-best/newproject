<template>
  <div>
    <bread></bread>
    <el-button @click="add"  type="primary">添加</el-button>
   <rolelist @bianji="bianji"></rolelist>
   <add :isshow="isshow" @qvxiao = "qvxiao" ref="bianjilist"></add>
  </div>
</template>

<script>
import bread from "../../components/bread";
import rolelist from './rolelist'
import add from './add'
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
    rolelist,
    add
  },
  methods: {
    bianji(e){
       this.isshow.show=true
        this.isshow.bian=true
      console.log(e);
this.$refs.bianjilist.xiugai(e)
    },
      add(){
this.isshow.show = true
this.isshow.bian = false
      },

      qvxiao(e){
       
this.isshow.show = e

      }
  
    
  },
};
</script>

<style lang="" scoped>
</style>

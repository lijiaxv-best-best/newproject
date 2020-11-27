<template>
  <div>
    <bread></bread>
    <el-button  type="primary" @click="add">添加</el-button>
    <list @bianji="bianji" ></list>
    <add @qvxiao="qvxiao" :isshow = 'isshow' ref="father"></add>
  </div>
</template>

<script>
import bread from "../../components/bread";
import list from './list'
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
    list,
    add
  },
  methods: {
      bianji(e){
          this.isshow.show = true
          this.isshow.bian = true
       this.$refs.father.getone(e)

     },
       add(){
         this.isshow.show = true
         this.isshow.bian = false
     },
     qvxiao(){
         this.isshow.show = false
     }
  },

  
};
</script>

<style lang="" scoped>
</style>

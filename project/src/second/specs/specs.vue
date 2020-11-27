<template>
 <div>
<bread></bread>
<el-button  type="primary" @click="add">添加</el-button>
<list @bianji = "bianji"></list>
<add :isshow = "isshow" ref="fa"></add>
 </div>
</template>

<script>
import bread from '../../components/bread'
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
 methods: {
     add(){
         this.isshow.show = true
         this.isshow.bian = false
     },
     bianji(e){
         this.isshow.show = true
         this.isshow.bian = true
         console.log(e);
         this.$refs.fa.getone(e)

     }
 },
 components:{
    bread,
    list,
    add
}
};
</script>

<style lang="" scoped>

</style>

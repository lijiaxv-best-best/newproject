<template>
 <div>
<bread></bread>
 <el-button @click="add"   type="primary">添加</el-button>
<list @bianji="bianji"></list>
<add :isshow='isshow' ref="get"></add>
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
     },
 };
 },
 methods: {
     bianji(e){
         console.log(e);
this.isshow.show = true
this.isshow.bian = true
this.$refs.get.getone(e)
     },
     add(){
         this.isshow.show = true
         
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

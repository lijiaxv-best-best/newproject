<template>
 <div>
<bread></bread>
<el-button @click="add"  type="primary">添加</el-button>
<list @bianji= "bianji"></list>
<add :isshow = 'isshow' @qvxiao = "qvxiao" ref="father"></add>
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
     bianji(e){
         console.log(1);
this.isshow.show = true
this.isshow.bian = true
this.$refs.father.look(e)
     },
     add(){
         this.isshow.show = true
         this.isshow.bian = false
     },
     qvxiao(){
         console.log(1);
         this.isshow.show = false
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

<template>
 <div>
<bread></bread>

<list @bianji="bianji"></list>
<add @qvxiao="qvxiao" :isshow ='isshow' ref="father"></add>
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
 components:{
     bread,
     list,
     add
 },
 methods: {
     bianji(uid){
         this.isshow.show = true
         this.$refs.father.getone(uid)

     },
     qvxiao(){
         this.isshow.show = false
     }
 },
};
</script>

<style lang="" scoped>

</style>

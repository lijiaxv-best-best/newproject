<template>
 <div>
<bread></bread>
<el-button @click="add"  type="primary">添加</el-button>


<list @bianji='bianji'></list>
<add :info='info'  @qvxiao="qvxiao"  ref='father'></add>
 </div>
</template>

<script>
import bread from '../../components/bread'
import list from './list'
import add from './add'
export default {
 data() {
 return {
 info:{
     show:false,
     or:true
 }
 };
 },
 components:{
     bread,
     list,
     add
 },
 methods:{

     bianji(e){
         this.info.show=true
         this.info.or=false
         this.$refs.father.look(e)
     },
     add(){
this.info.show = true
     },
     qvxiao(e){
this.info.show = e
     }
 }
};
</script>

<style lang="" scoped>

</style>

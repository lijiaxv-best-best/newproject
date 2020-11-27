<template>
  <div>
    <el-table :data="specslist" style="width: 100%">
      <el-table-column prop="id" label="规格编号" width="180"> </el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180"> </el-table-column>
      <el-table-column prop="attrs" label="规格属性"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column  label="操作">
           <template slot-scope="item">
             <div>
                   <el-button type="primary" size = 'mini' @click="bianji(item.row.id)">编辑</el-button>
             <el-button type="danger" size = 'mini' @click="del(item.row.id)">删除</el-button>

             </div>
         </template>
           </el-table-column>
    </el-table>
    <el-pagination
  background
  :page-size='getsize'
  layout="prev, pager, next"
  :total="getcount"
  @current-change="change">
</el-pagination>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {specsdelete} from '../../util/axios/index'
export default {
  data() {
    return {
      
    };
  },
  mounted() {
      this.getspecslist()
      this.specscount()
  },
  computed: {
      ...mapGetters({
        specslist:'specs/getlist',
        getcount:'specs/getcount',
        getsize:'specs/getsize'
        })
  },
methods: {
  bianji(x){
    // console.log(1);
this.$emit('bianji',x)
  },
  change(e){
console.log(e);
this.changepage(e)
  },
   
    ...mapActions({
      getspecslist:'specs/getspecslist',
      specscount:'specs/getspecscount',
       changepage:'specs/changepage' 
      }),
del(id){
 this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
        specsdelete({ id }).then((res) => {
            console.log(res);
            this.getspecslist()
            this.$message.success(res.data.msg);
            //  this.getspecslist()
      this.specscount()
      this.changepage()
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
}
},
};
</script>

<style lang="" scoped>
</style>

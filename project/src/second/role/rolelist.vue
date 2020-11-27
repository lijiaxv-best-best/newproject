<template>
 <div>
 <el-table :data="getrolelist" style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180"> </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180"> </el-table-column>
      <el-table-column prop="status" label="状态"> 

           <template slot-scope="item">
          <div>
            <el-tag v-if="item.row.status == 1" type="success">启用</el-tag>
            <el-tag v-else type="danger">禁用</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">

         <template slot-scope="item">
             <div>
                   <el-button type="primary" size = 'mini'  @click="bianji(item.row.id)">编辑</el-button>
             <el-button type="danger" size = 'mini' @click="del(item.row.id)" >删除</el-button>

             </div>
         </template>

      </el-table-column>

    </el-table>
 </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {roledelete} from '../../util/axios/index'
export default {
 data() {
 return {
 
 };
 },

 mounted() {
     this.getroleListAction()
 },
 computed: {
     ...mapGetters({getrolelist:'role/getrolelist'})
 },
 methods: {

     bianji(id){

         
this.$emit('bianji',id)
     },
     del(id) {
      console.log(id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
         roledelete({ id }).then((res) => {
            console.log(res);
            this.getroleListAction()
            this.$message.success(res.data.msg);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
     ...mapActions({getroleListAction:'role/getroleListAction'})
 },
};
</script>

<style lang="" scoped>

</style>

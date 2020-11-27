<template>
 <div>
 <el-table :data="catelist" style="width: 100%" row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }">
      <el-table-column prop="id" label="分类编号" width="180"> </el-table-column>
      <el-table-column prop="catename" label="分类名称" width="180"> </el-table-column>
      <el-table-column  label="图片">
        <template slot-scope="item">
          <div >
            <img :src="$imgurl+item.row.img" alt="">
          </div>
        </template>
         </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column  label="操作">
           <template slot-scope="item">
             <div>
                   <el-button type="primary" size = 'mini' @click="bianji(item.row.id)">编辑</el-button>
             <el-button type="danger" size = 'mini' @click="del(item.row.id)" >删除</el-button>

             </div>
         </template>
           </el-table-column>
    </el-table>
 </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {catedelete} from '../../util/axios/index'
export default {
 data() {
 return {

 };
 },
 mounted() {
     this.getcatelist()
     
 },
 computed: {
   ...mapGetters({catelist:'cate/getlist'})
 },

 methods: {
   bianji(id){
this.$emit('bianji',id)
   },
     ...mapActions({ getcatelist:'cate/getcatelist'}),

    del(id) {
      console.log(id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
         catedelete({ id }).then((res) => {
            console.log(res);
            this.getcatelist();
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
 },
};
</script>

<style lang="" scoped>

</style>

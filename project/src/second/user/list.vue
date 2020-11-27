<template>
  <div>
    <el-table :data="userlist" style="width: 100%">
      <el-table-column prop="uid" label="用户编号" width="180"> </el-table-column>
      <el-table-column prop="username" label="用户名称" width="180"> </el-table-column>
      <el-table-column prop="roleid" label="所属角色"> </el-table-column>
      <el-table-column prop="status" label="状态"> </el-table-column>
      <el-table-column  label="操作">
           <template slot-scope="item">
             <div>
                   <el-button type="primary" size = 'mini' @click="bianji(item.row.uid)">编辑</el-button>
             <el-button type="danger" size = 'mini' @click="del(item.row.uid)">删除</el-button>

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
import {userdelete} from '../../util/axios/index'
export default {
  data() {
    return {
      
    };
  },
  mounted() {
      this.getuserlist()
      this.usercount()
  },
  computed: {
      ...mapGetters({
        userlist:'user/getlist',
        getcount:'user/getcount',
        getsize:'user/getsize'
        })
  },
methods: {
  bianji(x){
    console.log(1);
this.$emit('bianji',x)
  },
  change(e){
console.log(e);
this.changepage(e)
  },
   
    ...mapActions({
      getuserlist:'user/getuserlist',
       usercount:'user/getusercount',
       changepage:'user/changepage'
      }),
del(uid){
 this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
        userdelete({ uid }).then((res) => {
            console.log(res);
            this.getuserlist()
            this.$message.success(res.data.msg);
            //  this.getuserlist()
      this.usercount()
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

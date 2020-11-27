<template>
 <div>
<el-dialog :title="isshow.bian?'编辑':'管理员'" :visible.sync="isshow.show"  :before-close="qvxiao">
  <el-form :model="form">

   <el-form-item  prop="roleid" label="所属角色" :label-width="formLabelWidth">
          <el-select v-model="form.roleid" placeholder="请选择">
              
            <el-option
             v-for="item in rolelist"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>


    <el-form-item label="用户名称" :label-width="formLabelWidth">
      <el-input v-model="form.username" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>

     <el-form-item label="状态" :label-width="formLabelWidth">
         <el-switch
  v-model="form.status"
  active-color="#13ce66"
  inactive-color="#ff4949"
    :active-value='1'
    :inactive-value='2'>
  
</el-switch>
        </el-form-item>
   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="qvxiao">取 消</el-button>
    <el-button v-if="!isshow.bian" type="primary" @click = 'add'>添 加</el-button>
    <el-button v-if="isshow.bian" type="primary" @click = 'bianjilist'>确 定</el-button>
  </div>
</el-dialog>
 </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex' 
import {useradd,userinfo,useredit} from '../../util/axios/index'
export default {
 data() {
 return {
     formLabelWidth:'123',
     
form:{
    roleid:'',
    username:'',
    password:'',
    status:1
}
 };
 },
 computed: {
     ...mapGetters({
         rolelist:'role/getrolelist',
         userlist:'user/getlist',
          getcount:'user/getcount',
        getsize:'user/getsize'

         })


 },
 props:['isshow'],
 mounted() {
     this.getroleListAction()
    
    
 },
 methods: {
   
getone(uid){
userinfo({uid}).then(res=>{
  console.log(this.form);
  this.$message.success(res.data.msg)
  this.form = res.data.list
  this.form.uid = uid
  
})
},

bianjilist(){
  useredit(this.form).then(res=>{
     if(res.data.code==200){
        this.$message.success(res.data.msg)
      this.getuserlist()
      this.qvxiao()
      this.reset()
    }else{
         this.$message.success(res.data.msg)
    }
  })
},
   
      reset(){
this.form={
    
    roleid:'',
    username:'',
    password:'',
    status:1

}
    },
     add(){
useradd(this.form).then(res=>{
    console.log(res);
    if(res.data.code==200){
        this.$message.success(res.data.msg)
      this.getuserlist()
this.usercount()
      this.qvxiao()
      this.reset()
    }else{
         this.$message.success(res.data.msg)
    }
})
     },
     ...mapActions({
         getroleListAction:'role/getroleListAction',
          getuserlist:'user/getuserlist',
           usercount:'user/getusercount',
       changepage:'user/changepage'
     }),
     qvxiao(){
         this.isshow.show = false
     }
 },
};
</script>

<style lang="" scoped>

</style>

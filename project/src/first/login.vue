<template>
 <div>
<h1>登录</h1>
<el-form  :model="loginform" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item  label="姓名" prop="username">
    <el-input clearable  v-model="loginform.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input show-password v-model="loginform.password"></el-input>
  </el-form-item>
 
  
 
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>

  </el-form-item>
</el-form>
 </div>
</template> 

<script>
import {userlogin} from '../util/axios/index'
export default {
 data() {
 return {
loginform: {
        username:'',
        password:''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           pasdword: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18个字符', trigger: 'blur' }
          ]
         
        }
 };
 },
 methods: {
   submitForm(formName){
     this.$refs[formName].validate(valid=>{
       if(valid){
         console.log(userlogin);
         console.log(this.loginform);
        userlogin(this.loginform).then(res=>{
        
           if(res.data.code==200){
         
  sessionStorage.setItem('userinfo',JSON.stringify(res.data.list))
             this.$message.success(res.data.msg)
            this.$router.push('/home')
           }else{
          this.$message.error(res.data.msg)
           }
         })
       }
     })
     
   }
 },
 
     
    
};
</script>

<style lang="" scoped>
.demo-ruleForm{
 width: 300px;
 position: absolute;
 left: 30%;
top: 30%;
}
h1{
  text-align: center;
}
</style>

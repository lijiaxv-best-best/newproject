<template>
  <div>
    <el-dialog :title="info.or?'菜单管理':'编辑'" :visible.sync="info.show" :before-close="qvxiao">
      <el-form :model="form">
 
        <el-form-item
          prop="title"
          label="菜单名称"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item label="上级菜单" :label-width="formLabelWidth">
          <el-select v-model="form.pid" placeholder="请选择" @change="changeselsect">
              <el-option label='顶级菜单' :value='0' ></el-option>
            <el-option
              v-for="item in menulist"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>


         <el-form-item label="菜单类型" :label-width="formLabelWidth">
         <el-radio v-model="form.type" label="1" disabled>目录</el-radio>
        <el-radio v-model="form.type" label="2" disabled>菜单</el-radio>
        </el-form-item>



         <el-form-item
          prop="title"
          label="菜单地址"
          :label-width="formLabelWidth"
          v-if = 'form.type==2'
        >
         
           <el-select v-model="form.url" placeholder="请选择" >
           
            <el-option
              v-for="item in second"
              :key="item.path"
              :label="item.name"
              :value="item.path"
            >
            </el-option>
          </el-select>
        </el-form-item>
           


            <el-form-item
          prop="title"
          label="菜单图标"
          :label-width="formLabelWidth"
          v-if = 'form.type==1'
        >
          <!-- <el-input v-model="form.icon" autocomplete="off"></el-input> -->
          <el-select v-model="form.icon" placeholder="请选择" >
           
            <el-option
              v-for="item in iconaddress"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
           


       <el-switch
  v-model="form.status"
  active-color="#13ce66"
  inactive-color="#ff4949"
    :active-value='1'
    :inactive-value='2'>
  
</el-switch>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qvxiao">取 消</el-button>
        <el-button v-if="info.or" type="primary" @click='addlist'
          >添 加</el-button
        >
        <el-button  v-if="!info.or" type="primary" @click='bianjilist'
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import  {setlist,getone,changemenu} from '../../util/axios/index'
import {mapActions,mapGetters} from 'vuex'

import {secondroute} from '../../router/index'



export default {

  
  data() {
    return {
      form: {
    
         title: "", //标题
        pid: 0, //上级分类编号 默认是0 是顶级
        icon: "", //图标
        type:'1' ,//类型1目录2菜单
        url: "", //菜单地址
        status: '1' //状态1正常2禁用
        
      },

    second:secondroute,
      
iconaddress:['el-icon-setting','el-icon-s-tools'],
      
      formLabelWidth: "",
      // show:true
    };
  },
    
  computed:{
    ...mapGetters({menulist:'menu/getlist'})
  },
  methods: {

look(id){
  getone({id}).then(res=>{
    console.log(res,'hsdfyu');
    this.form = res.data.list
    this.form.id = id
    
  })
},
bianjilist(){
  
changemenu(this.form).then(res=>{
  if(res.code==200){
    console.log(this);
   this.$message.success(res.data.msg)
   console.log(res);
  }else{
    this.$message.success(res.data.msg)
  }


   this.qvxiao()
   this.Addlist()

})
    
},

reset(){
  this.form= {
    
         title: "", //标题
        pid: 0, //上级分类编号 默认是0 是顶级
        icon: "", //图标
        type:'1' ,//类型1目录2菜单
        url: "", //菜单地址
        status: '1' //状态1正常2禁用
        
      }
},

changeselsect(){
  console.log(this.form.pid);
if(this.form.pid==0){
this.form.type='1'
}else{
  this.form.type='2'
}
// console.log(this.form.pid);
console.log(this.form.type);
},

    qvxiao() {
      this.$emit("qvxiao", false);

     this.reset()
    },

    ...mapActions({Addlist:'menu/getMenuListAction'}),
    addlist(){
setlist(this.form).then(res=>{
  if(res.code==200){
    console.log(this);
   this.$message.success(res.data.msg)
   console.log(res);
  }else{
    this.$message.success(res.data.msg)
  }


   this.qvxiao()
   this.Addlist()

})
    }
  },
  props: ["info"],
};
</script>

<style lang="" scoped>
</style>

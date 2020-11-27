<template>
  <div>
    <el-dialog :title="isshow.bian?'编辑':'角色添加'" :visible.sync="isshow.show" :before-close="qvxiao">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="formLabelWidth">
          
        </el-form-item>
         <el-tree
            :data="menulist"
            default-expand-all
            show-checkbox
            ref="tree"
            node-key="id"
            :props="{
              children: 'children',
              label: 'title',
            }"
          >
          </el-tree>
      
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

        <el-button type="primary" v-if="!isshow.bian"  @click="addlist"
          >添 加</el-button
        >
          
        <el-button v-if="isshow.bian" type="primary"  @click="bianji"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import {roleadd,rolelist,roleinfo,roleedit} from '../../util/axios/index'
export default {
  data() {
    return {
      // isshow:true,
      formLabelWidth: "",
      form: {
        rolename:'',
        menus:'',
        status:1
      },
    };
  },
  computed: {
    ...mapGetters({menulist:'menu/getlist',getrolelist:'role/getrolelist'})

  },
  methods: {


xiugai(id){
roleinfo({id}).then(res=>{
  this.form=res.data.list
  this.form.id = id
})
},
bianji(){
roleedit(this.form).then(res=>{
  if(res.data.code==200){
    this.$message.success(res.data.msg)
    this.getroleListAction()
    this.qvxiao()
  }
})
},
   ...mapActions({getroleListAction:'role/getroleListAction'}),

    addlist(){
       this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
console.log(this.form,'adsa');
roleadd(this.form).then(res=>{
this.getroleListAction()
  this.qvxiao()
})

    },
    qvxiao() {
      this.$emit("qvxiao", false);
    },
    ...mapActions({ getMenuListAction:'menu/getMenuListAction'})
  },
  mounted() {
    this. getMenuListAction()
  },
  props: ["isshow"],
};
</script>

<style lang="" scoped>
</style>

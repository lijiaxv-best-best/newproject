<template>
  <div>
    <el-dialog
      :title="isshow.bian ? '编辑' : '轮播图'"
      :visible.sync="isshow.show"
    >
      <el-form :model="form" :rules="rules" ref="formDialog">
        

        <el-form-item  prop=" title" label="标题">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片">
          <el-upload
            action="#"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :auto-upload="false"
            :on-change="onchange"
            :file-list="fileList"
            :limit="1"
            
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>

        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="qvxiao">取 消</el-button>
        <el-button v-if="!isshow.bian" type="primary" @click="add('formDialog')"
          >添 加</el-button
        >
        <el-button @click="tianjia" v-if="isshow.bian" type="primary" 
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { banneradd, bannerlist, bannerinfo, banneredit } from "../../util/axios/index";

export default {
  data() {
    return {
      form: {
       
        title: "",
        img: "",
        status: 1,
      },
      imgurl:'',
       rules: {
        title: [
          { required: true, message: "请输入轮播图标题", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
      },
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      iconaddress: [],
    };
  },
 
  methods: {
      getone(id){
          bannerinfo({id}).then(res=>{
              console.log(res);
              if(res.data.code==200){
                  this.form = res.data.list
                  this.form.id = id
                  //fileList是上传文件的一个数组
                  
                   this.fileList = this.form.img
            ? [{ url: `${this.$imgurl}${this.form.img}` }]
            : [];
              }
          })
      },
      tianjia(){
           let data = this.form
             let file = new FormData()
             for(let i in data){
                 file.append(i,data[i])
             }
             //添加那个方法差不多
           file.append('img',this.imgurl)
             this.imgurl = this.imgurl ? this.imgurl : this.form.img;
              file.append("img", this.imgurl);
              banneredit(file).then(res=>{
                  if(res.data.code==200){
                      this.$message.success(res.data.msg)
                      this.getlist()
                      this.recet()
                      this.qvxiao()
                  }
              })
      },
      qvxiao(){
          this.$emit('qvxiao')
      },
      ...mapActions({getlist:'banner/getlist'}),
    recet() {
      this.form = {
        title: "",
        img: "",
        status: 1,
      };
    },
    //x是上传文件的一些信息，raw是
    onchange(x) {
      console.log(x);
      this.imgurl = x.raw;
    },
    
   add(formName){
      this.$refs[formName].validate(valid=>{
          if(valid){
              console.log(this.form);
             let data = this.form
             let file = new FormData()
             for(let i in data){
                 file.append(i,data[i])
             }
           file.append('img',this.imgurl)
            banneradd(file).then(res=>{
                console.log(res);
                this.getlist()
                this.recet()
                this.file.img = ''
                this.qvxiao()
            })
          }
      })

     
   },

   

   
   
  

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {},

  },

  props: ["isshow"],
};
</script>

<style lang="" scoped>
</style>
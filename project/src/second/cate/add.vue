<template>
  <div>
    <el-dialog
      :title="isshow.bian ? '编辑' : '商品分类'"
      :visible.sync="isshow.show"
    >
      <el-form :model="form" :rules="rules" ref="formDialog">
        <el-form-item prop="pid" label="上级分类">
          <el-select v-model="form.pid" placeholder="请选择">
            <el-option :value="0" label="顶级分类"></el-option>
            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item  prop="catename" label="分类名称">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
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
            :on-exceed="onExceed"
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
        <el-button v-if="isshow.bian" type="primary" @click="change('formDialog')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { cateadd, catelist, cateinfo, cateedit } from "../../util/axios/index";

export default {
  data() {
    return {
      form: {
        pid: 0,
        catename: "",
        img: "",
        status: 1,
      },
       rules: {
        catename: [
          { required: true, message: "请输入分类名称", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
        pid: [{ required: true, message: "请选择上级分类", trigger: "blur" }]
      },
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      iconaddress: [],
    };
  },
  computed: {
    //获取菜单列表的值
    ...mapGetters({
      cateList: "cate/getlist",
    }),
  },
  imgurl: "",
  methods: {
    recet() {
      this.form = {
        pid: 0,
        catename: "",
        img: "",
        status: 1,
      };
    },
    ...mapActions({}),
    look(id) {
      cateinfo({ id }).then((res) => {
        console.log(res, "hsdfyu");

        this.form = res.data.list;
        this.form.id = id;
        this.fileList = [{ url: `${this.$imgurl}${this.form.img}` }];
      });
    },

    add(formName) {
     this.$refs[formName].validate(valid=>{//这是表单验证的方法 valid 是validate方法的回调参数 代表是否通过验证 如果为true则通过
       if(valid){
          let data = this.form;
      let file = new FormData();
      for (let i in data) {
        file.append(i, data[i]);
      }

      file.append("img", this.imgurl);
      console.log(file, "asdadasd");
      cateadd(file).then((res) => {
        if(res.data.code==200){
          this.$message.success(res.data.msg);
        this.getcatelist();
        this.qvxiao();
        this.recet()
        }
      });
       }
     })
    },
    change() {
      let data = this.form;
      let file = new FormData();
      for (let i in data) {
        file.append(i, data[i]);
      }
this.imgurl = this.imgurl ? this.imgurl : this.form.img;
      file.append("img", this.imgurl);
      cateedit(file).then((res) => {
        this.$message.success(res.data.msg);
        this.getcatelist();
        this.qvxiao();
        this.recet()
      });
    },
    onchange(x) {
      console.log(x);
      this.imgurl = x.raw;
    },
    ...mapActions({ getcatelist: "cate/getcatelist" }),

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {},
    onExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    qvxiao() {
      this.$emit("qvxiao");
    },
  },

  props: ["isshow"],
};
</script>

<style lang="" scoped>
</style>

<template>
  <div>
    <el-dialog
      :title="isshow.bian ? '编辑' : '商品规格'"
      :visible.sync="isshow.show"
      :before-close="qvxiao"
    >
      <el-form :model="form">
        <el-form-item
          prop="specsname"
          label="规格名称:"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          v-for="(item, index) in arrAttr"
          :key="index"
          label="规格属性:"
          :label-width="formLabelWidth"
        >
          <el-input v-model="item.value" autocomplete="off"></el-input>
          <el-button v-if="index == 0" @click="addarr" type="primary"
            >新增规格属性</el-button
          >
          <el-button v-else @click="del(item)" type="danger">删除</el-button>
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
        <el-button v-if="!isshow.bian" type="primary" @click="add"
          >添 加</el-button
        >
        <el-button v-if="isshow.bian" type="primary" @click="bianjilist1"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { specsadd, specsinfo, specsedit ,specslist} from "../../util/axios/index";
export default {
  data() {
    return {
      formLabelWidth: "123",

      form: {
        specsname: "", // 规格名称
        attrs: "", //规格属性
        status: 1,
      },
      arrAttr: [
        {
          value: "",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      specslist: " specs/getlist",
      getcount: " specs/getcount",
      getsize: " specs/getsize",
    }),
  },
  props: ["isshow"],
  mounted() {},
  methods: {
    addarr() {
      if (this.arrAttr.length <= 6) {
        this.arrAttr.push({
          value: "",
        });
      } else {
        this.$message.warning("最多只能添加6项！！！");
      }
    },

    del(item) {
      var index = this.arrAttr.indexOf(item);
      if (index !== -1) {
        this.arrAttr.splice(index, 1);
      }
    },

    getone(id) {
      console.log(id);
      specsinfo({ id }).then((res) => {
        console.log(1);
      let data = res.data.list[0]
      this.form = data
      data.attrs.map((item,index)=>{
        if(index==0){
          this.arrAttr[0].value = item
        }else{
          this.arrAttr.push({
            value:item
          })
        }
      })

      this.form.id = id
      });
    },
bianjilist1(){
  console.log(this.form);
  specsedit(this.form).then(res=>{
    console.log(res);
  })
},
    
    reset() {
      this.form = {
        specsname: "",
        attrs: "",
        status: 1,
      };
      this.arrAttr = [
        {
          value: "",
        },
      ];
    },
    add() {
      this.form.attrs = this.arrAttr.map(item=>item.value).join(',')
      console.log(this.form);
      specsadd(this.form).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.getspecslist();
          this.specscount();
          this.qvxiao();
          this.reset();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    ...mapActions({
      getspecslist: "specs/getspecslist",
      specscount: "specs/getspecscount",
      changepage: "specs/changepage",
    }),
    qvxiao() {
      this.isshow.show = false;
    },
  },
};
</script>

<style lang="" scoped>
</style>


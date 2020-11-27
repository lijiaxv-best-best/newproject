<template>
  <div>
    <el-dialog
      :title="addInfo.isAdd ? '添加秒杀管理' : '修改秒杀管理'"
      :visible.sync="addInfo.isShow"
      :before-close="cancel"
      center
    >
      <el-form :model="form" :rules="rules">
        <el-form-item
          prop="title"
          label="秒杀管理名称:"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动期限:" :label-width="formLabelWidth">
          <el-date-picker
            v-model="timer"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="一级分类">
          <el-select v-model="form.first_cateid" @change="changeCate()">
            <el-option value label="请选择" disabled></el-option>

            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="二级分类">
          <el-select v-model="form.second_cateid" @change="changeGoods()">
            <el-option value label="请选择" disabled></el-option>
            <el-option
              v-for="item in secondArr"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="商品">
          <el-select v-model="form.goodsid">
            <el-option value label="请选择" disabled></el-option>
            <el-option
              v-for="item in goodsArr"
              :key="item.id"
              :label="item.goodsname"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态:" :label-width="formLabelWidth">
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
        <el-button @click="cancel">取 消</el-button>
        <el-button v-if="addInfo.isAdd" @click="add" type="primary"
          >添 加</el-button
        >
        <el-button v-else @click="update" type="primary">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  goodslist,
  getSeckAdd,
  getSeckInfo,
  getSeckEdit,
} from "../../util/axios";
export default {
  data() {
    return {
      form: {
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
        status: 1,
      },
      timer: "",

      formLabelWidth: "120px",

      rules: {
        title: [
          { required: true, message: "请输入秒杀管理名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
      },

      secondArr: [],

      goodsArr: [],
    };
  },
  computed: {
    ...mapGetters({
      cateList: "cate/getlist",
    }),
  },
  mounted() {
    if (this.cateList.length == 0) {
      this.getcatelist();
    }
  },
  props: ["addInfo"],
  methods: {
    changeCate(n) {
      let index = this.cateList.findIndex(
        (item) => item.id == this.form.first_cateid
      );
      this.secondArr = this.cateList[index].children;

      if (!n) {
        this.form.second_cateid = "";
        this.form.goodsid = "";
      }
    },

    changeGoods(n) {
      goodslist({
        fid: this.form.first_cateid,
        sid: this.form.second_cateid,
      }).then((res) => {
        if (res.data.code == 200) {
          this.goodsArr = res.data.list;

          if (!n) {
            this.form.goodsid = "";
          }
        }
      });
    },

    reset() {
      this.form = {
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
        status: 1,
      };
      this.timer = "";
    },

    cancel() {
      this.$emit("cancel", false);

      this.reset();
    },

    ...mapActions({
      getcatelist: "cate/getcatelist",
      getSeckListAction: "seck/getSeckListAction",
    }),

    add() {
      this.form.begintime = new Date(this.timer[0]).getTime();
      this.form.endtime = new Date(this.timer[1]).getTime();
      console.log(this.form, "表单信息");

      getSeckAdd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);

          this.getSeckListAction();

          this.cancel();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },

    look(id) {
      getSeckInfo({ id }).then((res) => {
        console.log(res, "获取一条数据");
        if (res.data.code == 200) {
          this.form = res.data.list;
          this.form.id = id;
          this.timer = [
            new Date(parseFloat(this.form.begintime)),
            new Date(parseFloat(this.form.endtime)),
          ];

          this.changeCate(true);
          this.changeGoods(true);
        }
      });
    },

    update() {
      getSeckEdit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);

          this.getcatelist();

          this.cancel();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
  },
};
</script>

<style lang="" scoped></style>


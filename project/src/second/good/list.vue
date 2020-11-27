<template>
 <div>
<el-table :data="getlist" border style="width: 100%">
      <el-table-column prop="id" label="商品编号"> </el-table-column>
      <el-table-column prop="goodsname" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="商品价格"> </el-table-column>
      <el-table-column prop="market_price" label="市场价格"> </el-table-column>
      <el-table-column prop="" label="图片">
        <template slot-scope="item">
          <div>
            <img class="img" :src="$imgurl + item.row.img" alt="" />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="是否新品" width="70">
        <template slot-scope="item">
          <div>
            <el-tag v-if="item.row.isnew == 1" type="success">是</el-tag>
            <el-tag v-else type="danger">否</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="是否热卖" width="70">
        <template slot-scope="item">
          <div>
            <el-tag v-if="item.row.ishot == 1" type="success">是</el-tag>
            <el-tag v-else type="danger">否</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="70">
        <template slot-scope="item">
          <div>
            <el-tag v-if="item.row.status == 1" type="success">启用</el-tag>
            <el-tag v-else type="danger">禁用</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="item">
          <div>
            <el-button type="info" plain @click="bianji(item.row.id)"
              >编辑</el-button
            >
            <el-button @click="del(item.row.id)" type="danger" plain
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    
    <el-pagination
      :page-size="getsize"
      background
      layout="prev, pager, next"
      :total=" getcount"
      @current-change="currentChange"
    >
    <!-- 页码切换触发 -->
    </el-pagination>
 </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import {goodsdelete} from '../../util/axios/index'
export default {
 data() {
 return {

 };
 },
 mounted() {
     this. getgoodlist()
     this.getgoodcount()
 },
 methods: {
     ...mapActions({
        getgoodlist:'good/getgoodlist',
        getgoodcount:'good/getgoodcount',
        changepage:'good/changepage'
     }),
     //页码切换触发
currentChange(e) {
      console.log(e, "当前页");
      this.changepage(e);
    },
    del(id){
        goodsdelete({id}).then(res=>{
            if(res.data.code==200){
                this.$message.success(res.data.msg)
                this.getgoodlist()
                this.getgoodcount()
            }
        })
    },
    bianji(id){
        this.$emit('bianji',id)
    }
 },
 computed: {
     ...mapGetters({
         getlist:'good/getlist',
         getcount:'good/getcount',
         getsize:'good/getsize'
     }),


 },
};
</script>

<style lang="" scoped>
.img
{
    width: 100px;
    height: 100px;
}
</style>

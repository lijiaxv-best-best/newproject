<template>
  <div>
    <van-nav-bar :title="$route.name" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="24" />
      </template>
    </van-nav-bar>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img class="img" :src="$imgurl + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>

    <van-grid>
      <van-grid-item icon="photo-o" text="限时抢购" />
      <van-grid-item icon="photo-o" text="积分商城" />
      <van-grid-item icon="photo-o" text="联系我们" />
      <van-grid-item icon="photo-o" text="商品分类" to="/sort" />
    </van-grid>

    <van-tabs type="card">
      <van-tab title="发现新品">
        <van-card
          v-for="item in find"
          :key="item.id"
          num="2"
          tag="标签"
          :price="item.price"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="$imgurl + item.img"
          :origin-price="item.price"
      />
        <van-card
          v-for="item in find"
          :key="item.id"
          num="2"
          tag="标签"
          :price="item.price"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="$imgurl + item.img"
          :origin-price="item.price"
      />
      </van-tab>

      <van-tab title="热门推荐">
        <van-card
        v-for="item in hot"
        :key="item.id"
          num="2"
          tag="标签"
          :price="item.price"
          desc="描述信息"
          title="商品标题"
          :thumb="$imgurl + item.img"
          origin-price="10.00"
      /></van-tab>
      <van-tab title="所用商品">
        <van-card
          num="2"
          tag="标签"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          origin-price="10.00"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getbanner, getindexgoods } from "../util/index";
export default {
  data() {
    return {
      banner: [],
      hot: [],
      find: [],
      all: [],
    };
  },
  mounted() {
    this.get();
    this.getgoods();
  },
  methods: {
    get() {
      getbanner().then((res) => {
        this.banner = res.data.list;
      });
    },

    getgoods() {
      getindexgoods().then((res) => {
        console.log(res);
        this.hot = res.data.list[0].content;
        this.find = res.data.list[1].content;
        this.all = res.data.list[2].content;
        // console.log(this.find[1].goodsname);
      });
    },
  },
};
</script>

<style lang="" scoped>
.img {
  width: 100%;
  height: 5rem;
}
</style>

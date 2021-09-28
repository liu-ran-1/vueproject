<template>
  <div id="home">
    <div class="nav-bar">
      <nav-bar>
        <div slot="center" class="home-nav">购物街</div>
      </nav-bar>
    </div>
    <div class="home-title">
      <tr>
        <td>序号</td>
        <td>名称</td>
        <td>描述</td>
      </tr>
    </div>
    <div class="home-data">
      <tr v-for="item in result" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.desription }}</td>
      </tr>
    </div>
    <home-recommend-view :recommends="recommends" />
    <tab-control :titles="titles" @tabClick="tabClick" />
    <goods-list :goods="goods[currentType].list" />
  </div>
</template>

<script>
import { getHomeMultiData, getHomeGoods } from "network/home";
import GoodsList from "components/content/goods/GoodsList.vue";

const NavBar = () => import("components/common/navbar/Navbar");
const HomeRecommendView = () => import("./childComps/HomeRecommendView");
const TabControl = () => import("components/content/tabControl/TabControl");
export default {
  name: "Home",
  components: {
    NavBar,
    HomeRecommendView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      result: null,
      recommends: null,
      titles: null,
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("news");
    this.getHomeGoods("sell");
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 1:
          this.currentType = "pop";
          break;
        case 2:
          this.currentType = "news";
          break;
        case 3:
          this.currentType = "sell";
          break;
      }
    },

    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.result = res;
        console.log(this.result);
        this.recommends = res;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style>
.nav-bar {
  background-color: var(--color-tint);
  text-align-last: center;
}
.home-data {
  background-color: #fefefe;
}

.home-data tr {
  display: block;
  text-align: left;
}

.home-title tr {
  display: block;
  text-align: left;
  background-color: palevioletred;
}
.home-data tr td {
  display: inline-block;
  line-height: 30px;
  width: 30%;
  height: 30px;
}

.home-title tr td {
  display: inline-block;
  line-height: 30px;
  width: 30%;
  height: 30px;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
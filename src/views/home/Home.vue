<template>
  <div id="home">
    <nav-bar>
      <div slot="center" class="home-nav">购物街</div>
    </nav-bar>
    <div class="home-data">
      <tr v-for="item in result" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.desription }}</td>
      </tr>
    </div>
    <home-recommend-view :recommends="recommends" />
    <tab-control :titles="titles" />
    <goods-list :goods="goods['pop'].list" />
  </div>
</template>

<script>
import { getHomeMultiData, getHomeGoods } from "network/home";
import GoodsList from 'components/content/goods/GoodsList.vue';

const NavBar = () => import("components/common/navbar/Navbar");
const HomeRecommendView = () => import("./childComps/HomeRecommendView");
const TabControl = () => import("components/content/tabControl/TabControl");
export default {
  name: "Home",
  components: {
    NavBar,
    HomeRecommendView,
    TabControl,
    GoodsList
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
.home-nav {
  background-color: var(--color-tint);
}
.home-data {
  background-color: blue;
}

.home-data tr {
  background-color: aqua;
  text-align: center;
}
.home-data tr td {
  height: 30px;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
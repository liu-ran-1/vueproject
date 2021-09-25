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
    <home-recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import { getHomeMultiData } from "network/home";

const NavBar = () => import("components/common/navbar/Navbar");
const HomeRecommendView = () => import("./childComps/HomeRecommendView");
export default {
  name: "Home",
  components: {
    NavBar,
    HomeRecommendView
  },
  data() {
    return {
      result: null,
      recommends:null
    };
  },
  created() {
    //请求多个数据
    getHomeMultiData().then((res) => {
      this.result = res;
      console.log(this.result);
      this.recommends=res;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
}
.home-data{
  background-color: blue;
}

.home-data  tr{
  background-color: aqua;
  text-align: center;
}
.home-data tr td {
  height: 30px;
}
</style>
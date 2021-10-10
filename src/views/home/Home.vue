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

    <nav-bar>
      <div slot="center" class="home-nav">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <div class="home-data">
        <tr v-for="item in result" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.desription }}</td>
        </tr>
      </div>
      <home-recommend-view :recommends="recommends" />
      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl"
        :class="{ fixed: isTabFixed }"
      />
      <!-- <goods-list :goods="goods[currentType].list" /> -->
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />

  </div>
</template>

<script>
import { getHomeMultiData, getHomeGoods } from "network/home";
import GoodsList from "components/content/goods/GoodsList.vue";

import Scroll from "components/common/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";


const NavBar = () => import("components/common/navbar/NavBar");
const HomeRecommendView = () => import("./childComps/HomeRecommendView");
const TabControl = () => import("components/content/tabControl/TabControl");
import { debounce } from "../../common/utils";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeRecommendView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

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
      currentType: 1,
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFIxed: false,
      saveY:0
    };
  },
  created() {
    //请求多个数据
    // this.getHomeMultiData();
    // this.getHomeGoods("pop");
    // this.getHomeGoods("news");
    // this.getHomeGoods("sell");
  },
  mounted() {
    //图片完成的事件监听

    const refresh = debounce(this.$refs.scroll.refresh, 500);

    this.$bus.on("itemImageLoad", () => {
      refresh();
    });

    //获取tabcontrol的offsettop
    //所有的组件都有一个属性$el 用于获取组件中呃呃元素
    //这个需要在图片加载完成后在加载需要绑定 @load 然后子组件将其发出，父组件监听
    this.tabOffsetTop = this.$refs.TabControl.$el.offsetTop;
  },
  destroyed() {

  },
  //活跃时候
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY);
    this.$refs.scroll.refresh();
  },
  //不活跃时候
  deactivated(){
    shis.saveY = this.$refs.scroll.getScrollY();
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


    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      //决定tabcontrol是否吸顶 （position:fixed）
      this.isTabFIxed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      //进行刷新
      this.$refs.scroll.scroll.refresh();
    },
    debounce(func, delay) {
      let timer = null;

      return function (...args) {
        if (timer) {
          timer = clearTimeout();
        }
        timer = setTimeout(() => {
          funcrouter.apply(this, args);
        }, delay);
      };
    },

    /**
     * 下边是网络请求
     */
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
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>



<style scoped>
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
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
.content {
  height: 300px;
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
</style>
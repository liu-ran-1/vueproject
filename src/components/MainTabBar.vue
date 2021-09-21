<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/a.jpg" alt="" />
        <img slot="item-icon-active" src="../assets/img/tabbar/a1.jpeg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img slot="item-icon" src="../assets/img/tabbar/b.jpg" alt="" />
         <img slot="item-icon-active" src="../assets/img/tabbar/b1.jpeg" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../assets/img/tabbar/c.jpg" alt="" />
         <img slot="item-icon-active" src="../assets/img/tabbar/c1.jpeg" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../assets/img/tabbar/d.jpg" alt="" />
        <img slot="item-icon-active" src="../assets/img/tabbar/d1.jpeg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./common/TabBar";
import TabBarItem from "./content/TabBarItem";
export default {
    name:'MainTabBar',
    components:{
         TabBar,
    TabBarItem,
    }
}
</script>

<style>

</style>
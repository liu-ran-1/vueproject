<template>
  <div id="app">
    <!-- <keep-alive exclude="Detail"> -->
      <router-view />
    <!-- </keep-alive> -->
    <!-- <main-tab-bar /> -->
    <login />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import Login from 'views/login/Login.vue';
export default {
  name: "App",
  components: {
    MainTabBar,
    Login,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
::-webkit-scrollbar-thumb{
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px  rgba(0,0,0,.3);
  background-color:rgba(0, 0, 0, .1)
}
</style>

<template>
  <div id="app">

    <!-- <login-register/> -->
    <!-- <keep-alive exclude="Detail"> -->
      
      <router-view />
    <!-- </keep-alive> -->
    <!-- <main-top-tab-bar /> -->
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import Login from 'views/login/Login.vue';

export default {
  name: "App"
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

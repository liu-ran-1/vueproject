<template>
  <div id="app">
    <!-- <login-register/> -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-top-tab-bar />
  </div>
</template>

<script>
import MainTopTabBar from "components/content/mainTopTabBar/MainTopTabBar";
const LoginRegister = ()=>import('views/loginregister/LoginRegister')
export default {
  name: "App",
  components: {
    MainTopTabBar,
    LoginRegister
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>

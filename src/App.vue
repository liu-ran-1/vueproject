<template>
  <div id="app">
    <login-register/>
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
const LoginRegister = ()=>import('views/loginregister/LoginRegister')
export default {
  name: "App",
  components: {
    MainTabBar,
    LoginRegister
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>

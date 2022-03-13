<template>
  <div id="app">

    <!-- <login-register/> -->
    <!-- <keep-alive exclude="Detail"> -->
     <element-uI-test/>
      <!-- <router-view/> -->
    <!-- </keep-alive> -->
    <!-- <main-top-tab-bar /> -->
   
  </div>
</template>

<script>
import ElementUITest from './views/test/ElementUITest.vue'

export default {
  name: "App",
  components:{
    ElementUITest
  }
 
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

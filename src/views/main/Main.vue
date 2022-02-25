<template>
   <div class="main">
      <div class="title">
         <main-top-tab-bar :categoryList="categoryList" />
      </div>
      <div >
          <div class="left">ss</div>
          <div class="rigth">ss</div>
      </div>
  </div>
</template>

<script>
import MainTopTabBar from 'components/content/mainTopTabBar/MainTopTabBar.vue'
export default {
  components: { MainTopTabBar },
    name:'Main',
    data () {
        return {
            categoryList:[
                {
                    id:'1',
                    categoryName:'手机',
                    path:'/phone'
                },
                {
                    id:'2',
                    categoryName:'电脑',
                    path:'/computer'
                },
            ]
        }
    }
}
</script>

<style scoped>
.main {
    background-color: pink;
}
.title {
    /* font-size: 24px; */
    height: 5vh;
}
.left{
    width: 15%;
    height: 100vh;
    background-color: rebeccapurple;
}
.rigth{
    height: 100vh;
    background-color: blue;
}
main-top-tab-bar{
    width: 85%;
}
</style>
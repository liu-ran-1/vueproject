<template>
  <div id="detailNavBar">
    <nav-bar>
        <div slot="left" @click="backClick">
            <img src="~assets/img/tabbar/a.jpg" alt="" class="back">
        </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item" class="title-item" :class="{active:index=== currentIndex}"
        @click="titleClick(index)">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
const NavBar = () => import("components/common/navbar/NavBar");
export default {
  name: 'DetailNavBar',
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods:{
      titleClick(index){
          this.currentIndex = index;
          this.$emit('titleClick',index)
      },
      backClick(){
          this.$router.back();
      }
  }
  
};
</script>

<style scoped`>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active{
    color: red;
}
.back img{
margin-top: 10px;
}
</style>
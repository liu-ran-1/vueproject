<template>
  <top-tab-bar>
    <tab-bar-item v-for="item in categoryList" :key="item.id" :path="item.path">
      <div slot="item-text">{{ item.categoryName }}</div>

      <!-- <span>{{item.id}}--{{item.categoryName}}</span> -->
    </tab-bar-item>
  </top-tab-bar>
</template>

<script>
import TopTabBar from "components/common/tabbar/TopTabBar";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
    name:'MainTopTabBar',
    components:{
         TopTabBar,
    TabBarItem,
    },
  
      props:{
        categoryList:[]
    },
    methods:{
        getCategoryList(){
            console.log(this.categoryList);
        }
    }
}
</script>

<style scoped>

</style>
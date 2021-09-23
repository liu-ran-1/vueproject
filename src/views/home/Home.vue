<template>
  <div id="home">
  <nav-bar>
    <div slot="center" class="home-nav">购物街</div>
  </nav-bar>
  </div>

</template>

<script>
import {getHomeMultiData } from 'network/home/Home'
const NavBar =()=> import ( 'components/common/navbar/Navbar')
export default {
    name:'Home',
    components:{
      NavBar
    },
    data () {
      return {
        result:null,
        banners:[],
        recommends:[]
      }
    },
    created(){
      //请求多个数据
      getHomeMultiData().then(res=>{
        this.result = res;
        this.banners = res.data.banner;
        this.recommends = res.data.recommends;
      });
    }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
}
</style>
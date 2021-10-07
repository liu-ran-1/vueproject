<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--商品列表-->
    <cart-list/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CartList from './childComps/CartList.vue'

export default {
    name:'Cart',
     components: { NavBar ,CartList},
     computed:{
       ...mapGetters(['cartLength']
         
       )
      //  cartLength(){
      //    return this.$store.getters.cartLength;
      //  }
     }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}

</style>
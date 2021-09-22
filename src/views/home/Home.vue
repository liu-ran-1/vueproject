<template>
  <div id="home">
  <nav-bar>
    <div slot="center" class="home-nav">购物街</div>
  </nav-bar>
  </div>

</template>

<script>
const NavBar =()=> import ( 'components/common/navbar/Navbar')
export default {
    name:'Home',
    components:{
      NavBar
    }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
}
</style>
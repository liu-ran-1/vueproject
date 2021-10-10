<template>
    <div class="check-button" :class="{check:isActive}">
        <!-- <img src="~assets/img/cart/tick.svg" alt=""> -->
        <img src="~assets/img/tabbar/a1.jpeg" alt="">
    </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
      isChecked:{
          type: Boolean,
          default:false
      }
  }
};
</script>

<style scoped>
.check{
    border-color: red;
    background-color: red;
}
</style>
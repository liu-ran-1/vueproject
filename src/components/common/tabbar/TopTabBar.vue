<template>
  <div id="top-tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TopTabBar"
};
</script>

<style scoped>
#top-tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  width: 100%;
  top: 0px;
  box-shadow: 0px -3px 3px rgba(rgb(201, 10, 10), green, blue, 1);
}
</style>
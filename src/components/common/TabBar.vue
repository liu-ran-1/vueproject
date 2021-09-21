<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  width: 100%;
  bottom: 0px;
  box-shadow: 0px -3px 3px rgba(rgb(201, 10, 10), green, blue, 1);
}
</style>
<template>
  <div class="goods">
    <div v-for="item in goods" :key="item.id">
      <goods-list-item :goods-item="item" />
    </div>

    {{ goods }}
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods{
    display: flex;
    flex: wrap;
    justify-content: space-around;
}


</style>
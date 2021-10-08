<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button
      :is-checked="itemInfo.checked"
        @click.native="checkedChange"
        :value="itemInfo.checked"
       class="check-button"></check-button>
    </div>
    <div class="item-img">
      <img src="itemInfo.img" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ itemInfo.price }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
import CheckButton from "../../../components/common/checkButton/CheckButton.vue";
export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
      checkedChange(){
          this.itemInfo.checked = !this.itemInfo.checked
      }
  }
};
</script>

<style scoped>
.check-button{
    background-color: red;
    border-radius: 50%;
    border: 2px solid #aaa;
}
</style>
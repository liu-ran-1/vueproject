<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectedAll"
      @click.native="checkClick" />
      <span>全选</span>
      <div>合计：{{totalPrice}}</div>
      <div class="calculate">{{checkLength}}</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
import CheckButton from "../../../components/common/checkButton/CheckButton.vue";
import {mapGetters} from 'vuex'
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
          return this.cartList.filter(item=>{
              return item.checked;
          }).reduce((preValue,item)=>{
              return preValue + item.price*item.count;
          },0).toFixed(2)
      },
      checkLength(){
          return this.cartList.filter(item=>{
              return item.checked
          }).length;
      },
      isSelectedAll(){
        // return !(this.cartList.filter(item=>{
        //       return !item.checked
        //   }).length);
        if(this.cartList.length === 0 ){
          return false;
        }
        return !this.cartList.find(item=>!item.checked)
      },
      checkClick(){
        console.log('---');
        //如果是全部选中的，则变为false
        if(this.isSelectedAll){
          this.cartList.forEach(item=>item.checked = false)
        }else{
          //有部分或者全部不选中 
          this.cartList.forEach(item=>item.checked = true)
        }
      }
  }

};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
   background-color: #eee;
}
.check-content{
    display: flex;
    align-items: center;
}

.check-button{
    width: 22px;
    height: 22px;
    line-height: 22px;
}
.calculate{
    text-align: center;
}
</style>
<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick"></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <toast :message="message" :show="show"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import { Shop, getDetail } from "network/detail";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import { debounce } from "../../common/utils";
import{mapActions} from 'vuex'
import Toast from 'components/common/toast/Toast.vue';
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    Toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      shop: {},
      themeTopYs: [0, 1000, 2000, 3000],
      getThemeTopY: null,
      message:'',
      show:false
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(iid).then((res) => {
      const data = res.result;
      this.topImages = res.itemInfo.topImages;
      //创建shop对象
      this.shop = new Shop(data.shopInfo);

      //等到所有的数据都渲染了，会进行回调该参数
      //dom已经渲染了，但是图片没有加载出来呢，所以高度还是不对
      this.$nextTick(() => {
        //需要等到图片加载完在进行赋值
      });
    });
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    });
  },
  mounted() {},
  updated() {},
  methods: {
      ...mapActions(['addToCart']),
    //子组件发出的   
    titleClick(index) {
      console.log(index);
      //第三个为滚动到所需要的时间
      this.$refs.scroll.scrollTo(0, this.themeTopYs[index], 200);
    },
    //图片加载完的回调
    detailImageLoad() {
      this.newRefresh();
    },
    addToCart(){
        const product = {}
        product.iid = this.iid;
        // this.$store.commit('addCart', product)
        this.addToCart(product).then(res=>{
            console.log(res)
            // this.show = true;
            // this.message = res;
            // setTimeout(() => {
            //     this.show = false
            // }, 1500);
            this.$toast.show(res,2000)
        })
        // this.$store.dispatch('addCart', product).then(res=>{
        //     console.log(res)
        // })
    }
  },
};
</script>

<style scoped>
</style>
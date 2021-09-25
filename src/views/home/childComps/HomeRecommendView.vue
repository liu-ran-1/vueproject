<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.id" class="recommend-item">
          <a :href="item.id">{{item.name}}</a>
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommendView',
    props:{
        recommends:{
            type :Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend-item{
    width: 100%;
}
.recommend-item a{
    text-align: center;
    font-size: 12px;
    width: 300px;
}
.recommend-item span{
    width: 300px;
}
</style>
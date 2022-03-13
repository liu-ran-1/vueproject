<template>
  <div>

<el-row>
  <el-button type="primary" >主要按钮</el-button>
  <el-button type="success" >成功按钮</el-button>
  <el-button type="info" >信息按钮</el-button>
  <el-button type="warning" >警告按钮</el-button>
  <el-button type="danger" >危险按钮</el-button>
      <el-button type="primary" @click="changerouter(changeroute)">点击调转到图标页面</el-button> 
</el-row>
    <!-- <basic-bar></basic-bar> -->
   
  </div>
</template>

<script>
import BasicBar from './BasicBar.vue'
export default {
    name:'Setting',
    components:{
      BasicBar
    },
    data () {
      return {
        changeroute:'/basicBar'
      }
    },
     mounted(){
    // this.getEchartData()  
    },
    methods:{
      changerouter(route){
        console.log('route->'+route)
        this.$router.push(route)
      }
     
}
}
</script>

<style>

</style>
<template>
  <div>
     <el-button type="primary" @click="changeMapData()">地图</el-button>
      <div
        ref="chart1"
      ></div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
    name:'ownmap',
    data () {
        return {
             option : {
                 name:'省',
                 type:'map',
                 map:'china',
                 roam:false,
                 zoom:1.2,
   
  }
        }
    },
    mounted () {
        this.initecharts();
    },
    methods:{
        initecharts(){
            console.log('sss')
            console.log(this.option)
            echarts.registerMap(this.$refs.chart1, this.option,true)
            //  echarts.init(this.$refs.chart1).setOption(this.option, true);
        },
        changeMapData(){
            this.initecharts();
        }
    }
}
</script>

<style>

</style>
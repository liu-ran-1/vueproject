<template>
   <!-- <div > -->
    <div ref="chart1" style="width:100%;height:400px;text-align: center;"></div>
  <!-- </div> -->
</template>


<script>
export default {
  name: 'BasicBar',
  data () {
    return {
      option: {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'bar',
      stack: 'x'
    },
    {
      data: [20, 4, 3, 5, 10],
      type: 'bar',
      stack: 'x'
    }
  ]
}
    }
  },
  mounted () {
    var echarts = require('echarts')
    echarts.init(this.$refs.chart1).setOption(this.option, true)
  }
}
</script>
<style scoped>

</style>

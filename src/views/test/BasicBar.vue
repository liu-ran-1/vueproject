<template>
  <div>
 <div class="demo-input-suffix">
   姓名： 
    <el-input class="input"
    placeholder="请输入姓名"
    v-model="input1">
  </el-input>
   代号： 
  <el-input class="input"
    placeholder="请输入带号"
    v-model="input2">
  </el-input>
  <el-button type="success" @click="this.getData">查询</el-button>
</div>

    
    <div class="charts">
      <div
        ref="chart1"
        style="width: 50%; height: 300px; text-align: center"
      ></div>
      <div
        ref="chart2"
        style="width: 50%; height: 300px; text-align: center"
      ></div>
    </div>
    <div class="charts">
      <div
        ref="chart3"
        style="width: 50%; height: 300px; text-align: center"
      ></div>
      <div
        ref="chart4"
        style="width: 50%; height: 300px; text-align: center"
      ></div>
    </div>
  </div>
</template>


<script>
import { chartsData } from "network/test";
let echarts = require("echarts");
export default {
  name: "BasicBar",
  data() {
    return {
      input1:'',
      input2:'',
       param1: '',
      param: {},
      result: null,
      option: {
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            data: [],
            type: "bar",
            stack: "x",
          },
          {
            data: [],
            type: "bar",
            stack: "x",
          },
        ],
  tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
      },
      option2: {
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            data: [],
            type: "line",
            stack: "x",
          },
          {
            data: [],
            type: "line",
            stack: "x",
          },
        ],
         tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
      },
       option3: {
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            data: [],
            type: "line",
            stack: "x",
          },
          {
            data: [],
            type: "line",
            stack: "x",
          },
        ],
         tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
      },
       option4: {
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [
          {
            data: [],
            type: "bar",
            stack: "x",
          },
          {
            data: [],
            type: "bar",
            stack: "x",
          },
        ],
         tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // this.param = { input1:this.input1, input2:this.input2 };
      this.param.input1=this.input1;
      this.param.input2=this.input2;
      chartsData("/chartsData", this.param).then((res) => {
        // this.option = res.obj;
        this.option.series[0].data = res.obj.series[0];
        this.option.series[1].data = res.obj.series[1];
        this.option.xAxis.data = res.obj.xAxis;
         echarts.init(this.$refs.chart1).setOption(this.option, true);
      });
      chartsData("/chartsData", this.param).then((res) => {
        // this.option = res.obj;
        this.option2.series[0].data = res.obj.series[0];
        this.option2.series[1].data = res.obj.series[1];
        this.option2.xAxis.data = res.obj.xAxis;
         echarts.init(this.$refs.chart2).setOption(this.option2, true);
      });
       chartsData("/chartsData", this.param).then((res) => {
        // this.option = res.obj;
        this.option3.series[0].data = res.obj.series[0];
        this.option3.series[1].data = res.obj.series[1];
        this.option3.xAxis.data = res.obj.xAxis;
        echarts.init(this.$refs.chart3).setOption(this.option3, true);
      });
       chartsData("/chartsData", this.param).then((res) => {
        // this.option = res.obj;
        this.option4.series[0].data = res.obj.series[0];
        this.option4.series[1].data = res.obj.series[1];
        this.option4.xAxis.data = res.obj.xAxis;
      echarts.init(this.$refs.chart4).setOption(this.option4, true);
      });
    },
  },
};
</script>
<style scoped>
.charts {
  display: flex;
  width: 1000px;
}
el-input{
  display: flex;
}
.input{
  width: 300px;
}
</style>

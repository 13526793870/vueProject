<!-- 图表信息 -->
<template>
  <div id="echart" ref="chart">
    <div class="filter-charts">
      <el-switch
        v-model="isBar"
        active-text="bar"
        inactive-text="line"
        active-color="#13ce66"
        inactive-color="#ff4949"
      ></el-switch>
      <el-button
        @click="toggleType"
        style="background:#409eff;color:#fff;border-color:#409eff;margin-left:40px;"
      >点我</el-button>
    </div>
    <br />
    <br />
    <div class="echart-box">
      <div class="chart" id="echartOne" style="height:400px;" ref="echartOne"></div>
      <div class="chart" id="echartTwo" style="height:400px;" ref="echartTwo"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "echarts",
  data() {
    return {
      option1: {
        title: {
          text: ""
        },
        tooltip: {},
        legend: {
          data: ["2019", "2020"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
        },
        yAxis: {},
        series: [
          {
            name: "2019",
            type: "bar",
            data: [],
            label: { show: true, position: "top" },
            color: "#00B5FF"
          },
          {
            name: "2020",
            type: "bar",
            data: [],
            label: { show: true, position: "top" },
            color: "#ff4949"
          }
        ]
      },
      option2: {
        title: {
          text: ""
        },
        tooltip: {},
        legend: {
          data: ["2019", "2020"]
        },
        xAxis: {
          data: ["靴子", "童鞋", "帽子", "抱枕", "手套"]
        },
        yAxis: {},
        series: [
          {
            name: "2019",
            type: "bar",
            data: [],
            label: { show: true, position: "top" },
            color: "#00B5FF"
          },
          {
            name: "2020",
            type: "bar",
            data: [],
            label: { show: true, position: "top" },
            color: "#ff4949"
          }
        ]
      },
      isBar: true
    };
  },
  components: {},
  methods: {
    initCharts() {
      let echartOne = echarts.init(this.$refs.echartOne);
      let echartTwo = echarts.init(this.$refs.echartTwo);
      echartOne.setOption(this.option1);
      echartTwo.setOption(this.option2);
    },
    toggleType() {
      console.log(this.isBar);
      if (this.isBar) {
        this.option2.series.forEach(serie => {
          serie.type = "bar";
        });
        this.option1.series.forEach(serie => {
          serie.type = "bar";
        });
      } else {
        this.option2.series.forEach(serie => {
          serie.type = "line";
        });
        this.option1.series.forEach(serie => {
          serie.type = "line";
        });
      }
      this.initCharts();
    }
  },
  created() {},
  mounted() {
    this.$axios
      .get("http://localhost:3000/optionDatas")
      .then(res => {
        for (var i = 0; i < res.data.series1.length; i++) {
          this.option1.series[i].data = res.data.series1[i].data;
          this.initCharts();
        }
        for (var i = 0; i < res.data.series2.length; i++) {
          this.option2.series[i].data = res.data.series2[i].data;
          this.initCharts();
        }
      })
      .catch(res => {
        this.initCharts();
      });
  }
};
</script>
<style scoped>
.echart-box {
  display: flex;
}
.chart {
  /* width: 50%; */
  flex: 1;
}
</style>
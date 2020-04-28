// 右下图
// 1. 初始化实例
let cov_righttop_chart = echarts.init(document.querySelector(".bar .chart"));

// 2. 指定配置和数据
let right_top_option = {
  color: ['#3398DB'],
  title: {
    text: '非湖北地区城市确诊TOP5',
    textStyle: {
      color: '#fff',
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: "rgba(255,255,255,1)",
        fontSize: "12"
      },
      // x 轴线条样式
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,1)",
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: "rgba(255,255,255,1)",
        fontSize: "12"
      },
      // x 轴线条样式
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,1)",
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.3)",
        }
      }
    }
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      data: []
    }
  ]
};

// 3. 把配置给实例对象
cov_righttop_chart.setOption(right_top_option);

// 4. 自适应页面宽度
window.addEventListener("resize", function () {
  cov_righttop_chart.resize();
});
// 左下图
// 1. 初始化实例
let cov_leftbottom_chart = echarts.init(document.querySelector(".line2 .chart"));

// 2. 指定配置和数据
let left_bottom_option = {
  color: ['#61a0a8', '#c54d32'],
  title: {
    text: '全国新增趋势',
    textStyle: {
      color: '#fff',
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    right: '4%',
    top: '2',
    textStyle: {
      color: '#fff',
      fontSize: 10,
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
    // x 轴文字标签样式
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
  },
  yAxis: {
    type: 'value',
    // y 轴文字标签样式
    axisLabel: {
      color: "rgba(255,255,255,1)",
      fontSize: "12"
    },
    // y轴线条样式
    axisLine: {
      lineStyle: {
        color: "rgba(255,255,255,1)",
      }
    },
    // y 轴分隔线样式
    splitLine: {
      lineStyle: {
        color: "rgba(255,255,255,.3)"
      }
    }
  },
  series: [
    {
      name: '新增确诊',
      type: 'line',
      data: []
    },
    {
      name: '新增疑似',
      type: 'line',
      data: []
    }
  ]
};

// 3. 把配置给实例对象
cov_leftbottom_chart.setOption(left_bottom_option);

// 4. 自适应页面宽度
window.addEventListener("resize", function () {
  cov_leftbottom_chart.resize();
});
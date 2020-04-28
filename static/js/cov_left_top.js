// 左上图
// 1. 初始化实例
let cov_lefttop_chart = echarts.init(document.querySelector(".line1 .chart"));

// 2. 指定配置和数据
let left_top_option = {
  //color: ['#ba3431', '#2f4453', '#61a0a8', '#c57a60'],
  title: {
    text: '全国累计趋势',
    textStyle: {
      color: '#fff',
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '8%',
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
      fontSize: "12",
      formatter: function (value) {
        if (value >= 1000) {
          value = value / 1000 + 'k';
        }
        return value;
      }
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
      name: '累计确诊',
      type: 'line',
      symbol: "circle",  // 默认是空心圆（中间是白色的），改成实心圆
      itemStyle: {
        normal: {
          color: "#ba3431",  // 会设置点和线的颜色，所以需要下面定制 line
          borderColor: '#fff',
          borderWidth: '.5'
        }
      },
      data: [],
    },
    {
      name: '现有疑似',
      type: 'line',
      symbol: "circle",  // 默认是空心圆（中间是白色的），改成实心圆
      itemStyle: {
        normal: {
          color: "#2f4453",  // 会设置点和线的颜色，所以需要下面定制 line
          borderColor: '#fff',
          borderWidth: '.5'
        }
      },
      data: []
    },
    {
      name: '累计治愈',
      type: 'line',
      symbol: "circle",  // 默认是空心圆（中间是白色的），改成实心圆
      itemStyle: {
        normal: {
          color: "#61a0a8",  // 会设置点和线的颜色，所以需要下面定制 line
          borderColor: '#fff',
          borderWidth: '.5'
        }
      },
      data: []
    },
    {
      name: '累计死亡',
      type: 'line',
      symbol: "circle",  // 默认是空心圆（中间是白色的），改成实心圆
      itemStyle: {
        normal: {
          color: "#c57a60",  // 会设置点和线的颜色，所以需要下面定制 line
          borderColor: '#fff',
          borderWidth: '.5'
        }
      },
      data: []
    }
  ]
};


// 3. 把配置给实例对象
cov_lefttop_chart.setOption(left_top_option);

// 4. 自适应页面宽度
window.addEventListener("resize", function () {
  cov_lefttop_chart.resize();
});



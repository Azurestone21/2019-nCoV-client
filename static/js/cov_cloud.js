// 1. 初始化实例
let cov_cloud_chart = echarts.init(document.querySelector(".cloud .chart"));

// 2. 指定配置和数据
let keywords = [];

let cloud_option = {
  title: {
    text: '今日疫情热搜',
    textStyle: {
      color: '#fff'
    }
  },
  series: [{
    type: 'wordCloud',
    data: keywords,
    gridSize: 6,
    //size: ['9%', '99%'],
    sizeRange: [12, 50],
    // textRotation: [0, 45, 90, -45],
    rotationRange: [-45, 0, 45, 90],
    //shape: 'circle',
    // textPadding: 0,
    // autoSize: {
    //   enable: true,
    //   minSize: 6
    // },
    textStyle: {
      normal: {
        color: function () {
          return 'rgb(' +
              Math.round(Math.random() * 255) + ',' +
              Math.round(Math.random() * 255) + ',' +
              Math.round(Math.random() * 255)
        }
      },
      emphasis: {
        shadowBlur: 10,
        shadowColor: '#bfbfbf'
      }
    },
    // left: 'center',
    top: '15%',
    width: '85%',
    height: '85%',
    // right: null,
    // bottom: null,
  }]
};

// 3. 把配置给实例对象
cov_cloud_chart.setOption(cloud_option);

// 4. 自适应页面宽度
window.addEventListener("resize", function () {
  cov_cloud_chart.resize();
});
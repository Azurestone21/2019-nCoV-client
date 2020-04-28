
// 1. 实例化对象
let myMap = echarts.init(document.querySelector(".map .chart"), "dark");

let mapData = [
  {
    name: "南海诸岛",
    value: 0
  },
  {
    name: '北京',
    value: 54
  },
];
let map_option = {
  title: {
    x:'left'
  },
  tooltip: {
    trigger: 'item'
  },
  // 左侧导航
  visualMap: {
    show: true,
    x: '4%',
    y: 'bottom',
    textStyle: {
      fontSize: 8,
    },
    // showLabel: !0,
    // text: ["高", "低"],
    splitList: [
      //{start: 0, end: 0},
      {start: 1, end: 9},
      {start: 10, end: 99},
      {start: 100, end: 999},
      {start: 1000, end: 9999},
      {start: 10000}
    ],
    color: ["#8A3310", "#C64918", "#E55825", "#F2AD92", "#F9DCD1"]
  },

  // 配置属性
  series: [{
    name: "累计确诊病例",
    type: "map",
    mapType: 'china',
    roam: false, //拖动和缩放
    data: mapData,
    itemStyle: {
      normal: {
        borderWidth: .5,   // 区域边框宽度
        borderColor: '#009fe8',  //区域边框颜色
        areaColor: '#ffefd5',   //区域颜色
      },
      // 鼠标滑过相关设置
      emphasis: {
        borderWidth: .5,   // 区域边框宽度
        borderColor: '#4b0082',  //区域边框颜色
        areaColor: '#fff',   //区域颜色
      }
    },
    label: {
      normal: {
        show: true,
        fontSize: 8,
      },
      emphasis: {
        show: true,
        fontSize: 8,
      }
    },
  }]
};

// 3. 把配置和数据给实例对象
myMap.setOption(map_option);
/*// 4. 自适应
window.addEventListener("resize", function () {
  myChart.resize();
});*/





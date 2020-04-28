// 获取时间
function getTime() {
  $.ajax({
    url: "/time",
    // timeout: 10000,  // 超时时间
    success: function (data) {
      $(".showTime").html(data)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

// setInterval(getTime,1000);

// 获取疫情数据
function getCovCountData() {
  $.ajax({
    url: "/covCountData",
    success: function (data) {
      $(".no-num ul li").eq(0).text(data.confirm);
      $(".no-num ul li").eq(1).text(data.suspect);
      $(".no-num ul li").eq(2).text(data.heal);
      $(".no-num ul li").eq(3).text(data.dead);
    },
    error: function (err) {
      console.log(err)
    }
  })
}

// 获取地图数据
function getCovMapData() {
  $.ajax({
    url: "/covMapData",
    success: function (data) {
      map_option.series[0].data = data.data;
      myMap.setOption(map_option)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

// 获取全国疫情累计数据
function getCovTotalData() {
  $.ajax({
    url: "/covTotalData",
    success: function (data) {
      left_top_option.xAxis.data = data.day;
      left_top_option.series[0].data = data.confirm;
      left_top_option.series[1].data = data.suspect;
      left_top_option.series[2].data = data.heal;
      left_top_option.series[3].data = data.dead;
      cov_lefttop_chart.setOption(left_top_option)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

// 获取全国疫情新增数据
function getCovNewData() {
  $.ajax({
    url: "/covNewData",
    success: function (data) {
      left_bottom_option.xAxis.data = data.day;
      left_bottom_option.series[0].data = data.confirm_add;
      left_bottom_option.series[1].data = data.suspect_add;
      cov_leftbottom_chart.setOption(left_bottom_option)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

// 获取全国疫情严重地区数据
function getCovSeriousData() {
  $.ajax({
    url: "/covSeriousData",
    success: function (data) {
      right_top_option.xAxis[0].data = data.city;
      right_top_option.series[0].data = data.city_confirm;
      cov_righttop_chart.setOption(right_top_option)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

// 获取热搜云词数据
function getCovCloudData() {
  $.ajax({
    url: "/covCloudData",
    success: function (data) {
      cloud_option.series[0].data = data.keyWords;
      cov_cloud_chart.setOption(cloud_option)
    },
    error: function (err) {
      console.log(err)
    }
  })
}



getTime();
getCovCountData();
getCovMapData();
getCovTotalData();
getCovNewData();
getCovSeriousData();
getCovCloudData();

setInterval(getTime,1000);
setInterval(getCovCountData,100000);
setInterval(getCovMapData,100000);
setInterval(getCovTotalData,100000);
setInterval(getCovNewData,100000);
setInterval(getCovSeriousData,100000);
setInterval(getCovCloudData,100000);
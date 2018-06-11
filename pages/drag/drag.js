// pages/drag/drag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberArr: [],
    imgOrgin: [{
      id: "../../images/1.png"
    }, {
      id: "../../images/2.png"
    }, {
      id: "../../images/3.png"
    }, {
      id: "../../images/4.png"
    }, {
      id: "../../images/5.png"
    }, {
      id: "../../images/6.png"
    }, {
      id: "../../images/7.png"
    }, {
      id: "../../images/8.png"
    }, {
      id: "../../images/9.png"
    }, {
      id: "../../images/10.png"
    }, {
      id: "../../images/11.png"
    }, {
      id: "../../images/12.png"
    }, {
      id: "../../images/13.png"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = [];
    for (var i = 1; i < 78; i++) {
      arr.push(i)
    }
    this.setData({
      numberArr: arr
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getChange: function (e) {
    console.log(e)
    var number = e.currentTarget.id
    // 取整
    var get_num_floor = Math.ceil(number / 7);
    var get_num_int = number % 7 == 0 ? 7 : number % 7;
    console.log(get_num_floor + ":" + get_num_int)
    console.log("第" + get_num_floor + "行第几" + get_num_int + "列")
    //  获取 X Y 的 移动位置
    var x_distence = e.detail.x;
    var y_distence = e.detail.y;
    console.log("x轴移动距离" + x_distence + "y轴的移动距离" + y_distence)
    if (x_distence > 0) {
      // 向右 
      if (x_distence > 25) {
        console.log(x_distence)
      }
    } else {
      // 向左
    }
  }

})
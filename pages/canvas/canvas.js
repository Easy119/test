// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: "0px",
    y: "0px",
    start_x: '',
    start_y: '',
    screenHeight:'',
    screenWidth:'',
    hidden: true
  },
  start: function (e) {
    console.log(this.data.start_y)
    this.setData({
      hidden: false,
      start_x: this.data.start_x ? this.data.start_x : e.touches[0].pageX,
      start_y: this.data.start_y ? this.data.start_y : e.touches[0].pageY
    })
  },
  move: function (e) {
    var startX = this.data.start_x;
    var startY = this.data.start_y;
    // var run_x = e.touches[0].pageX > startX ? e.touches[0].pageX - startX : startX - e.touches[0].pageX;
    // var run_x = e.touches[0].pageX < 0 ? 0 : (e.touches[0].pageX > startX ? e.touches[0].pageX - startX :  e.touches[0].pageX)
    var run_x = e.touches[0].pageX < 0 ? 0 : ((e.touches[0].pageX - startX) > (this.data.screenWidth - 100) ? (this.data.screenWidth - 100) :(e.touches[0].pageX - startX ) );
    // var run_y = e.touches[0].pageY > startY ? e.touches[0].pageY - startX : startY - e.touches[0].pageY;
    
    var run_y = e.touches[0].pageY < 0 ? 0 : (e.touches[0].pageY<100?0:(e.touches[0].pageY - startY));
    
    // var run_y = e.touches[0].pageY > startX ? e.touches[0].pageY - startX : startY - e.touches[0].pageY;
    console.log(this.data.start_y + ":" + this.data.screenWidth + ":" + e.touches[0].pageY)
    this.setData({
      // x: run_x < 0 ? 0: (run_x > this.data.screenWidth - 50 ? this.data.screenWidth - 50 : run_x) + "px",
      x: run_x + "px",
      y: run_y + "px"
    })
  },
  end: function (e) {
    this.setData({
      hidden: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('red')
    ctx.fillRect(0, 0, 100, 100)
    ctx.draw()
    //  获取屏幕 宽度
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
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
  getImg: function () {
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 60,
      height: 60,
      destWidth: 120,
      destHeight: 120,
      canvasId: 'myCanvas',
      success: function (res) {
        console.log(res.tempFilePath)
      }
    })
  },
  // move: function (e) {
  //   //   获取 坐标
  //   console.log(e)
  //   var offent_x = e.touches[0].x;
  //   var offent_y = e.touches[0].y;
  //   e.target.offsetLeft = offent_x;
  //   e.target.offsetTop = offent_y;


  // }
})
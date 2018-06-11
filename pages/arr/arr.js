// pages/arr/arr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x_start: "",
    y_start: "",
    m_x: "",
    m_y: '',
    center_x: "150",
    center_y: "150",
    deg:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('my')
    ctx.setFillStyle('green')
    ctx.fillRect(100, 100, 100, 100)
    ctx.draw()
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
  start: function (e) {
    console.log(e)
    this.setData({
      x_start: e.touches[0].x,
      y_start: e.touches[0].y
    })

  },
  move: function (e) {
    // console.log(e)
    console.log(e)
    this.setData({
      m_x: e.touches[0].x,
      m_y: e.touches[0].y
    })
    this.getDeg()
  },
  getDeg: function () {
    // 初始点到 原点
    var a = Math.sqrt(Math.abs(this.data.x_start - this.data.center_x) * Math.abs(this.data.x_start - this.data.center_x) + Math.abs(this.data.y_start - this.data.center_y) * Math.abs(this.data.y_start - this.data.center_y));
    //  初始点和移动点
    var b = Math.sqrt(Math.abs(this.data.x_start - this.data.m_x) * Math.abs(this.data.x_start - this.data.m_x) + Math.abs(this.data.y_start - this.data.m_y) * Math.abs(this.data.y_start - this.data.m_y));
    //  移动点 到原点
    var c = Math.sqrt(Math.abs(this.data.center_x - this.data.m_x) * Math.abs(this.data.center_x - this.data.m_x) + Math.abs(this.data.center_y - this.data.m_y) * Math.abs(this.data.center_y - this.data.m_y));
    var cosVal = (a * a + c * c - b * b) / (2 * a * c);
    console.log(cosVal)
    console.log(Math.acos(cosVal) / (2 * Math.PI) * 360);
    this.setData({
      deg: (Math.acos(cosVal) / (2 * Math.PI) * 360 )+"deg"
    })
  }

})
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
    move_deg: "",
    item_deg: 0

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
    // console.log(e)
    this.setData({
      x_start: e.touches[0].x,
      y_start: e.touches[0].y
    })

  },
  move: function (e) {
    // console.log(e)
    // console.log(e)
    this.setData({
      m_x: e.touches[0].x,
      m_y: e.touches[0].y
    })
    // var obj_deg = this.getDeg(this.data.center_x, this.data.center_y, this.data.m_x, this.data.m_y);
    var move_deg = this.getDeg(this.data.center_x, this.data.center_y, this.data.m_x, this.data.m_y);
    var item_deg = this.data.item_deg ? this.data.item_deg + move_deg : move_deg;// 如果原有item属性 中 没有deg就用move_deg 如果有 就添加差值
    console.log(this.data.item_deg + "item");
    console.log(move_deg)
    // var move_deg = this.getDeg(this.data.center_x, this.data.center_y, this.data.m_x, this.data.m_y);
    this.setData({
      item_deg: item_deg
      // item_deg:item_deg + "deg"
    })
  },
  end: function (e) {

  },

  getDeg: function (center_x, center_y, m_x, m_y) {
    // 判断坐标的 正负值
    // 坐标差值 判断象限坐标
    var d_x = m_x - center_x;
    var d_y = m_y - center_y;
    //  余弦定理 略显麻烦 所以 还是用 正切比较简单
    var tan = Math.tan(d_x / d_y);
    var tan_deg = Math.atan(tan) / (2 * Math.PI) * 360;
    // if (d_x > 0 && d_y > 0){
    //   // 第四象限
    //   tan_deg = -tan_deg;  
    //   console.log("第四象限" + tan_deg )
    // }else if(d_x>0 && d_y <0){
    //   // 第一象限
    //   tan_deg = tan_deg;  
    //   console.log("第一象限" + tan_deg)

    // }else if(d_x<0 && d_y> 0){
    //   // 第三象限
    //   tan_deg = -(180 - tan_deg)  
    //   console.log("第三象限" + tan_deg)
    // }else{
    //   // 第二象限
    //   tan_deg = 180 - tan_deg;  
    //   console.log("第二象限" + tan_deg)
    // }
    console.log(tan_deg)
    return tan_deg;



    // 初始点到 原点
    // var a = Math.sqrt(Math.abs(this.data.x_start - this.data.center_x) * Math.abs(this.data.x_start - this.data.center_x) + Math.abs(this.data.y_start - this.data.center_y) * Math.abs(this.data.y_start - this.data.center_y));
    // //  初始点和移动点
    // var b = Math.sqrt(Math.abs(this.data.x_start - this.data.m_x) * Math.abs(this.data.x_start - this.data.m_x) + Math.abs(this.data.y_start - this.data.m_y) * Math.abs(this.data.y_start - this.data.m_y));
    // //  移动点 到原点
    // var c = Math.sqrt(Math.abs(this.data.center_x - this.data.m_x) * Math.abs(this.data.center_x - this.data.m_x) + Math.abs(this.data.center_y - this.data.m_y) * Math.abs(this.data.center_y - this.data.m_y));
    // var cosVal = (a * a + c * c - b * b) / (2 * a * c);
    // console.log(cosVal)
    // console.log(Math.acos(cosVal) / (2 * Math.PI) * 360);
    // console.log(Math.acos(cosVal) / (2 * Math.PI) * 360)
    // this.setData({
    //   deg: -(Math.acos(cosVal) / (2 * Math.PI) * 360) + "deg"
    // })
  }

})
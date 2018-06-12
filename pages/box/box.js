// pages/box/box.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number_index: '',
    itemList: [{
      id: 1,
      image: '../../images/1.png',//图片地址  
      top: 100,//初始图片的位置   
      left: 100,
      x: 155, //初始圆心位置，可再downImg之后又宽高和初始的图片位置得出  
      y: 155,
      scale: 1,//缩放比例  1为不缩放  
      angle: 0,//旋转角度  
      active: false, //判定点击状态  
      _lx: "",
      _ly: "",
      _tx: "",
      _ty: "",
      tx: "",
      ty: "",
      rotate: 0
    }, {
      id: 2,
      image: '../../images/2.png',
      top: 50,
      left: 50,
      x: 155,
      y: 155,
      _lx: "",
      _ly: "",
      scale: 1,
      angle: 0,
      active: false,
      _tx:"",
      _ty:"",
      tx: "",
      ty: "",
      rotate:0
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var items = this.data.itemList

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
  // 初次点击的时间 判断是那个部分的点击事件
  start: function (e) {
    var _this = this;
    var items = _this.data.itemList;
    for (var i = 0; i < items.length; i++) {
      items[i].active = false;
      if (e.currentTarget.id == items[i].id) {
        _this.setData({
          number_index: i
        })
        items[i].active = true;
      }
    }
    var index = this.data.number_index;
    // 根据获取到的index 索引值 进行再data数组里面进行属性的操作；
    // 记录点击时的坐标值  
    items[index].lx = e.touches[0].clientX;
    items[index].ly = e.touches[0].clientY;
    // 修改后的属性 进行赋值
    this.setData({
      itemList: items
    })
    console.log(this.data.itemList)
  },
  //  操作 移动时的 坐标改变
  move: function (e) {
    var items = this.data.itemList;
    var index = this.data.number_index;
    //移动时的坐标值也写图片的属性里  
    items[index]._lx = e.touches[0].clientX;
    items[index]._ly = e.touches[0].clientY;
    // 根据移动的距离 修改 属性里面 top 和left 的布局
    //  整体移动的新坐标
    items[index].left += items[index]._lx - items[index].lx;
    items[index].top += items[index]._ly - items[index].ly;
    //   圆心坐标的新坐标
    items[index].x += items[index]._lx - items[index].lx;
    items[index].y += items[index]._ly - items[index].ly;
    //  重新赋值 
    items[index].lx = e.touches[0].clientX;
    items[index].ly = e.touches[0].clientY;
    this.setData({
      itemList: items
    })
  },
  colseStart: function (e) {
    var index = this.data.number_index;
    var items = this.data.itemList;
    console.log(items[index])
    //获取作为移动前角度的坐标  
    items[index].tx = e.touches[0].clientX;
    items[index].ty = e.touches[0].clientY;
    //移动前的角度  
    items[index].anglePre = this.countDeg(items[index].x, items[index].y, items[index].tx, items[index].ty)
    //获取图片半径  
    items[index].r = this.getDistancs(items[index].x, items[index].y, items[index].left, items[index].top)
    this.setData({
      itemList: items
    })
  },
  closeMove: function (e) {
    var index = this.data.number_index;
    var items = this.data.itemList;
    console.log(items[index])
    //记录移动后的位置  
    items[index]._tx = e.touches[0].clientX;
    items[index]._ty = e.touches[0].clientY;
    //移动的点到圆心的距离  
    items[index].disPtoO = this.getDistancs(items[index].x, items[index].y, items[index]._tx, items[index]._ty)
    items[index].scale = items[index].disPtoO / items[index].r; //手指滑动的点到圆心的距离与半径的比值作为图片的放大比例  
    items[index].oScale = 1 / items[index].scale;//图片放大响应的右下角按钮同比缩小  

    //移动后位置的角度  
    items[index].angleNext = this.countDeg(items[index].x, items[index].y, items[index]._tx, items[index]._ty)
    console.log(items[index].angleNext)
    //角度差  
    items[index].new_rotate = items[index].angleNext - items[index].anglePre;
    console.log(items[index].new_rotate)
    

    //叠加的角度差  
    items[index].rotate += Number(items[index].new_rotate);
    items[index].angle = items[index].rotate; //赋值  
    console.log(items[index].rotate)
    console.log(items[index].angle)

    //用过移动后的坐标赋值为移动前坐标  
    items[index].tx = e.touches[0].clientX;
    items[index].ty = e.touches[0].clientY;
    items[index].anglePre = this.countDeg(items[index].x, items[index].y, items[index].tx, items[index].ty)

    //赋值setData渲染  
    this.setData({
      itemList: items
    })
  },
  /*  
     *参数1和2为图片圆心坐标  
     *参数3和4为手点击的坐标  
     *返回值为手点击的坐标到圆心的角度  
     */
  countDeg: function (cx, cy, pointer_x, pointer_y) {
    var ox = pointer_x - cx;
    var oy = pointer_y - cy;
    var to = Math.abs(ox / oy);
    var angle = Math.atan(to) / (2 * Math.PI) * 360;//鼠标相对于旋转中心的角度  
    console.log(angle)
    if (ox < 0 && oy < 0)//相对在左上角，第四象限，js中坐标系是从左上角开始的，这里的象限是正常坐标系    
    {
      angle = -angle;
    } else if (ox <= 0 && oy >= 0)//左下角,3象限    
    {
      angle = -(180 - angle)
    } else if (ox > 0 && oy < 0)//右上角，1象限    
    {
      angle = angle;
    } else if (ox > 0 && oy > 0)//右下角，2象限    
    {
      angle = 180 - angle;
    }

    return angle;
  },
  getDistancs(cx, cy, pointer_x, pointer_y) {
    var ox = pointer_x - cx;
    var oy = pointer_y - cy;
    return Math.sqrt(
      ox * ox + oy * oy
    );
  }
})
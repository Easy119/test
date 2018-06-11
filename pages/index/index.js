//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // imgOrgin: [{
    //   id: "../../images/1.png"
    // }, {
    //   id: "../../images/2.png"
    // }, {
    //   id: "../../images/3.png"
    // }, {
    //   id: "../../images/4.png"
    // }, {
    //   id: "../../images/5.png"
    // }, {
    //   id: "../../images/6.png"
    // }, {
    //   id: "../../images/7.png"
    // }, {
    //   id: "../../images/8.png"
    // }, {
    //   id: "../../images/9.png"
    // }, {
    //   id: "../../images/10.png"
    // }, {
    //   id: "../../images/11.png"
    // }, {
    //   id: "../../images/12.png"
    // }, {
    //   id: "../../images/13.png"
    // }]
    imgOrgin: [{
      id: "../../images/11.png"
    }, {
      id: "../../images/12.png"
    }, {
      id: "../../images/13.png"
    }]
  },
  toDrag:function(){
    wx.navigateTo({
      url: '../drag/drag',
    })
  },
  toImages:function(){
  wx.navigateTo({
    url: '../canvas/canvas',
  })
  },
  toL:function(){
    wx.navigateTo({
      url: '../arr/arr',
    })
  }



})

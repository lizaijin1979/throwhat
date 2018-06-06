// pages/dataInquery/dataInquery.js

var config = require('../../config');

var app = getApp();
Page({
  data: {
    // text:"这是一个页�?  
    array: ["全部", "引体向上(个)", "读书（本）", "跑步（km）", "英语学习（小时）", "写作（篇）", "力量练习（次）", "健身房（次）"],
    Inquerydatearray: ["全部", "2018年1月", "2018年2月", "2018年3月", "2018年4月", "2018年5月", "2018年6月", "2018年7月", "2018年8月", "2018年9月", "2018年10月", "2018年11月", "2018年12月"],
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    item: "跑步（km）",
    datePicker: '2016-12-20',
    logged: false,
    userInfo: {},
    record:[],
  },
  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认�? 
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  confirm_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '查询成功'
    });
  },
  cancel_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '取消成功'
    });
  },
  //弹出提示�? 
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //查询日期选择
  bindInqueryDateChange: function (e) {
    this.setData({
      dateindex: e.detail.value
    })
  },
  onLoad: function (options) {
    // 页面初始�?options为页面跳转所带来的参�? 
    this.data.userInfo = wx.getStorageSync('userInfo');
    this.data.logged = wx.getStorageSync('logged');
  },
  onReady: function () {
    // 页面渲染完成  
  },
  onShow: function () {
    // 页面显示  
  },
  onHide: function () {
    // 页面隐藏  
  },
  onUnload: function () {
    // 页面关闭  
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;

    console.log(formData);
    console.log(that.data.userInfo.nickName);
    //console.log(that.data.userInfo.openId);
    wx.request({
      url: config.service.dataInqueryUrl,
      data: {
        item: formData.item,
        datePicker: formData.datePicker,
        nickName: that.data.userInfo.nickName,
        //openId: that.data.userInfo.openId,
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },

      success: function (res) {
        console.log(res.data);
        that.setData({
          record: res.data.record})
        that.modalTap();
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  formReset: function () {
    console.log('form发生了reset事件');
    this.modalTap2();
    this.data.record = [];
  }
})
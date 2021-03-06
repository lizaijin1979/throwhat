// pages/dataReport/dataReport.js

var config = require('../../config');
var util = require('../../utils/util.js');

var app = getApp();
Page({
  data: {
    // text:"这是一个页面"  
    itemarray: ["引体向上(个)", "读书（本）", "跑步（km）", "英语学习（小时）","写作（篇）","力量练习（次）","健身房（次）"],
    reportdatearray: ["2018年1月", "2018年2月", "2018年3月", "2018年4月", "2018年5月", "2018年6月", "2018年7月", "2018年8月", "2018年9月", "2018年10月", "2018年11月", "2018年12月"],
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '', 
    item: "跑步（km）",
    datePicker: '2016-12-20',
    itemNum: 0, 
    logged: false,
    userInfo:{},
    datetime:''
  },
  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认框  
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
      notice_str: '提交成功'
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
  //弹出提示框  
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
    console.log('itempicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      itemindex: e.detail.value
    })
  },
  //日期选择
  bindReportDateChange: function (e) {
    console.log('datepicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateindex: e.detail.value
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    //获取本地数据
    //this.data.userInfo = options.userInfo;
    this.data.userInfo = wx.getStorageSync('userInfo');
    this.data.logged = wx.getStorageSync('logged');
    this.data.datetime = util.formatTime(new Date());
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
    if (formData.item.length == 0 || formData.datePicker.lenght == 0 || formData.itemNum == 0) {
      wx.showModal({
        title: '错误',
        content: '项目名称、月份或者项目数量不能为空！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }

        }
      })
    }
    else {
    console.log(formData);
    console.log(that.data.userInfo.nickName);
    //console.log(that.data.userInfo.openId);
    console.log(that.data.datetime);

    wx.request({
      url: config.service.dataReportUrl,
      data: {
        item: formData.item,
        datePicker: formData.datePicker,
        itemNum: formData.itemNum,
        nickName: that.data.userInfo.nickName,
        //openId: that.data.userInfo.openId,
        datetime: that.data.datetime
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      
      success: function (res) {
        console.log(res.data)
        that.modalTap();
      }
    })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件');
    this.modalTap2();
  }
})
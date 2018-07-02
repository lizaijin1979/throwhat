// pages/me/me.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

var app = getApp();
Page({
  data: {
  userInfo: {},
  logged: false,
  takeSession: false,
  requestResult: ''
},

  // 用户登录示例
  login: function () {
    if (this.data.logged) return

    util.showBusy('正在登录')
    var that = this

    // 调用登录接口
    qcloud.login({
      success(result) {
        if (result) {
          util.showSuccess('登录成功');
          wx.setStorageSync('userInfo', result);
          wx.setStorageSync('logged', true);
          that.setData({
            userInfo: result,
            logged: true
          })
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              util.showSuccess('登录成功');
              //wx.setStorageSync('userInfo', result.data.data);
              //wx.setStorageSync('logged', true);
              that.setData({
                userInfo: result.data.data,
                logged: true
              })
            },
            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
            
          })
        }

      
      },

      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    //获取本地数据
    //this.data.userInfo = options.userInfo;
    this.data.userInfo = wx.getStorageSync('userInfo');
    this.data.logged = wx.getStorageSync('logged');
  },

  dataReport: function () {
    console.log('============='+this.data.userInfo)
    wx.navigateTo({
      url: '../dataReport/dataReport'
    })
  },
  dataInquery: function () {
    console.log('=============' + this.data.userInfo)
    wx.navigateTo({
      url: '../dataInquery/dataInquery'
    })
  },  
  hatSignup: function () {
    wx.navigateTo({
      url: '../hatSignup/hatSignup',
    })
  },
  hatInquery: function () {
    wx.navigateTo({
      url: '../hatInquery/hatInquery',
    })
  },
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '翠屏“扔帽子”小程序',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  }  
})
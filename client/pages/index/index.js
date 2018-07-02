//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        canIUse:wx.canIUse('button.open-type.getUserInfo'),
        userInfo: {},
        logged: false,
    },

    onLoad: function() {
      wx.getSetting({
        success: function(res){
          if(res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: function(res){
                console.log(res.userInfo);
                wx.setStorageSync('userInfo', res.userInfo);
                wx.setStorageSync('logged', true);
              }
            })
          }
        }
      })
    },
    bindGetUserInfo: function(e){
      console.log(e.detail.userInfo);
      wx.setStorageSync('userInfo', e.detail.userInfo);
      wx.setStorageSync('logged', true);
      if(e.detail.userInfo){
        wx.navigateTo({
          url: '../me/me'
        })
      }
      else
      {

      }
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

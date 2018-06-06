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
    }
})

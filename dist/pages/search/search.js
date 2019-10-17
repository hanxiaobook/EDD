'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var types = ['可回收', '有害垃圾', '湿垃圾', '干垃圾'];
var typesen = ['RECYCLABLE WASTE', 'HAZARDOUS WASTE', 'HOUSEHOLDFOOD WASTE', 'RESIDUAL WASTE'];
var bcs = ['#3070BE', '#EB5940', '#A25B45', '#41413C'];

exports.default = Page({
    data: {
        current9: 0,
        show8_1: true,
        show8_2: false,
        name: 0,
        show2: false,
        show5: false,
        trashname: "苹果",
        type: -1,
        typezn: "湿垃圾",
        typeen: "xxxxxx",
        bc: "",
        wet_wastes: [],
        dry_wastes: [],
        recycle_wastes: [],
        danger_wastes: []
    },
    onShow: function onShow() {
        var that = this;
        wx.request({
            url: 'https://www.hcy-null.top/wet_wastes',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            success: function success(result) {
                console.log(result);
                that.setData({
                    wet_wastes: result.data
                });
            },
            fail: function fail() {},
            complete: function complete() {}
        });
        wx.request({
            url: 'https://www.hcy-null.top/dry_wastes',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            success: function success(result) {
                console.log(result);
                that.setData({
                    dry_wastes: result.data
                });
            },
            fail: function fail() {},
            complete: function complete() {}
        });
        wx.request({
            url: 'https://www.hcy-null.top/recycle_wastes',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            success: function success(result) {
                console.log(result);
                that.setData({
                    recycle_wastes: result.data
                });
            },
            fail: function fail() {},
            complete: function complete() {}
        });
        wx.request({
            url: 'https://www.hcy-null.top/danger_wastes',
            data: {},
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            success: function success(result) {
                console.log(result);
                that.setData({
                    danger_wastes: result.data
                });
            },
            fail: function fail() {},
            complete: function complete() {}
        });
    },
    handleChange9: function handleChange9(e) {
        var index = e.detail.index;
        this.setData({
            current9: index
        });
    },

    garbagename: function garbagename(e) {
        this.setData({
            name: e.detail.value
        });
    },
    chicksearchbutton: function chicksearchbutton(e) {
        var that = this;
        wx.showLoading({
            title: '查询中'
        });
        wx.request({
            url: 'https://www.hcy-null.top/tr_request', //接口地址
            data: {
                name: that.data.name
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: "POST",
            success: function success(res) {
                wx.hideLoading();
                console.log(res.data);
                if (res.data.tr_code == 200) {
                    var show = true;
                    console.log(show);
                    var now = res.data.result[0];
                    that.setData({
                        show5: show,
                        trashname: now.name,
                        typezn: types[now.type], //0为可回收 1为有害垃圾 2是湿垃圾 3是干垃圾
                        typeen: typesen[now.type],
                        bc: bcs[now.type],
                        type: now.type
                    });
                } else if (data.tr_code == 250) {
                    wx.showToast({
                        title: '查询失败',
                        icon: 'none',
                        duration: 2000
                    });
                } else {
                    wx.showToast({
                        title: '服务暂不可用',
                        icon: 'none',
                        duration: 2000
                    });
                }
            },
            fail: function fail() {
                wx.hideLoading();
                wx.showToast({
                    title: '网络错误',
                    icon: 'none',
                    duration: 2000
                });
            }
        });
    },
    handleShow5: function handleShow5() {
        this.setData({
            show5: false
        });
    }
});
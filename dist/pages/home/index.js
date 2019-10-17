'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var types = ['可回收', '有害垃圾', '湿垃圾', '干垃圾'];
var typesen = ['RECYCLABLE WASTE', 'HAZARDOUS WASTE', 'HOUSEHOLDFOOD WASTE', 'RESIDUAL WASTE'];
var bcs = ['#3070BE', '#EB5940', '#A25B45', '#41413C'];
exports.default = Page({
    data: {
        isShow: false,
        phoneWidth: 0,
        show5: false
    },
    onLoad: function onLoad() {
        this.setData({
            phoneWidth: wx.getSystemInfoSync().windowWidth
        });
        // console.log(this.data.phoneWidth)
    },
    chickCamera: function chickCamera() {
        var that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original'],
            sourceType: ['camera'],
            complete: function complete() {
                wx.showLoading({
                    title: '查询中'
                });
            },
            success: function success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                //TODO:发送图片路径到服务器
                console.log(res);
                wx.uploadFile({
                    url: 'https://www.hcy-null.top/ir_upload', //接口地址
                    filePath: tempFilePaths[0],
                    name: 'photo',
                    // formData: {
                    //     'user': 'test'
                    // },
                    success: function success(res) {
                        wx.hideLoading();
                        console.log(res);
                        var data = res.data;
                        data = JSON.parse(data);
                        console.log(data);
                        //do something
                        if (data.tr_code == 200) {
                            var show = true;
                            var now = data.result[0];
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
            }
        });
    },
    handleShow5: function handleShow5() {
        this.setData({
            show5: false
        });
    }
});
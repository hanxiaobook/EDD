"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {
        isShow: false,
        phoneWidth: 0
    },
    onLoad: function onLoad() {
        this.setData({
            phoneWidth: wx.getSystemInfoSync().windowWidth
        });
        // console.log(this.data.phoneWidth)
    },
    chickCamera: function chickCamera() {
        wx.chooseImage({
            count: 1,
            sizeType: ['original'],
            sourceType: ['camera'],
            success: function success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                //TODO:发送图片路径到服务器
                wx.uploadFile({
                    url: 'https://www.hcy-null.top/ir_upload', //接口地址
                    filePath: tempFilePaths[0],
                    name: 'photo',
                    // formData: {
                    //     'user': 'test'
                    // },
                    success: function success(res) {
                        var data = res.data;
                        //do something
                    }
                });
            }
        });
    }
});
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {
        isShow: false,
        imageWidth: 0
    },
    onLoad: function onLoad() {
        this.setData({
            imageWidth: wx.getSystemInfoSync().windowWidth
        });
        console.log(this.data.imageWidth);
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
            }
        });
    }
});
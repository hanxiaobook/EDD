'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {},
    ChickComment: function ChickComment() {
        wx.navigateTo({
            url: "../comment/comment"
        });
    },
    aboutus: function aboutus() {
        wx.navigateTo({
            url: '../aboutus/aboutus'
        });
    }
});
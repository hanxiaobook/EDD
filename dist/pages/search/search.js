'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {
        current9: 0,
        show8_1: true,
        show8_2: false
    },
    handleChange9: function handleChange9(e) {
        var index = e.detail.index;
        this.setData({
            current9: index
        });
    }
});
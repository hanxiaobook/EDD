'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {
        current9: 0,
        show8_1: true,
        show8_2: false,
        name: 0,
        show2: false,
        show5: false
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
        // wx.request({
        //     url: 'http://39.106.57.52', //接口地址
        //     data: {
        //         name: name
        //     },
        //     header: {
        //         'content-type': 'application/json' // 默认值
        //     },
        //     method: POST,
        //     success(res) {
        //         console.log(res.data)
        //     }
        // })


        // let show = e.currentTarget.dataset.show
        // this.setData({
        //     show2: show
        // })

        var show = e.currentTarget.dataset.show;
        this.setData({
            show5: show
        });
    },
    handleShow5: function handleShow5() {
        this.setData({
            show5: false
        });
    }
});
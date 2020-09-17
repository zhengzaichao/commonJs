/**
 * 公共share
 *
 */
import Vue from 'vue'
import wx from 'weixin-js-sdk'

export default {
  loadShare:function(title, desc, link, img, shu, success, cancel) {
    if (App.env == "Test") {
      title = title + "(测试)";
      desc += "(测试)";
    }
    var url = location.href.split("#")[0];

    Vue.http.post(("http://uygzacps.ydthlife.com/SERVER2/service.html?SERVERID=ydwx-000001"),
      {
        appCode: 'dist',
        appUrl: url
      }).then(
      (response) => {
        var data = JSON.parse(response.data);
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.data.appId, // 必填，公众号的唯一标识
          timestamp: data.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
          signature: data.data.signature,// 必填，签名，见附录1
          jsApiList: ['showOptionMenu', 'onMenuShareTimeline',
            'onMenuShareAppMessage', 'onMenuShareQQ',
            'onMenuShareWeibo', 'onMenuShareQZone']
          // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function () {
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          wx.showOptionMenu();

          // 分享到朋友圈
          wx.onMenuShareTimeline({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: img, // 分享图标
            shu:shu,      // 分享轨迹参数
            success: function () {
              // 用户确认分享后执行的回调函数
              $.post(("http://uygzacps.ydthlife.com/SERVERQAT/service.html?SERVERID=ydwx-000003"),
                {
                  shareWay:'2',        //分享方式分享到朋友圈是2，分享给朋友是1
                  title:title,             //分享标题
                  desc:desc,              //分享内容
                  sharelink:link,             //分享链接
                  pageId:shu.pageId,             //分享页面路由
                  IP:'127.0.0.1',             //分享机器的IP地址
                  appCode:'dist',             //分享公众号标记
                  shareid:shu.shareid,             //分享链接标识
                  sleve:'1',            //分享层级
                  suid:shu.suid,            //分享人的OpenID
                }).then(function (response) {
                }, function (response) {
              })
              if (success) {
                success();
              }
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
              if (cancel) {
                cancel();
              }
            }
          });

          // 分享给朋友
          wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: img, // 分享图标
            /*type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空*/
            shu:shu,      // 分享轨迹参数
            success: function (res) {
              console.log(shu);
              console.log(shu.shareid);
              console.log(shu.suid);
              // 用户确认分享后执行的回调函数
              $.post(("http://uygzacps.ydthlife.com/SERVER2/service.html?SERVERID=ydwx-000003"),
                {
                  shareWay:'1',        //分享方式分享到朋友圈是2，分享给朋友是1
                  title:title,             //分享标题
                  desc:desc,              //分享内容
                  sharelink:link,             //分享链接
                  pageId:shu.pageId,             //分享页面路由
                  IP:'127.0.0.1',             //分享机器的IP地址
                  appCode:'dist',             //分享公众号标记
                  shareid:shu.shareid,             //分享链接标识
                  sleve:'1',            //分享层级
                  suid:shu.suid,            //分享人的OpenID
                }).then(function (response) {
              }, function (response) {
              })
              if (success) {
                success();
              }
            },
            cancel: function (res) {
              // 用户取消分享后执行的回调函数
              if (cancel) {
                cancel();
              }
            }
          });

          // 分享到QQ
          wx.onMenuShareQQ({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: '', // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
              if (success) {
                success();
              }
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
              if (cancel) {
                cancel();
              }
            }
          });
        });
        wx.error(function (res) {
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
      },
      (response) => {
        console.log(response.data);
      }
    );
  }
}

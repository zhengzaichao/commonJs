/**
 * ����share
 *
 */
import Vue from 'vue'
import wx from 'weixin-js-sdk'

export default {
  loadShare:function(title, desc, link, img, shu, success, cancel) {
    if (App.env == "Test") {
      title = title + "(����)";
      desc += "(����)";
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
          debug: false, // ��������ģʽ,���õ�����api�ķ���ֵ���ڿͻ���alert��������Ҫ�鿴����Ĳ�����������pc�˴򿪣�������Ϣ��ͨ��log���������pc��ʱ�Ż��ӡ��
          appId: data.data.appId, // ������ںŵ�Ψһ��ʶ
          timestamp: data.data.timestamp, // �������ǩ����ʱ���
          nonceStr: data.data.nonceStr, // �������ǩ���������
          signature: data.data.signature,// ���ǩ��������¼1
          jsApiList: ['showOptionMenu', 'onMenuShareTimeline',
            'onMenuShareAppMessage', 'onMenuShareQQ',
            'onMenuShareWeibo', 'onMenuShareQZone']
          // �����Ҫʹ�õ�JS�ӿ��б�����JS�ӿ��б����¼2
        });
        wx.ready(function () {
          // config��Ϣ��֤���ִ��ready���������нӿڵ��ö�������config�ӿڻ�ý��֮��config��һ���ͻ��˵��첽���������������Ҫ��ҳ�����ʱ�͵�����ؽӿڣ��������ؽӿڷ���ready�����е�����ȷ����ȷִ�С������û�����ʱ�ŵ��õĽӿڣ������ֱ�ӵ��ã�����Ҫ����ready�����С�
          wx.showOptionMenu();

          // ��������Ȧ
          wx.onMenuShareTimeline({
            title: title, // �������
            desc: desc, // ��������
            link: link, // ��������
            imgUrl: img, // ����ͼ��
            shu:shu,      // ����켣����
            success: function () {
              // �û�ȷ�Ϸ����ִ�еĻص�����
              $.post(("http://uygzacps.ydthlife.com/SERVERQAT/service.html?SERVERID=ydwx-000003"),
                {
                  shareWay:'2',        //����ʽ��������Ȧ��2�������������1
                  title:title,             //�������
                  desc:desc,              //��������
                  sharelink:link,             //��������
                  pageId:shu.pageId,             //����ҳ��·��
                  IP:'127.0.0.1',             //���������IP��ַ
                  appCode:'dist',             //�����ںű��
                  shareid:shu.shareid,             //�������ӱ�ʶ
                  sleve:'1',            //����㼶
                  suid:shu.suid,            //�����˵�OpenID
                }).then(function (response) {
                }, function (response) {
              })
              if (success) {
                success();
              }
            },
            cancel: function () {
              // �û�ȡ�������ִ�еĻص�����
              if (cancel) {
                cancel();
              }
            }
          });

          // ���������
          wx.onMenuShareAppMessage({
            title: title, // �������
            desc: desc, // ��������
            link: link, // ��������
            imgUrl: img, // ����ͼ��
            /*type: '', // ��������,music��video��link������Ĭ��Ϊlink
            dataUrl: '', // ���type��music��video����Ҫ�ṩ�������ӣ�Ĭ��Ϊ��*/
            shu:shu,      // ����켣����
            success: function (res) {
              console.log(shu);
              console.log(shu.shareid);
              console.log(shu.suid);
              // �û�ȷ�Ϸ����ִ�еĻص�����
              $.post(("http://uygzacps.ydthlife.com/SERVER2/service.html?SERVERID=ydwx-000003"),
                {
                  shareWay:'1',        //����ʽ��������Ȧ��2�������������1
                  title:title,             //�������
                  desc:desc,              //��������
                  sharelink:link,             //��������
                  pageId:shu.pageId,             //����ҳ��·��
                  IP:'127.0.0.1',             //���������IP��ַ
                  appCode:'dist',             //�����ںű��
                  shareid:shu.shareid,             //�������ӱ�ʶ
                  sleve:'1',            //����㼶
                  suid:shu.suid,            //�����˵�OpenID
                }).then(function (response) {
              }, function (response) {
              })
              if (success) {
                success();
              }
            },
            cancel: function (res) {
              // �û�ȡ�������ִ�еĻص�����
              if (cancel) {
                cancel();
              }
            }
          });

          // ����QQ
          wx.onMenuShareQQ({
            title: title, // �������
            desc: desc, // ��������
            link: link, // ��������
            imgUrl: '', // ����ͼ��
            success: function () {
              // �û�ȷ�Ϸ����ִ�еĻص�����
              if (success) {
                success();
              }
            },
            cancel: function () {
              // �û�ȡ�������ִ�еĻص�����
              if (cancel) {
                cancel();
              }
            }
          });
        });
        wx.error(function (res) {
          // config��Ϣ��֤ʧ�ܻ�ִ��error��������ǩ�����ڵ�����֤ʧ�ܣ����������Ϣ���Դ�config��debugģʽ�鿴��Ҳ�����ڷ��ص�res�����в鿴������SPA�������������ǩ����
        });
      },
      (response) => {
        console.log(response.data);
      }
    );
  }
}

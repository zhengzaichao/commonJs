/*Toast提示框*/
function toastShowMsg(msg) {
    new Toast({context: $('body'), message: msg}).show();
}

/**
 * 模仿android里面的Toast效果，主要是用于在不打断程序正常执行的情况下显示提示数据
 * @param config
 * @return
 */
var Toast = function (config) {
    this.context = config.context == null ? $('body') : config.context;//上下文
    this.message = config.message;//显示内容
    this.time = config.time == null ? 3000 : config.time;//持续时间
    this.init();
};
var msgEntity;
Toast.prototype = {
    //初始化显示的位置内容等
    init: function () {
        $("#toastMessage").remove();
        //设置消息体
        var msgDIV = new Array();
        msgDIV.push('<div id="toastMessage">');
        msgDIV.push('<p style="margin: auto;max-width:60%;opacity:0.7;background: black;padding: 15px 20px;border-radius:0.6rem">' + this.message + '</p >');
        msgDIV.push('</div>');
        msgEntity = $(msgDIV.join('')).appendTo(this.context);
        //设置消息样式
        msgEntity.css({
            position: 'fixed', bottom: '50%', 'z-index': '99', 'text-align': 'center', width: '100%',
            color: 'white', 'font-size': '0.8rem'
        });
        msgEntity.hide();
    },
    //显示动画
    show: function () {
        msgEntity.fadeIn(this.time / 2);
        msgEntity.fadeOut(this.time / 2);
    }
};
console.log("Toast提示框");
toastShowMsg("也许放弃，才能忘记！");
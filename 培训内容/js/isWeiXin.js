/**
 * 判断当前是否在微信内置浏览器
 */
var isWeiXin = function() {
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
};
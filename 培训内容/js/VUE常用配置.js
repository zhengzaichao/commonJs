//如果Web服务器无法处理PUT, PATCH和DELETE这种REST风格的请求，你可以启用enulateHTTP现象。
// 启用该选项后，请求会以普通的POST方法发出，并且HTTP头信息的X-HTTP-Method-Override属性会设置为实际的HTTP方法。
Vue.http.options.emulateHTTP = true;
//如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项。
//启用该选项后，请求会以application/x-www-form-urlencoded作为MIME type，就像普通的HTML表单一样。
Vue.http.options.emulateJSON = true;
/**
 * 获取地址栏?后面参数的方法
 *
 */
 function getUrlKey(name){
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}
console.log("获取地址栏?后面参数的方法");
console.log(getUrlKey("name"));
console.log(getUrlKey("age"));

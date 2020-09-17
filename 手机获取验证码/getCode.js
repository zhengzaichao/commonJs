var code = $("#code");
code.attr("disabled","disabled");
setTimeout(function(){
    code.css("opacity","0.8");
},1000)
var time = 60;
var set=setInterval(function(){
    code.val("("+--time+")秒后重新获取");
	if(time===0){
        clearInterval(set);
        code.attr("disabled",false).val("重新获取验证码"); 
     }
}, 1000);
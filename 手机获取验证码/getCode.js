var code = $("#code");
code.attr("disabled","disabled");
setTimeout(function(){
    code.css("opacity","0.8");
},1000)
var time = 60;
var set=setInterval(function(){
    code.val("("+--time+")������»�ȡ");
	if(time===0){
        clearInterval(set);
        code.attr("disabled",false).val("���»�ȡ��֤��"); 
     }
}, 1000);
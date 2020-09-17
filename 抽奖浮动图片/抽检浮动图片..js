	/*抽奖图片*/
    var img=document.getElementById("ad");
    //设置div起始点坐标
    var x=200,y=450;
    //设置div行进速度
    var xSpeed=1,ySpeed=2;
    //设置图片移动
    var w=window.innerWidth-150,h=window.innerHeight-150;
    console.log(window.innerWidth,window.innerHeight,w,h)
    var flaot=setInterval(
    function floatdiv(){
    //比较图片是否到达边界，如查到达边界 改变方向;如未到达边界
		if(x>w||x<100) xSpeed= -xSpeed;
        if(y>h||y<350) ySpeed= -ySpeed;
		x+=xSpeed;
		y+=ySpeed;

     //设置坐标值，起始坐标+速度
		img.style.top=y+"px";
		img.style.left=x+"px";
	},20)
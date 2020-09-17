function analyzeIDCard(IDCard){
	var sexAndAge = {};
	//获取用户身份证号码
	var userCard = IDCard;
	//如果身份证号码为undefind则返回空
	if(!userCard){
		return sexAndAge;
	}
	//获取性别
	if(parseInt(userCard.substr(16,1)) % 2 == 1){
		sexAndAge.sex = '1（男）'
	}else{
		sexAndAge.sex = '0（女）'
	}
	//获取出生年月日
	//userCard.substring(6,10) + "-" + userCard.substring(10,12) + "-" + userCard.substring(12,14);
	var yearBirth = userCard.substring(6,10);
	var monthBirth = userCard.substring(10,12);
	var dayBirth = userCard.substring(12,14);
	//获取当前年月日并计算年龄
	var myDate = new Date();
	var monthNow = myDate.getMonth() + 1;
	var dayNow = myDate.getDay();
	var age = myDate.getFullYear() - yearBirth;
	if(monthNow < monthBirth || (monthNow == monthBirth && dayNow < dayBirth)){
		age--;
	}
	//得到出生日期
	sexAndAge.birthday = (yearBirth+'-'+monthBirth+'-'+dayBirth);
	//得到年龄
	sexAndAge.age = age;
	//返回性别和年龄
	return sexAndAge;
}
 
/*测试*/
var ID = analyzeIDCard('510612199004174732');
console.log(ID);
/*计算年龄*/
     function countAge(oldDate){
			var year = oldDate.substr(0,4);    //截取字符串从第0位开始截取4位,截取年份
			var month=oldDate.substr(5,2);     //截取字符串从第5位开始截取2位,截取月份
			var day=oldDate.substr(8,2);      //截取字符串从第8位开始截取2位，截取日
			var date = new Date;       //定义系统当前时间对象
			var currentYear = date.getFullYear(); //获取系统当前时间年份值
			var currentMonth=date.getMonth()+1;//获取系统当前时间月份值
			var currentDay=date.getDate();//获取系统当前时间日值
			var age=currentYear-year;

			if (currentMonth < month){
			  age--;
			}else{
			  if (currentMonth == month && currentDay < day){
				age--;
				if (currentMonth == 2)
				{ //如果同是2月，校验润年问题
				  if ((year % 4) == 0 && (currentYear % 4) != 0)
				  { //如果起始年是润年，终止年不是润年
					if (currentDay == 28)
					{ //如果终止年不是润年，且2月的最后一天28日，那么补一
					  age++;
					}
				  }
				}
			  }
			}
			return age;
		  }
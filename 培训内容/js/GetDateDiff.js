  /*计算两个时间的天数差值*/
  var GetDateDiff=function(startDate,endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g,"/"))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g,"/"))).getTime();
    var dates = Math.abs((startTime - endTime))/(1000*60*60*24);
    if(startTime<endTime){
      dates=-1;
    }
    return  dates;
  };
  console.log("计算两个时间的天数差值");
  console.log(GetDateDiff("2019-01-01","2018-01-01"));

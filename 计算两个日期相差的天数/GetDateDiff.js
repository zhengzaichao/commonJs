/*计算两个日期相差天数 newDate-oldDate*/
      GetDateDiff:function(startDate,endDate) {
        var startTime = new Date(Date.parse(startDate.replace(/-/g,"/"))).getTime();
        var endTime = new Date(Date.parse(endDate.replace(/-/g,"/"))).getTime();
        var dates = Math.abs((startTime - endTime))/(1000*60*60*24);
        if(startTime > endTime){
          dates=-1;
        }
        return  dates;
      }
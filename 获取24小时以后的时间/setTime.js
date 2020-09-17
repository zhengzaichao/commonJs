// 设置默认时间——先转化为毫秒数，加上 24 小时的毫秒数，再转化回来
  function setTime () {
    let t = new Date().getTime() + 24 * 60 * 60 * 1000;   //24小时 * 60分钟 * 60秒 * 1000
    let d = new Date(t);
    let theMonth = d.getMonth() + 1;
    let theDate = d.getDate();
    let theHours = d.getHours();
    let theMinutes = d.getMinutes();
    if (theMonth < 10) {
      theMonth = '0' + theMonth
    }
    if (theDate < 10) {
      theDate = '0' + theDate
    }
    if (theHours < 10) {
      theHours = '0' + theHours
    }
    if (theMinutes < 10) {
      theMinutes = '0' + theMinutes
    }
    let date = d.getFullYear().toString() + '-' + theMonth + '-' + theDate
    let time = theHours.toString() + ':' + theMinutes
    let Spare = date + ' ' + time
    console.log(date)
    console.log(time)
    console.log(Spare)
  }
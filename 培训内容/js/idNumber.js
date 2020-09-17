/*根据身份证号获取出生日期和性别*/
function idNumber(ele){
    var info={};
    var left=ele.length-12;
    var right=ele.length-4;
    var b=ele.slice(left,right);
    var year = b.substring(0,4);
    var month =b.substring(4,6);
    var date = b.substring(6,8);
    info.birthday=year+"-"+month+"-"+date;
    var sexValue =ele.substr(ele.length-2,1);
    if(sexValue % 2 == 0){             //偶数
        // gender = '1';                 //女
        info.gender = '女';
    }else{
        // gender = '0';                 //男
        info.gender = '男';
    }
    return info;
}
console.log("根据身份证号获取出生日期和性别")
console.log(idNumber("110101200105170158"));
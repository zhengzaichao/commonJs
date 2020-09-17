	//object转string,用于签名计算
      obj2str (args) {
        var keys = Object.keys(args)
        keys = keys.sort() //参数名ASCII码从小到大排序（字典序）；
        var newArgs = {}
        keys.forEach(function (key) {
          if (args[key] != "" && args[key] != 'undefined') {  //如果参数的值为空不参与签名；
            newArgs[key] = args[key]  //参数名区分大小写；
          }
          
        })
        var string = ''
        for (var k in newArgs) {
          string += '&' + k + '=' + newArgs[k]
        }
        string = string.substr(1)
        return string
      }
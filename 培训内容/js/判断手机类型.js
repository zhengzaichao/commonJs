//判断手机类型安卓/ios
        isAndroid_ios(){     
            var u = navigator.userAgent, app = navigator.appVersion; 		    
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 		   
            return isAndroid==true?true:false; 	
        }
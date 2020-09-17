//获取页面url参数
        getQueryVariable(variable){
	        var a = window.location.href; 
            var query = a.slice(a.indexOf('?') + 1, a.length)
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){
                    return decodeURIComponent(pair[1]);
                }
            }
            return(false);
        }
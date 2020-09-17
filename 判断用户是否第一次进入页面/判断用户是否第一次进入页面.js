//判断是否是第一次进入页面方法
      function isNewVisitor() {
       var flg = this.getCookie("visited");
          if (flg !="new") {
            console.log('您是第一次进入该页面！');
            this.shadowBox=true;
            this.shadowBox1=true;
            // 存到cookie
            this.setCookie("visited","new", 0.1);
          }
      },
      // 写字段到cookie
      function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires +";path=/";
      } ,
      // 读cookie
      function getCookie(cname) {
       var name = cname + "=";
       var ca = document.cookie.split(';');
       for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
      }
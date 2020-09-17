 function photoMask(phone) {
			if(phone == "" || phone == undefined) return "";
			if(phone.toString().length != 11) return "";
			var lphone = phone.toString().replace(/(\d{4})\d{3}(\d{4})/, '$1***$2'); //中间三位数字替换为***
			return lphone;
		}
encodeURI()编码的解码函数为 decodeURI()

encodeURIComponent()编码的解码函数为 decodeURIComponent()，

一定要注意的是，参数中正常的“+”依然被解码成原来的“+”，但是参数中的空格也会被解码成“+”，这就需要在解码前进行对空格的处理：decodeURIComponent(str.replace("/\+/g","%20")),这里str中原来正常的“+”经过编码之后会被转成“%2B”，正常的空格被转成“+”，而不是转成一个编码，所以解码的时候“%2B”自然被解码为“+”，但“+”却依然被解码为“+”，就出现了“+”编码解码后是“+”，空格编码再解码之后也是“+”的局面。
提示：
注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。

例如当传递的参数为某个http地址时，需要使用encodeURIComponent()编码，如下：

<a href="http://passport.baidu.com/?logout&aid=7&url='+encodeURIComponent("http://cang.baidu.com/bruce42")+'">退出</a>');

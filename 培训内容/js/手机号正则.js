<script>
var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;

function validateTel (tel){
      if(TEL_REGEXP.test(tel)){
        return true;
      }
      return false;
}
</script>
// 因为现在新增了166、198、199号段的手机号，所以正则表达式也要作相应改进：
/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
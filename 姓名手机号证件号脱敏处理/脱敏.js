	//手机号脱敏处理
    var vmoblie="";
    if ($scope.mobile.length > 10) {
        vmoblie = $scope.mobile.substring(0, 3) + "****" + $scope.mobile.substring($scope.mobile.length - 4, $scope.mobile.length);
    }
    else {
        vmoblie = "****" + $scope.mobile.substring($scope.mobile.length - 4, $scope.mobile.length);
    }
    $scope.mobile = vmoblie;
    
    //姓名脱敏处理
    $scope.customerName = '*'+$scope.customerName.substr(1);

    //证件号脱敏处理
    var cusnumber = $scope.IDNO;
    $scope.nameLength = cusnumber.length-7;
        $scope.xing='';
        for(var i=0;i<$scope.nameLength;i++){
            $scope.xing+="*";
        }
    $scope.IDNO =cusnumber.substring(0,3)+$scope.xing+cusnumber.substring(cusnumber.length-4,cusnumber.length)

    console.log($scope.mobile,$scope.customerName,$scope.IDNO)
/**
 * Created by mac on 15-5-29.
 */
app.controller('policyImitateCtrl', ['$scope','$http','$localStorage','NgTableParams',function($scope,$http,$localStorage,NgTableParams) {
    //console.log(NgTableParams);
    //console.log(23423424);
    var tableData={"dataTop":[],"dataLeft":[],"dataRight":[]};

    $scope.getTopData=function(){
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/policy/",
            dataType:"jsonp",
            data:$scope.formData,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){

                var $jsonData=eval(response);
                //var data1=$jsonData;
                tableData.dataTop=$jsonData;
                //console.log(data1);
                $scope.topTableParams = new NgTableParams({
                    page: 1,            // show first page
                    count: 3           // count per page
                }, {

                    total: tableData.dataTop.length, // length of data
                    getData: function($defer, params) {
                        $defer.resolve(tableData.dataTop.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
                $scope.$apply();
            }
        });
    };

    $scope.getLeftData=function(){
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/policy/",
            dataType:"jsonp",
            data:$scope.formData,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){

                var $jsonData=eval(response);
                //var data1=$jsonData;
                tableData.dataLeft=$jsonData;
                //console.log(data1);
                $scope.leftTableParams = new NgTableParams({
                    page: 1,            // show first page
                    count: 3           // count per page
                }, {

                    total: tableData.dataLeft.length, // length of data
                    getData: function($defer, params) {
                        $defer.resolve(tableData.dataLeft.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
                $scope.$apply();
            }
        });
    };
    $scope.getRightData=function(){
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/policy/",
            dataType:"jsonp",
            data:$scope.formData,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){

                var $jsonData=eval(response);
                //var data1=$jsonData;
                tableData.dataRight=$jsonData.slice(7);
                //console.log(data1);
                $scope.rightTableParams = new NgTableParams({
                    page: 1,            // show first page
                    count: 3           // count per page
                }, {

                    total: tableData.dataRight.length, // length of data
                    getData: function($defer, params) {
                        console.log(params);
                        $defer.resolve(tableData.dataRight.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
                $scope.$apply();
            }
        });
    };

    $scope.getTopData();
    $scope.getLeftData();
    $scope.getRightData();


    //setTimeout(function(){$scope.getData()},5000);






}]);

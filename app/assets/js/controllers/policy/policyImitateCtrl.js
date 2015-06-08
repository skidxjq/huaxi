/**
 * Created by mac on 15-5-29.
 */
app.controller('policyImitateCtrl', ['$scope','$http','$localStorage','NgTableParams',function($scope,$http,$localStorage,NgTableParams) {
    //console.log(NgTableParams);
    //console.log(23423424);
    var data = [

    ];
    $scope.getData=function(){
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
                var data=$jsonData;
                console.log(data);
                $scope.tableParams = new NgTableParams({
                    page: 1,            // show first page
                    count: 3           // count per page
                }, {

                    total: data.length, // length of data
                    getData: function($defer, params) {
                        $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });
                $scope.$apply();
            }
        });
    };


    $scope.getData();


    //setTimeout(function(){$scope.getData()},5000);






}]);

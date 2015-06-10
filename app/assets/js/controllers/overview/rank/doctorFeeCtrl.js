/**
 * Created by mac on 15-5-29.
 */
app.controller('doctorFeeCtrl', ['$scope','$http',function($scope,$http) {

    //根据模板生成echartsoption
    $scope.countEchartsOption={
        onRegisterApi: function (chartApi) {
            $scope.countEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.countEcharts=chartApi.getInstance();
        }
    };
    $scope.config.echarts.extend($scope.countEchartsOption,$scope.config.echarts.templateOptions.doctorBar);

  //根据模板生成echartsoption
    $scope.rateEchartsOption={
        onRegisterApi: function (chartApi) {
            $scope.rateEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.rateEcharts=chartApi.getInstance();
        }
    };
    $scope.config.echarts.extend($scope.rateEchartsOption,$scope.config.echarts.templateOptions.doctorBar);


}]);
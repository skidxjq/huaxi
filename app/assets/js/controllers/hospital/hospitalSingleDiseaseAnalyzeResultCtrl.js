/**
 * Created by mac on 15-5-29.
 */
//app.controller('hospitalSingleDiseaseAnalyzeResultCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {
app.controller('hospitalSingleDiseaseAnalyzeResultCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {

    $scope.queryData=$localStorage.singleHospitalformData;
    console.log($localStorage.singleHospitalformData);
    console.log($scope.queryData);
    $scope.leftechartsOption = {
        version: 1,
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show:false,
            data: ['RANK'],
            y: 'bottom'
        },
        toolbox: {
            show: false
        },
        grid: {
            x: 50,
            y: 10,
            x2: 40,
            y2: 55
        },
        padding: 0,
        calculable: true,
        yAxis: [
            {
                axisLabel: {
                    interval: 0
                },
                type: 'category',
                data: ['王伟伟', '李建平', '李丹', '王思敏', '孙承宗', '张咖喱', '王建', '庞涛', '欧阳晨', '赵光']
            }
        ],
        xAxis: [
            {
                type: 'value',
                splitArea: {show: true}
            }
        ],
        series: [

            {
                name: 'RANK',
                type: 'bar',
                itemStyle:{
                    normal:{
                        color:function(){
                            //return $scope.colorSets[$scope.$i++];
                            return $scope.colorSets[($scope.$i++)%12];

                        }
                    }
                },
                data: [20, 15.9, 14.0, 12.4, 11.7, 10.7, 9.6, 8.2, 7.7, 6.8, 6.0, 2.3]
            }
        ],
        onRegisterApi: function (chartApi) {
            $scope.leftechartsOptionApi = chartApi;
            $scope.leftechartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.leftecharts=chartApi.getInstance();
        }
    };
    $scope.rightechartsOption = {
        version: 1,
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show:false,
            data: ['RANK'],
            y: 'bottom'
        },
        toolbox: {
            show: false
        },
        grid: {
            x: 50,
            y: 10,
            x2: 10,
            y2: 55
        },
        padding: 0,
        calculable: true,
        xAxis: [
            {
                axisLabel: {
                    interval: 0
                },
                type: 'category',
                data: ['王伟伟', '李建平', '李丹', '王思敏', '孙承宗', '张咖喱', '王建', '庞涛', '欧阳晨', '赵光']
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitArea: {show: true}
            }
        ],
        series: [

            {
                name: 'RANK',
                type: 'bar',
                itemStyle:{
                    normal:{
                        color:function(){
                            //return $scope.colorSets[$scope.$i++];
                            return $scope.colorSets[($scope.$i++)%12];

                        }
                    }
                },
                data: [20, 15.9, 14.0, 12.4, 11.7, 10.7, 9.6, 8.2, 7.7, 6.8, 6.0, 2.3]
            }
        ],
        onRegisterApi: function (chartApi) {
            $scope.leftechartsOptionApi = chartApi;
            $scope.leftechartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.leftecharts=chartApi.getInstance();
        }
    };

}]);
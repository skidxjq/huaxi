/**
 * Created by mac on 15-5-29.
 */
app.controller('hospitalSingleDiseaseAnalyzeCtrl', ['$scope','$http',function($scope,$http) {

    console.log(666);
    $scope.getEcharts=function(){
        console.log("66666");
    }
    $scope.$i=0;
    $scope.colorSets=["#eee","red","pink","#7266ba","#fad733","green","#23b7e5","#27c24c","#dff0d8","#E0FFFF","#C0FF3E","#8B2500"];
    $scope.formData={
        "w1":"5",
        "w2":"5",
        "w3":"5",
        "w4":"5",
        "w5":"5",
        "w6":"5",
        "w7":"5"
    };

    $scope.chartProvinceOption = {
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
                            return $scope.colorSets[$scope.$i++];
                        }
                    }
                },
                data: [20, 15.9, 14.0, 12.4, 11.7, 10.7, 9.6, 8.2, 7.7, 6.8, 6.0, 2.3]
            }
        ],
        onRegisterApi: function (chartApi) {
            chartProvinceApi = chartApi;
        }
    };

}]);
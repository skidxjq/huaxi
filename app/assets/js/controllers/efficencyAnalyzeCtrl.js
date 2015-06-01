/**
 * Created by mac on 15-5-29.
 */
app.controller('efficencyAnalyzeCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {

    console.log(666);
    $scope.getEcharts=function(){
        console.log("66666");
    };
    $scope.colorSets=["#eee","red","pink","#7266ba","#fad733","green","#23b7e5","#27c24c","#dff0d8","#E0FFFF","#C0FF3E","#8B2500"];
    $scope.$i=0;

    $scope.formData={
        "w1":"5",
        "w2":"5",
        "w3":"5",
        "w4":"5",
        "w5":"5",
        "w6":"5",
        "w7":"5"
    };
    $scope.efficencyRankOption = {
        version: 1,
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['RANK'],
            show:false,
            y: 'bottom'
        },
        toolbox: {
            show: false
        },
        grid: {
            x: 150,
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
                data: ['华西医院', '四川省第一人民医院', '成都市第一人民医院', '成都市第三人民医院', '成都市第二人民医院', '铁路医院', '解放军452医院', '成都医学院附属医院', '363医院', '成都市第五人民医院']
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
                            //return $scope.colorSets[($scope.$i++)%12];
                            return $scope.colorSets[($scope.$i++)%12];
                        },
                        label:{
                            show:true,
                            position:"right"
                        }
                    }
                },
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRankOptionApi = chartApi;
            efficencyRankOptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };

    $scope.clickEvent=function($params){
        console.log($params);
        $localStorage.hospitalName=$params["name"];
        //$location.href="#/efficencyAnalyzeSingle";
        console.log($localStorage);
        //console.log($location);
        console.log(window.location);
        //window.location.href="http://localhost:63342/themeforest-8437259-angulr-bootstrap-admin-web-app-with-angularjs/angular-seed/app/index.html#/efficencyAnalyzeSingleCtrl";
        window.location.href="#/efficencyAnalyzeSingle";
    }

}]);
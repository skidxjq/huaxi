/**
 * Created by mac on 15-5-29.
 */
app.controller('efficencyAnalyzeCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {



    $scope.echartsOption={
        //legend
        //to do
    }
    $scope.getEcharts=function(){
        $.ajax({
            type:"GET",
            url:"http://localhost/skidxjq/php/service.php",
            dataType:"jsonp",
            data:$scope.formData,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){
                var $jsonData=eval(response);
                $scope.drawEcharts($jsonData);
            }
        });
    };
    //对响应的数据进行绘制
    $scope.drawEcharts=function($jsonData){
        $scope.efficencyRankOption.yAxis[0].data=$jsonData["axis"];
        $scope.efficencyRankOption.series[0].data=$jsonData["series"][0];
        window.onresize= $scope.echarts.resize;

        $scope.echarts.setOption($scope.efficencyRankOption,true);

    }
    $scope.colorSets=["#eee","red","pink","#7266ba","#fad733","green","#23b7e5","#27c24c","#dff0d8","#E0FFFF","#C0FF3E","#8B2500"];
    $scope.$i=0;

    $scope.formData={
        "hospitalType" : "0101",
        "diseaseType" : "C34.901",
        "startTime" : "2012",
        "endTime" : "2014",
        "village" : "true",
        "city" : "false",
        "limitNum" : "10",
        "w1" : "5",
        "w2" : "5",
        "w3" : "5",
        "w4" : "5",
        "w5" : "5",
        "w6" : "5",
        "w7" : "5"
    };
    $scope.efficencyRankOption = {
        version: 2,
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
                axisLabel : {

                    interval: 'auto',
                    textStyle : {
                        fontSize : 12
                    },
                    formatter: function(value){
                        var res='';
                        for(var i=0, l=value.length;i<l;i++){
                            res+=value[i];
                            if((i<(l-1)) && (value[i+1]=="（")){
                                res=res+"\n";//就是这里！！！

                                //每次都是把<br/>当成实际的字符串去处理而没起到换行的作用
                            }
                        }
                        return res;
                    }
                },

                type: 'category',
                data: ['华西医院', '四川省第一人民医院', '成都市第一人民医院', '成都市第三人民医院', '成都市第二人民医院', '铁路医院', '解放军452医院', '成都医学院附属医院', '363医院', '成都市第五人民医院']
                //data: ['华西医院', '四川省第一人民医院', '成都市第一人民医院', '成都市第三人民医院', '成都市第二人民医院', '铁路医院', '解放军452医院', '成都医学院附属医院', '363医院', '成都市第五人民医院']
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
                //data: []
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRankOptionApi = chartApi;
            efficencyRankOptionApi.registerBarClicked($scope,$scope.clickEvent);
            $scope.echarts=efficencyRankOptionApi.getInstance();
            //chartPro
        }
    };
    $scope.init=function(){
        $scope.efficencyRankOption.version++;
    }
    $scope.init();
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
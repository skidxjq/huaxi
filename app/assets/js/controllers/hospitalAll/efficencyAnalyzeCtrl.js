/**
 * Created by mac on 15-5-29.
 */
app.controller('efficencyAnalyzeCtrl', ['$scope','$http','$localStorage','$modal',function($scope,$http,$localStorage,$modal) {

    console.log("#####start");
    console.log($localStorage.allHospitalqueryData);
    $localStorage.allHospitalqueryData==undefined?
        $scope.formData={
            "hospitalType" : "0101",
            "startTime" : "2011",
            "endTime" : "2011",
            "village" : "false",
            "city" : "false",
            "limitNum" : "10",
            "w1" : "5",
            "w2" : "5",
            "w3" : "5",
            "w4" : "5",
            "w5" : "5",
            "w6" : "5",
            "w7" : "5"
        }:
        $scope.formData=$localStorage.allHospitalqueryData
    ;
    //$scope.formData=$localStorage.allHospitalqueryData;

    $scope.optionSubmit=function(){
        //$scope.openModal();
        $scope.formData.diseaseName=$("#diseaseName").find("option:selected").text();
        //更改title
        $scope.echartsTitle="四川"+$scope.formDataMap.hospitalType[$scope.formData.hospitalType]+$scope.formData.diseaseName+"基金效率使用排名";

        console.log($scope.formData);
        $localStorage.singleHospitalformData=$scope.formData;
        console.log($localStorage);

        //全病种画图
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/HospitalEfficiencyScore",
            dataType:"jsonp",
            data:$scope.formData,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){

                var $jsonData=eval(response);
                $localStorage.allHospitalqueryData=$scope.formData;

                console.log("$######");
                console.log($localStorage.allHospitalqueryData);
                console.log("$######");

                $scope.drawEcharts($jsonData);
                //$scope.closeModal();
            }
        });

    };



    //对响应的数据进行绘制
    $scope.drawEcharts=function($jsonData){
        $scope.echartsOption.yAxis[0].data=$jsonData["axis"].reverse();
        $scope.echartsOption.series[0].data=$jsonData["series"][0].reverse();
        window.onresize= $scope.echarts.resize;
        $scope.echarts.setOption($scope.echartsOption,true);
    };


    $scope.echartsOption = {
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
                data: ['']
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
                        color:function(params){
                            //return $scope.colorSets[params.dataIndex];
                            return $scope.colorSets[params.dataIndex];
                        },
                        label:{
                            show:true,
                            position:"right"
                        }
                    }
                },
                data: []
                //data: []
            }
        ],
        onRegisterApi: function (chartApi) {
            $scope.echartsOptionApi = chartApi;
            $scope.echartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.echarts=chartApi.getInstance();
        }
    };
    $scope.init=function(){
        //$scope.efficencyRankOption.version++;
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
    };
    //点击柱子回调函数
    $scope.callBackFunc=function($params){
        //console.log(444);
        //console.log($params);

        $localStorage.allHospitalqueryData.hospital=$params["name"];
        //$localStorage.formData=$scope.formData;
        //window.location.href="#/hospitalSingleDiseaseAnalyzeResult";
        window.location.href="#/efficencyAnalyzeSingle";

    };



}]);
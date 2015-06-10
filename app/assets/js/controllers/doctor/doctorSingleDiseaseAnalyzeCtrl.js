/**
 * Created by mac on 15-5-29.
 */
app.controller('doctorSingleDiseaseAnalyzeCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {

    $scope.index=1;
    $scope.echartsTitle="基金效率使用排名";

    $localStorage.singleDoctorqueryData==undefined?
        $scope.formData={
            "hospitalType" : "0101",
            "diseaseCategory":"1",
            "diseaseType" : "A00.101",
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
            "w7" : "5",
            "checked":{
                "w1":true,
                "w2":true,
                "w3":true,
                "w4":true,
                "w5":true,
                "w6":true,
                "w7":true
            }
        }:

        $scope.formData=$localStorage.singleDoctorqueryData
    ;
    $scope.optionSubmit=function(){
        $scope.openModal();
        $scope.formData.diseaseName=$("#diseaseName").find("option:selected").text();
        //更改title
        $scope.echartsTitle="四川"+$scope.formDataMap.hospitalType[$scope.formData.hospitalType]+$scope.formData.diseaseName+"基金效率使用排名";
        $scope.formData.w1=$scope.formData.w1*$scope.formData.checked.w1;
        $scope.formData.w2=$scope.formData.w2*$scope.formData.checked.w2;
        $scope.formData.w3=$scope.formData.w3*$scope.formData.checked.w3;
        $scope.formData.w4=$scope.formData.w4*$scope.formData.checked.w4;
        $scope.formData.w5=$scope.formData.w5*$scope.formData.checked.w5;
        $scope.formData.w6=$scope.formData.w6*$scope.formData.checked.w6;
        $scope.formData.w7=$scope.formData.w7*$scope.formData.checked.w7;
        console.log($scope.formData);
        $localStorage.singleDoctorformData=$scope.formData;
        console.log($localStorage);

        //已经测试通过
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/doctor/DoctorScore",
            dataType:"jsonp",
            data:$scope.formData,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){
                console.log(response);
                $localStorage.singleDoctorqueryData=$scope.formData;

                var $jsonData=eval(response);
                $scope.config.echarts.drawBar($scope.echartsOption,$scope.echarts,$jsonData,"vertical");
                //$scope.drawEcharts($jsonData);
                $scope.closeModal();
            }
        });

    };


    //对响应的数据进行绘制

    $scope.echartsOption = {
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
        //grid: $scope.config.echarts.grid,
        grid:$scope.config.echarts.grid.xs,
        padding: 0,
        calculable: true,
        yAxis: [
            {
                axisLabel: {
                    interval: 0
                },
                type: 'category',
                data: ['', '', '', '', '', '', '', '', '', '']
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
                            //return $scope.colorSets[$scope.$i++];
                            return $scope.colorSets[params.dataIndex];

                        }
                    }
                },
                data: []
            }
        ],
        onRegisterApi: function (chartApi) {
            $scope.echartsOptionApi = chartApi;
            $scope.echartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.echarts=chartApi.getInstance();
        }
    };
    $scope.callBackFunc=function($params){
        $localStorage.singleDoctorformData.doctor=$params["name"];
        //$localStorage.formData=$scope.formData;
        //window.location.href="#/doctorSingleDiseaseAnalyzeResult";
        window.location.href="#/doctorSingleDiseaseAnalyzeResult";

    }

    //生成联动菜单
    $scope.$watch('formData.diseaseCategory',function(newValue,oldValue,scope){
        //console.log(newValue);
        $scope.index=newValue;
        console.log($("#hospitalSets").find("option:selected").text());
    });
}]);
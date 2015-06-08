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
            "w7" : "5"
        }:
        $scope.formData=$localStorage.singleDoctorqueryData
    ;
    $scope.optionSubmit=function(){
        $scope.openModal();
        $scope.formData.diseaseName=$("#diseaseName").find("option:selected").text();
        //更改title
        $scope.echartsTitle="四川"+$scope.formDataMap.hospitalType[$scope.formData.hospitalType]+$scope.formData.diseaseName+"基金效率使用排名";

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
                $localStorage.singleDoctorqueryData=$scope.formData;

                var $jsonData=eval(response);
                $scope.drawEcharts($jsonData);
                $scope.closeModal();
            }
        });

    };


    //对响应的数据进行绘制
    $scope.drawEcharts=function($jsonData){
        console.log("into drawecharts");
        $scope.echartsOption.yAxis[0].data=$jsonData["axis"].reverse();
        $scope.echartsOption.series[0].data=$jsonData["series"][0].reverse();
        window.onresize= $scope.echarts.resize;
        $scope.echarts.setOption($scope.echartsOption,true);
    };

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
                        color:function(params){
                            //return $scope.colorSets[$scope.$i++];
                            return $scope.colorSets[params.dataIndex];

                        }
                    }
                },
                data: [20, 15.9, 14.0, 12.4, 11.7, 10.7, 9.6, 8.2, 7.7, 6.8, 6.0, 2.3]
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
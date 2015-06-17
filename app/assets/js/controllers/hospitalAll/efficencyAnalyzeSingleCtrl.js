/**
 * Created by mac on 15-5-29.
 */
app.controller('efficencyAnalyzeSingleCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {
    console.log("echarts");

    $scope.queryData=$localStorage.allHospitalqueryData;
    //$scope.hospitalName=$localStorage.allHospitalqueryData.hospital;
    $scope.formData={
        "hospitalSets":{}
    };
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
        grid: $scope.config.echarts.grid["middle"],
        padding: 0,
        calculable: true,
        yAxis: [
            {
                axisLabel: {
                    interval: 0,
                    formatter: function(value){
                        var res='';
                        for(var i=0, l=value.length;i<l;i++){
                            res+=value[i];
                            if((i<(l-1)) && ((i+1)%4==0)){
                                res=res+"\n";//就是这里！！！

                                //每次都是把<br/>当成实际的字符串去处理而没起到换行的作用
                            }
                        }
                        return res;
                    }
                },
                type: 'category',
                //data: ['王伟伟', '李建平', '李丹', '王思敏', '孙承宗', '张咖喱', '王建', '庞涛', '欧阳晨', '赵光']
                data:$scope.config.echarts.legend[0]
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
                barCategoryGap:20,

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
                //data: [20, 15.9, 14.0, 12.4, 11.7, 10.7, 9.6, 8.2, 7.7, 6.8, 6.0, 2.3]
                data: [20, 15.9, 14.0, 12.4, 11.7, 10.7, 9.6, 8.2, 7.7, 6.8, 6.0, 2.3]
            }
        ],
        onRegisterApi: function (chartApi) {
            $scope.leftechartsOptionApi = chartApi;
            $scope.leftechartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.leftecharts=chartApi.getInstance();
        }
    };



    //根据模板生成echartsoption
    $scope.rightLeftEchartsOption={
        onRegisterApi: function (chartApi) {
            $scope.rightLeftEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.rightLeftEcharts=chartApi.getInstance();
        }
    };
    $scope.config.echarts.extend($scope.rightLeftEchartsOption,$scope.config.echarts.templateOptions.smallBar);


    //scatterOption
    $scope.scatterEchartsOption={
        onRegisterApi: function (chartApi) {
            $scope.scatterEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.scatterEcharts=chartApi.getInstance();
        }
    };
    $scope.config.echarts.extend($scope.scatterEchartsOption,$scope.config.echarts.templateOptions.scatter);

    //rightrightEchart
    $scope.rightRightEchartsOption={
        onRegisterApi: function (chartApi) {
            $scope.rightRightEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.rightRightEcharts=chartApi.getInstance();
        }
    };
    $scope.config.echarts.extend($scope.rightRightEchartsOption,$scope.config.echarts.templateOptions.smallBar);

    $scope.drawRightRightEcharts=function(){
        $data={
            "hnameString":$("#hospitalSets").find("option:selected").text()!=""?
                $("#hospitalSets").find("option:selected").text():
                $scope.queryData.hospital
            ,
            "idString":$("#hospitalSets").val()!=""?
                $("#hospitalSets").val():
                $scope.queryData.hospitalId,"top10":10,"Descend":true};
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/HospitalEfficiencyDiseaseRank",
            dataType:"jsonp",
            data:$data,
            jsonp:"callback",
            success:function(response){
                var $jsonData=eval(response);
                $scope.config.echarts.drawBar($scope.rightRightEchartsOption,$scope.rightRightEcharts,$jsonData,"horizonful");
            },
            error:function(){
                console.log("error");
            }
        });
    };



    $scope.drawRightLeftEcharts=function(){
        $data={
            "hnameString":$("#hospitalSets").find("option:selected").text()!=""?
                $("#hospitalSets").find("option:selected").text():
                $scope.queryData.hospital
            ,
            "idString":$("#hospitalSets").val()!=""?
                $("#hospitalSets").val():
                $scope.queryData.hospitalId,"top10":10,"Descend":false};

        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/HospitalEfficiencyDiseaseRank",
            dataType:"jsonp",
            data:$data,
            jsonp:"callback",
            success:function(response){
                var $jsonData=eval(response);
                console.log("rightleft");
                console.log($scope.rightLeftEcharts);
                $scope.config.echarts.drawBar($scope.rightLeftEchartsOption,$scope.rightLeftEcharts,$jsonData,"horizonful");
            },
            error:function(){
                console.log("error");
            }
        });
    };

    $scope.drawScatterEcharts=function(){
        $data={
            "hnameString":$("#hospitalSets").find("option:selected").text()!=""?
              $("#hospitalSets").find("option:selected").text():
               $scope.queryData.hospital
            ,
            "idString":$("#hospitalSets").val()!=""?
                $("#hospitalSets").val():
                $scope.queryData.hospitalId,
            "top10":30,"Descend":false};
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/HospitalEfficiencyScoreFeeScatter",
            dataType:"jsonp",
            data:$data,
            jsonp:"callback",
            success:function(response){
                var $jsonData=eval(response);
                console.log($jsonData);
                $scope.config.echarts.drawScatter($scope.scatterEchartsOption,$scope.scatterEcharts,$jsonData);
            },
            error:function(){
                console.log("error");
            }
        });
    };


    //画左侧图 参数医院名称
    $scope.onSelectChange=function(){

        //$scope.drawLeftEcharts();
        //$scope.drawRightEcharts();
        $scope.drawLeftEcharts();
        $scope.drawRightLeftEcharts();
        $scope.drawRightRightEcharts();
        $scope.drawScatterEcharts();

    }
    //对响应的数据进行绘制
    $scope.drawLeftEcharts=function(){

        //已经测试通过
        $data={
            "hnameString":$("#hospitalSets").find("option:selected").text()!=""?
                $("#hospitalSets").find("option:selected").text():
                $scope.queryData.hospital
            ,
            "idString":$("#hospitalSets").val()!=""?
                $("#hospitalSets").val():
                $scope.queryData.hospitalId
        };
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/HospitalEfficiencyRank",
            dataType:"jsonp",
            data:$data,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){
                //console.log(response);
                var $jsonData=eval(response);
                $scope.config.echarts.drawBar( $scope.leftechartsOption,$scope.leftecharts,$jsonData,"vertical");
            },
            error:function(){
                console.log("error");
            }
        });
    };
    /*
     * 获取医院select列表
     * */
    $scope.getHospitalSets=function(){
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/hospital/HospitalList",
            dataType:"jsonp",
            data:"",
            jsonp:"callback",
            success:function(response){
                //console.log(response);
                var $jsonData=eval(response);
                //$scope.drawEcharts($jsonData);
                $scope.formData.hospitalSets=$jsonData;
                for(var i=0;i<$jsonData.length;i++){
                    //console.log($jsonData[i].hnameString);
                    if($jsonData[i].hnameString==$scope.queryData.hospital){
                        $scope.queryData.hospitalId=$jsonData[i].idString;
                    }
                }
                console.log($scope.queryData);
                $scope.formData.hospitalId=$scope.formData.hospitalSets[0];
                console.log("setting sets complete!");
                $scope.$apply();

                $scope.init();
                //console.log($scope.formData.hospitalSets);
                //$scope.closeModal();

            },
            error:function(){
                console.log("error");
            }
        });
    };
    $scope.init=function(){

        //$scope.openModal();
        //$scope.getHospitalSets();

        $scope.drawLeftEcharts();
        $scope.drawRightLeftEcharts();
        $scope.drawRightRightEcharts();
        $scope.drawScatterEcharts();
        //$scope.drawRightEcharts();


    };
    $scope.getHospitalSets();

    //$scope.init();


    /*点击切换医院，画左下侧的图
     params 当前医院的数据集合
     * */
    $("#hospitalSets").bind("change",function(){
        var hospital=$("#hospitalSets").find("option:selected").text();
        $localStorage.allHospitalqueryData.hospital=hospital;

        $scope.init();
        //$scope.queryData.hospital=hospital;


    });


}]);
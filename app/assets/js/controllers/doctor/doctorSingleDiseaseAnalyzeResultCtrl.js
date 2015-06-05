/**
 * Created by mac on 15-5-29.
 */
//app.controller('doctorSingleDiseaseAnalyzeResultCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {
app.controller('doctorSingleDiseaseAnalyzeResultCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {

    $scope.queryData=$localStorage.singleDoctorformData;
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
                margin:100,
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

    $scope.formData={};
    $scope.formData.repeat=10000;
    //$scope.formData.doctorId=0;

    //画左侧图 参数医院名称
    $scope.onSelectChange=function(){

        $scope.drawLeftEcharts();
        $scope.drawRightEcharts();

    }
    $scope.drawLeftEcharts=function(){

        //已经测试通过
        $data={"doctornameString":$("#doctorSets").find("option:selected").text()};
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/doctor/DoctorRank",
            dataType:"jsonp",
            data:$data,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){
                //console.log(response);
                var $jsonData=eval(response);
                console.log("success");
                //$scope.drawEcharts($jsonData);
                $scope.config.echarts.drawBar( $scope.leftechartsOption,$scope.leftecharts,$jsonData,"vertical");
                //$scope.leftechartsOption.series[0].data=$jsonData["series"][0];
                //console.log($scope.leftechartsOption);
                //$scope.leftecharts.setOption($scope.leftechartsOption);
                //$scope.leftechartsOption.version++;

            },
            error:function(){
                console.log("error");
            }
        });
    };

    $scope.drawRightEcharts=function(){
        $scope.openModal();

        //已经测试通过
        //$scope.openModal();
        $data={
            "doctorString":$("#doctorSets").val(),
            //"doctorString":091001,
            "doctornameString":$("#doctorSets").find("option:selected").text(),
            //"doctornameString":"huaxi",
            "repeat":$scope.formData.repeat
            //"weight":$scope.formData.repeat
        };
        console.log($data);
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/doctor/DoctorStat",
            dataType:"jsonp",
            data:$data,
            jsonp:"callback",
            //jsonpCallback:$scope.drawEcharts,
            success:function(response){
                //console.log(response);
                var $jsonData=eval(response);
                $scope.closeModal();
                console.log("right echarts success");
                //$scope.drawEcharts($jsonData);
                $scope.config.echarts.drawBar( $scope.rightechartsOption,$scope.rightecharts,$jsonData,"horizonful");
            },
            error:function(){
                console.log("error");
                $scope.closeModal();

            }
        });
    };

    /*
     * 获取医生select列表
     * */
    $scope.getdoctorSets=function(){
        $.ajax({
            type:"GET",
            //url:"http://localhost/skidxjq/php/service.php",
            url:$scope.config.baseUrl+"/huaxi/doctor/DoctorList",
            dataType:"jsonp",
            data:"",
            jsonp:"callback",
            success:function(response){
                //console.log(response);
                var $jsonData=eval(response);
                //$scope.drawEcharts($jsonData);
                $scope.formData.doctorSets=$jsonData;
                console.log($scope.formData.doctorSets);
                $scope.$apply();
                $scope.closeModal();

            },
            error:function(){
                console.log("error");
            }
        });
    }
    //打开该页面，初始绘图
    $scope.init=function(){

        //$scope.openModal();

        $scope.drawLeftEcharts();
        $scope.drawRightEcharts();
        $scope.getdoctorSets();


    };
    $scope.init();
    /*点击切换医院，画左下侧的图
     params 当前医院的数据集合
     * */
    $("#doctorSets").bind("change",function(){
        var doctor=$("#doctorSets").find("option:selected").text();
        $localStorage.singleDoctorformData.doctor=doctor;

        $scope.onSelectChange();
        //$scope.queryData.doctor=doctor;


    });
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
                    interval: 0,

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
                //itemStyle:$scope.config.echarts.itemStyle(params),
                itemStyle:{
                    normal:{
                        //color:$scope.config.echarts.colorStyle(params)
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
            $scope.rightechartsOptionApi = chartApi;
            $scope.rightechartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.rightecharts=chartApi.getInstance();
        }
    };
    //console.log($scope.config.echarts.itemStyle("fff"));

}]);
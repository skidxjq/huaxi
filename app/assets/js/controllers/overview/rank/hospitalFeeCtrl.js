/**
 * Created by mac on 15-5-29.
 */
app.controller('hospitalFeeCtrl', ['$scope','$http',function($scope,$http) {

    //根据模板生成echartsoption
    $scope.feeEchartsOption={
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
            x: 100,
            y: 10,
            x2: 30,
            y2: 55
        },
        padding: 0,
        calculable: true,
        yAxis: [
            {
                //axisLabel: {
                //    interval: 0
                //},
                axisLabel : {

                    interval: 0,
                    textStyle : {
                        fontSize : 10
                    },
                    clickable:true,

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
                    },
                    margin:20
                },
                type: 'category',
                data: $scope.config.mock.hospitalDetailsSets.slice(0,10)
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
                barWidth:30,
                itemStyle:{
                    normal:{
                        color:function(params){
                            //return $scope.colorSets[params.dataIndex];
                            return $scope.colorSets[params.dataIndex];
                        }
                        //,
                        //label:{
                        //    show:fa,
                        //    position:"right"
                        //}
                    }
                },
                data: $scope.config.mock.getRandomData(10,40,0)
            }
        ],
        onRegisterApi: function (chartApi) {
            $scope.feeEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.feeEcharts=chartApi.getInstance();
        }
    };

    //根据模板生成echartsoption
    $scope.rateEchartsOption={
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
            x: 100,
            y: 10,
            x2: 30,
            y2: 55
        },
        padding: 0,
        calculable: true,
        yAxis: [
            {
                //axisLabel: {
                //    interval: 0
                //},
                axisLabel : {

                    interval: 0,
                    textStyle : {
                        fontSize : 10
                    },
                    clickable:true,

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
                    },
                    margin:20
                },
                type: 'category',
                data: $scope.config.mock.hospitalDetailsSets.slice(0,10).reverse()
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
                barWidth:30,
                itemStyle:{
                    normal:{
                        color:function(params){
                            //return $scope.colorSets[params.dataIndex];
                            return $scope.colorSets[params.dataIndex];
                        }
                        //,
                        //label:{
                        //    show:fa,
                        //    position:"right"
                        //}
                    }
                },
                data: $scope.config.mock.getRandomData(10,40,0)
            }
        ],
        onRegisterApi: function (chartApi) {
            $scope.rateEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.rateEcharts=chartApi.getInstance();
        }
    };

}]);
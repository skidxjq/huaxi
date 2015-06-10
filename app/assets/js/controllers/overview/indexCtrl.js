/**
 * Created by mac on 15-5-29.
 */
app.controller('indexCtrl', ['$scope','$http',function($scope,$http) {

    //根据模板生成echartsoption
    console.log($scope.config.mock.getRandomData(10,100,1));
    //$scope.overviewEchartsOption={
    //    version: 1,
    //
    //    tooltip: {
    //        trigger: 'axis'
    //    },
    //    legend: {
    //        data: ['医保费用（亿）','同比增长率（百分比）'],
    //        show:true,
    //        y: 'bottom'
    //    },
    //    toolbox: {
    //        show: false
    //    },
    //    grid: {
    //        x: 60,
    //        y: 40,
    //        x2: 30,
    //        y2: 55
    //    },
    //    padding: 0,
    //    calculable: true,
    //    yAxis: [
    //        {
    //            type:'value',
    //            name:"医保费用（亿）"
    //
    //        }
    //        ,
    //        {
    //            type:'value',
    //            name:"同比增长率（百分比）",
    //            axisLable:{
    //                formatter:'{value}%'
    //            }
    //
    //        }
    //    ],
    //    xAxis: [
    //        {
    //            type: 'category',
    //            data:['2011年','2012年','2013年','2014年','2015年']
    //        }
    //    ],
    //    series: [
    //
    //        {
    //            name: '医保费用（亿）',
    //            type: 'bar',
    //            data:$scope.config.mock.getRandomData(10,100,0)
    //        },
    //        {
    //            name: '同比增长率（百分比）',
    //            type: 'line',
    //            data: $scope.config.mock.getRandomData(10, 2, 2)
    //        }
    //    ],
    //    onRegisterApi: function (chartApi) {
    //        $scope.overviewEchartsOptionApi = chartApi;
    //        //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
    //        $scope.overviewEcharts=chartApi.getInstance();
    //    }
    //};
    $scope.overviewEchartsOption= {
        tooltip : {
            trigger: 'axis'
        },


        calculable : true,
        legend: {
            data:['医保费用（亿）','同比增长率（百分比）'],
            y:'bottom'
        },
        xAxis : [
            {
                type : 'category',
                data:['2011年','2012年','2013年','2014年','2015年']

            }
        ],
        grid: {
            x: 35,
            y: 45,
            x2: 40,
            y2: 55
        },
        yAxis : [
            {
                type : 'value',
                name : '元',
                axisLabel : {
                    formatter: '{value} '
                }
            },
            {
                type : 'value',
                name : '百分比',
                axisLabel : {
                    formatter: '{value} %'
                }
            }
        ],
        series : [

            {
                name:'医保费用（亿）',
                type:'bar',
                data:$scope.config.mock.getRandomData(10,100,0)

                //data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'同比增长率（百分比）',
                type:'line',
                yAxisIndex: 1,
                data: $scope.config.mock.getRandomData(10, 2, 2)

                //data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };

    $scope.countEchartsOption={
        onRegisterApi: function (chartApi) {
            $scope.countEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.countEcharts=chartApi.getInstance();
        }
    };
    $scope.config.echarts.extend($scope.countEchartsOption,$scope.config.echarts.templateOptions.doctorBar);
    $scope.levelPieEchartsOption={

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y :'bottom',
            //data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            data:$scope.config.mock.hospitalLegendsSets.slice(0,5)
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '70%',
                itemStyle:{
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                center: ['40%', '40%'],
                data:$scope.config.mock.getRandomPieData(5,100,$scope.config.mock.hospitalSets)
                //data:[
                //    {value:335, name:'检查费'},
                //    {value:310, name:'检验费'},
                //    {value:234, name:'药品费'},
                //    {value:135, name:'诊疗费'},
                //    {value:1548, name:'护理费'},
                //    {value:1548, name:'耗材费'}
                //]
            }
        ]
    };

    $scope.levelBarEchartsOption={
        version: 1,
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            x: 30,
            y: 10,
            x2: 30,
            y2: 55
        },
        padding: 0,
        calculable: true,
        xAxis: [
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
                data: $scope.config.mock.hospitalSets.slice(0,6)
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
                data: $scope.config.mock.getRandomData(6,20,2)
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRank_RightRight_OptionApi = chartApi;
            efficencyRank_RightRight_OptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };
    $scope.districtBarEchartsOption={
        version: 1,
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            x: 30,
            y: 10,
            x2: 30,
            y2: 55
        },
        padding: 0,
        calculable: true,
        xAxis: [
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
                data: $scope.config.mock.districtSets.slice(0,6)
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
                data: $scope.config.mock.getRandomData(6,500,0)
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRank_RightRight_OptionApi = chartApi;
            efficencyRank_RightRight_OptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };

    $scope.districtPieEchartsOption={

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y :'bottom',
            //data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            data:$scope.config.mock.districtEchartsSets.slice(0,6)
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '70%',
                itemStyle:{
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                center: ['40%', '40%'],
                data:$scope.config.mock.getRandomPieData(6,100,$scope.config.mock.districtSets)
                //data:[
                //    {value:335, name:'检查费'},
                //    {value:310, name:'检验费'},
                //    {value:234, name:'药品费'},
                //    {value:135, name:'诊疗费'},
                //    {value:1548, name:'护理费'},
                //    {value:1548, name:'耗材费'}
                //]
            }
        ]
    };
    $scope.levelBarEchartsOption={
        version: 1,
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            x: 30,
            y: 10,
            x2: 30,
            y2: 55
        },
        padding: 0,
        calculable: true,
        xAxis: [
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
                data: $scope.config.mock.hospitalSets.slice(0,6)
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
                data: $scope.config.mock.getRandomData(6,20,2)
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRank_RightRight_OptionApi = chartApi;
            efficencyRank_RightRight_OptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };

//根据模板生成echartsoption
    $scope.rateEchartsOption={
        onRegisterApi: function (chartApi) {
            $scope.rateEchartsOptionApi = chartApi;
            //$scope.rightLeftEchartsOptionApi.registerBarClicked($scope,$scope.callBackFunc);
            $scope.rateEcharts=chartApi.getInstance();
        }
    };
    $scope.config.echarts.extend($scope.rateEchartsOption,$scope.config.echarts.templateOptions.doctorBar);


}]);
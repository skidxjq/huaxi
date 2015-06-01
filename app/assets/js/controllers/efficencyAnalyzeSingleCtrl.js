/**
 * Created by mac on 15-5-29.
 */
app.controller('efficencyAnalyzeSingleCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {

    $scope.hospitalName=$localStorage.hospitalName;
    console.log($localStorage);
    $scope.colorSets=["#eee","red","pink","#7266ba","#fad733","green","#23b7e5","#27c24c","#dff0d8","#E0FFFF","#C0FF3E","#8B2500"];
    $scope.$i=0;
    //console.log("fff")
    //console.log($localStorage.hospitalName);
    $scope.efficencyRank_Left_Option = {
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
            x: 70,
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
                    //barCategoryGap:'100%',

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
                data: ['就诊次数', '次均费用', '并发症用户占比', '次均住院时长', '住院时长标准差', '再次入院间隔/费用', '病情好转指标']
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
                //barWidth:10,
                barCategoryGap:20,
                name: 'RANK',
                type: 'bar',
                itemStyle:{
                    normal:{
                        color:function(){
                            //return $scope.colorSets[($scope.$i++)%12];
                            return $scope.colorSets[($scope.$i++)%12];
                        }
                        //,
                        //label:{
                        //    show:fa,
                        //    position:"right"
                        //}
                    }
                },
                data: [18, 11, 4, 2, 16, 17, 19]
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRank_Left_OptionApi = chartApi;
            efficencyRank_Left_OptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };
    $scope.efficencyRank_RightLeft_Option = {
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
                data: ['疾病1', '疾病2','疾病3','疾病4','疾病5']
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
                        color:function(){
                            //return $scope.colorSets[($scope.$i++)%12];
                            return $scope.colorSets[($scope.$i++)%12];
                        },
                        //,
                        //label:{
                        //    show:fa,
                        //    position:"right"
                        //}
                    }
                },
                data: [18, 11, 9,7,3]
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRank_RightLeft_OptionApi = chartApi;
            efficencyRank_RightLeft_OptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };
    $scope.efficencyRank_RightRight_Option = {
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
                data: ['疾病5', '疾病6','疾病7','疾病8','疾病9']
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
                        color:function(){
                            //return $scope.colorSets[($scope.$i++)%12];
                            return $scope.colorSets[($scope.$i++)%12];
                        }
                        //,
                        //label:{
                        //    show:fa,
                        //    position:"right"
                        //}
                    }
                },
                data: [8, 11, 12,22,25]
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRank_RightRight_OptionApi = chartApi;
            efficencyRank_RightRight_OptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };
    $scope.efficencyRank_RightBottom_Option = {
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
            x: 30,
            y: 10,
            x2: 30,
            y2: 55
        },
        padding: 0,
        calculable: true,

        xAxis: [
            {
                type: 'value',
                scale:true,
                splitArea: {show: true}
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale:true,
                splitArea: {show: true}
            }
        ],
        series: [

            {
                name: 'RANK',
                type: 'scatter',

                data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                    [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                    [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                    [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                    [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                    [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                    [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                    [162.1, 53.6]]
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRank_RightBottom_OptionApi = chartApi;
            efficencyRank_RightBottom_OptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };

    $scope.clickEvent=function($params){
        console.log($params);
    }


}]);
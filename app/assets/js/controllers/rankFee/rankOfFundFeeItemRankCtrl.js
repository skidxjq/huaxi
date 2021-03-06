/**
 * Created by mac on 15-5-29.
 */
app.controller('rankOfFundFeeItemRankCtrl', ['$scope','$http',function($scope,$http) {
    $scope.hugeFeeAnalyzePieOption = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            //data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            data:[
                {
                    name:'检查费',
                    icon:'bar'
                },{
                    name:'检验费',
                    icon:'bar'
                },{
                    name:'药品费',
                    icon:'bar'
                },{
                    name:'诊疗费',
                    icon:'bar'
                },{
                    name:'耗材费',
                    icon:'bar'
                }
            ]
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
                data:[
                    {value:335, name:'检查费'},
                    {value:310, name:'检验费'},
                    {value:234, name:'药品费'},
                    {value:135, name:'诊疗费'},
                    {value:1548, name:'护理费'},
                    {value:1548, name:'耗材费'}
                ]
            }
        ]
    };
    $scope.hugeFeeAnalyzeBarOption = {
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
                data: ['疾病5', '疾病6','疾病7','疾病8','疾病9','疾病7','疾病8','疾病9']
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
                data: [8, 11, 12,22,25,42,72,25]
            }
        ],
        onRegisterApi: function (chartApi) {
            efficencyRank_RightRight_OptionApi = chartApi;
            efficencyRank_RightRight_OptionApi.registerBarClicked($scope,$scope.clickEvent);

            //chartPro
        }
    };

    console.log($scope);

}]);
/**
 * Created by mac on 15-5-29.
 */
app.controller('headerCtrl', ['$rootScope','$scope','$http','$location','$log',function($rootScope,$scope,$http,$location,$log) {

    /*
     * ul li点击事件
     * */

    $("#nav li:not(.dropdown)").bind("click",function(){
        //
        $("#nav li:not(.dropdown)").removeClass("active");
        $(this).addClass("active");
    })
    /*
    * 路由切换事件
    * */

    var locationChangeStartOff = $rootScope.$on('$locationChangeStart', locationChangeStart);
    var locationChangeSuccessOff = $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);
    function locationChangeStart(event) {
        $log.log('locationChangeStart');
        $log.log(arguments);
    }

    function locationChangeSuccess(event) {
        $log.log('locationChangeSuccess');
        $log.log(arguments);
        $scope.addLiActive($scope.getRelativePath($location.absUrl()));

    }
    //console.log($location.absUrl());
    //$scope.urlPath=$location.absUrl();
    /*
    * 获取相对路径
    * */
    $scope.getRelativePath=function($path){
        var $pathArr=$path.split("/");
        return $pathArr[$pathArr.length-1];

    }

    $scope.addLiActive  =   function($relativePath){
        console.log("222");
        console.log($relativePath);
        $("#nav #li-"+$relativePath).addClass("active");
        $("#nav :not(#li-"+$relativePath+")").removeClass("active");
    }
    //$scope.addLiActive($scope.getRelativePath($scope.urlPath));
    //console.log($scope.getRelativePath($scope.urlPath));

    $("#menu li").bind("click",function(event){
        //console.log(333);
        //$("#menu li").removeClass("active");
        event.stopPropagation();//阻止事件冒泡
        if(!$(this).hasClass("active")) {
            $(this).addClass("active");
        }else{

            $(this).removeClass("active");

        }
    })
    $(".my-col-lg-1 button").bind("click",function(event){
        //$(".col-lg-2").attr("display")
        $(".col-lg-2").toggle();
        //if($(".col-lg-2").attr("display"))
        $(".col-lg-2")[0].style.display=="none"?
            //console.log("ffff");
            $scope.hideMenu():$scope.showMenu();

        $log.log($(".col-lg-2")[0].style.display);
    });
    $scope.hideMenu=function(){
        $(".my-col-lg-1 button")[0].style.marginLeft="27px";
        $("#wrapper").removeClass("col-lg-9");
        $("#wrapper").addClass("col-lg-11");


    }
    $scope.showMenu=function(){
        $(".my-col-lg-1 button")[0].style.marginLeft="15px";
        $("#wrapper").removeClass("col-lg-11");
        $("#wrapper").addClass("col-lg-9");

    }
    /*
     * 时间选择控件
     * */
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.minDateOpen = function($event) {
        //console.log($event);
        $event.preventDefault();
        $event.stopPropagation();
        $scope.maxDateOpened = false;

        $scope.minDateOpened = !$scope.minDateOpened;
        console.log($scope.minDateOpened);
        //console.log($scope.maxDateOpened);
    };
    $scope.maxDateOpen = function($event) {
        //console.log($event);

        $event.preventDefault();
        $event.stopPropagation();

        $scope.minDateOpened = false;

        $scope.maxDateOpened = !$scope.maxDateOpened;
        console.log($scope.minDateOpened);
        console.log($scope.maxDateOpened);
    };


    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['yyyy-MM-dd', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
}]);

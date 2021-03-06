'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
    'ngRoute',
    'iu',
    'ngStorage',
    'ngTable',
    'oc.lazyLoad',
    'ui.bootstrap',
    //'ngQuickDate',
    //'ui.select',
    //'ngSanitize',
    //'ui.router',
    //'myApp.view1',

    //'myApp.view2',
    'myApp.version'
])
//    .run(
//    [          '$rootScope', '$state', '$stateParams',
//        function ($rootScope,   $state,   $stateParams) {
//            $rootScope.$state = $state;
//            $rootScope.$stateParams = $stateParams;
//        }
//    ]

//)
//    .run(
//    [          '$rootScope', '$state', '$stateParams',
//        function ($rootScope,   $state,   $stateParams) {
//            $rootScope.$state = $state;
//            $rootScope.$stateParams = $stateParams;
//        }
//    ]
//)
//    .config(function($stateProvider, $urlRouterProvider) {
//    //
//    // For any unmatched url, redirect to /state1
//    $urlRouterProvider.otherwise("/state1");
//    //
//    // Now set up the states
//    $stateProvider
//        .state('state1', {
//            url: "/state1",
//            templateUrl: 'tpl/404.html'
//
//            //templateUrl: "partials/state1.html"
//        })
//        .state('state1.list', {
//            url: "/list",
//            templateUrl: 'tpl/404.html',
//
//            //templateUrl: "partials/state1.list.html",
//            controller: function($scope) {
//                $scope.items = ["A", "List", "Of", "Items"];
//            }
//        })
//    ;
//})
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/index', {
                templateUrl: 'tpl/overview/index.html',
                controller: 'indexCtrl'
            })
            .when('/view2', {
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl'
                ,resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            console.log("33333");
                            return ($ocLazyLoad).load([
                                'assets/js/services/bookService.js'
                            ]);

                        }]
                }
            })
            .when('/efficencyAnalyze', {
                templateUrl: 'tpl/hospitalAll/efficencyAnalyze.html',
                controller: 'efficencyAnalyzeCtrl'

            })
            .when('/efficencyAnalyzeSingle', {
                templateUrl: 'tpl/hospitalAll/efficencyAnalyzeSingle.html',
                controller: 'efficencyAnalyzeSingleCtrl'

            })
            .when('/hospitalSingleDiseaseAnalyze', {
                templateUrl: 'tpl/hospital/hospitalSingleDiseaseAnalyze.html',
                controller: 'hospitalSingleDiseaseAnalyzeCtrl'

            })
            .when('/doctorSingleDiseaseAnalyze', {
                templateUrl: 'tpl/doctor/doctorSingleDiseaseAnalyze.html',
                controller: 'doctorSingleDiseaseAnalyzeCtrl'

            })
            .when('/doctorSingleDiseaseAnalyzeResult', {
                templateUrl: 'tpl/doctor/doctorSingleDiseaseAnalyzeResult.html',
                controller: 'doctorSingleDiseaseAnalyzeResultCtrl'

            })
            .when('/hospitalSingleDiseaseAnalyzeResult', {
                templateUrl: 'tpl/hospital/hospitalSingleDiseaseAnalyzeResult.html',
                controller: 'hospitalSingleDiseaseAnalyzeResultCtrl'

            })
            //收费项目费用排名
            .when('/rankOfFundFeeItemRank', {
                templateUrl: 'tpl/rankOfFundFee/fee/itemRank.html',
                controller: 'rankOfFundFeeItemRankCtrl',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            console.log("33333");
                            return ($ocLazyLoad).load([
                                'assets/js/controllers/rankFee/rankOfFundFeeItemRankCtrl.js'
                            ]);

                        }]
                }

            })
            //推演政策模拟
            .when('/policyImitate', {
                templateUrl: 'tpl/policy/policyImitate.html',
                controller: 'policyImitateCtrl'


            })
            .when('/doctorFee', {
                templateUrl: 'tpl/overview/rank/doctorFee.html',
                controller: 'doctorFeeCtrl'
            })
            .when('/diseaseFee', {
                templateUrl: 'tpl/overview/rank/diseaseFee.html',
                controller: 'diseaseFeeCtrl'
            })
            .when('/hospitalFee', {
                templateUrl: 'tpl/overview/rank/hospitalFee.html',
                controller: 'hospitalFeeCtrl'
            })
            .when('/itemFee', {
                templateUrl: 'tpl/overview/rank/itemFee.html',
                controller: 'itemFeeCtrl'
            })

            .when('/select', {
                templateUrl: 'tpl/form_select.html',
                controller: 'selectCtrl'

            })
            .when('/test', {
                templateUrl: 'tpl/test.html'
                //controller: 'selectCtrl'

            })

            .otherwise({redirectTo: '/index'});
    }]);


//angular.module('ui.bootstrap').controller('AlertDemoCtrl', function ($scope) {
//    $scope.alerts = [
//        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
//        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
//    ];
//
//    $scope.addAlert = function() {
//        $scope.alerts.push({msg: 'Another alert!'});
//    };
//
//    $scope.closeAlert = function(index) {
//        $scope.alerts.splice(index, 1);
//    };
//});
'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
  'ngRoute',
    'iu',
    'oc.lazyLoad',
    'ui.bootstrap',
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
          .when('/error', {
            templateUrl: 'tpl/404.html'
            //controller: 'View1Ctrl'
          })
          //.when('/view2', {
          //  templateUrl: 'view2/view2.html',
          //  controller: 'View2Ctrl'
          //})
          .when('/efficencyAnalyze', {
            templateUrl: 'tpl/efficencyAnalyze.html',
            controller: 'efficencyAnalyzeCtrl'
            //  resolve: {
            //      deps: ['$ocLazyLoad',
            //          function ($ocLazyLoad) {
            //              console.log("33333");
            //              return ($ocLazyLoad).load([
            //                  'assets/js/controllers/efficencyAnalyzeCtrl.js'
            //              ]);
            //
            //          }]
            //  }
          })
          .when('/hospitalSingleDiseaseAnalyze', {
            templateUrl: 'tpl/hospitalSingleDiseaseAnalyze.html',
            controller: 'hospitalSingleDiseaseAnalyzeCtrl'

          })
           .when('/doctorSingleDiseaseAnalyze', {
            templateUrl: 'tpl/doctorSingleDiseaseAnalyze.html',
            controller: 'doctorSingleDiseaseAnalyzeCtrl'

          })
            //收费项目费用排名
          .when('/rankOfFundFeeItemRank', {
            templateUrl: 'tpl/rankOfFundFee/fee/itemRank.html',
            //controller: 'rankOfFundFeeItemRankCtrl',
              resolve: {
                  deps: ['$ocLazyLoad',
                      function ($ocLazyLoad) {
                          console.log("33333");
                          return ($ocLazyLoad).load([
                              'assets/js/controllers/rankOfFundFeeItemRankCtrl.js'
                              ]);

                      }]
              }

          })

          .otherwise({redirectTo: '/error'});
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
'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
  'ngRoute',
    'iu',
  //'myApp.view1',

  //'myApp.view2',
  'myApp.version'
]).
    config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
          })
          .when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
          })
          .when('/efficencyAnalyze', {
            templateUrl: 'tpl/efficencyAnalyze.html',
            controller: 'efficencyAnalyzeCtrl'

          })
          .when('/hospitalSingleDiseaseAnalyze', {
            templateUrl: 'tpl/hospitalSingleDiseaseAnalyze.html',
            controller: 'hospitalSingleDiseaseAnalyzeCtrl'

          })
           .when('/doctorSingleDiseaseAnalyze', {
            templateUrl: 'tpl/doctorSingleDiseaseAnalyze.html',
            controller: 'doctorSingleDiseaseAnalyzeCtrl'

          })

          .otherwise({redirectTo: '/view1'});
    }]);

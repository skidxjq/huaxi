'use strict';

//angular.module('myApp.view2', ['ngRoute'])
//
//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/view2', {
//    templateUrl: 'view2/view2.html',
//    controller: 'View2Ctrl'
//  });
//}])

app.controller('View2Ctrl', ['$scope','$http','$modal','$localStorage','Book',function($scope,$http,$modal,$localStorage,$Book) {
    console.log($Book);
    console.log($modal);

}]);
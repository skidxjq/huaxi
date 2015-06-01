/**
 * Created by mac on 15-5-29.
 */
app.controller('efficencyAnalyzeSingleCtrl', ['$scope','$http','$localStorage',function($scope,$http,$localStorage) {

    $scope.hospitalName=$localStorage.hospitalName;
    console.log($localStorage);
    //console.log("fff")
    //console.log($localStorage.hospitalName);

}]);
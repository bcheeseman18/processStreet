angular.module('angCtrlMod', [])

.controller('angCtrl',['$scope', 'Calculations', function($scope, Calculations){
    $scope.objective = {};
    $scope.objective.title = 'Main Page';
    $scope.objective.subTitle = 'Sub Title'; 

    $scope.objective.bindOutput = 2; 
 
    $scope.timesTwo = function() {
        $scope.objective.bindOutput = Calculations.timesTwo($scope.objective.bindOutput); 
    }

    $scope.objective.firstName = 'Ben'; 
    $scope.objective.lastName = 'Cheeseman'; 
}])

.controller('angCtrl2', ['$scope', function($scope) {
    $scope.second = 'This is the second tutorial'; 
}])

.factory('Calculations', function (){
    var calculations = {}; 

    calculations.timesTwo = function(a) {
        return a * 2; 
    }

    calculations.pyth = function(a, b) {
        return (a * a) + (b * b); 
    }

    return calculations; 
})
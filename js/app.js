var app = angular.module('angApp', [ 'ngRoute', 'angCtrlMod']); 

app.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'views/first.html', 
        controller: 'angCtrl'
    })

        .when('/second', {
        templateUrl: 'views/second.html', 
        controller: 'angCtrl2'
    })

});
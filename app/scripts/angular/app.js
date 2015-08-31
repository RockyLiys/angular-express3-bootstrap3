'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: '/views/welcome.html', controller: 'WelcomeCtrl'})
        .when('http/',{templateUrl: '/views/http_get.html', controller: 'HttpgetCtrl'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);


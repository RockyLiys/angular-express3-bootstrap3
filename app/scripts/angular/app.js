'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
<<<<<<< HEAD
        .when('/', {templateUrl: '/views/welcome.html', controller: 'WelcomeCtrl'})
        .when('http/',{templateUrl: '/views/http_get.html', controller: 'HttpgetCtrl'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);


=======
        .when('/', {templateUrl: '/views/tpl/welcome.html', controller: 'WelcomeCtrl'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);
>>>>>>> 46d6bb774e300aa1de6f5ac96870e0359ff30a4f

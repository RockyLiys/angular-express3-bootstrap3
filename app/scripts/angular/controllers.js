'use strict';

function WelcomeCtrl($scope){
    $scope.username = 'Conan_Z';
<<<<<<< HEAD
}

function HttpgetCtrl($scope, $http){
    $http.jsonp('http://192.168.1.129:9000/v1.0/get?testcallback=JSON_CALLBACK', {
        headers: {'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded'
                }
    }).success(function(data, status, headers, config){
        console.log(status);
        $scope.name = data.name;
        $timeout(function(){
            //do sth later, such as log
        }, 0, false);
    }).error(function(data, status, headers, config){
        // do sth , such as error process
        console.log(status);
        console.log(headers);
        console.log(config);
    });
=======
>>>>>>> 46d6bb774e300aa1de6f5ac96870e0359ff30a4f
}
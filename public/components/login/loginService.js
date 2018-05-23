angular.module('postko.login').controller('loginController', function(APP_CONFIG, $scope, $rootScope, $state, $stateParams, $http){

    console.log($stateParams);

    $scope.userLogin = {
        email: $stateParams.email,
        password: ""
    };
});


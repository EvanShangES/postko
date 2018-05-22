angular.module('postko.signup').controller('signupController', function(APP_CONFIG, $scope, $state, $stateParams, $http){

    $scope.init = {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        password: null,
        confirmPassword: null,
        wechat: null
    };

    // $scope.$watch('init.email', function(){
    //     if($scope.init.email != null && $scope.init.email !== "") {
    //         var valid = validateEmail($scope.init.email);
    //         if (valid) {
    //             var req = {
    //                 method: 'GET',
    //                 url: APP_CONFIG.apiUrl + '/email/' + $scope.init.email
    //             };
    //             $http(req).then(function(res) {
    //                 console.log(res);
    //                 if(!res.data){
    //                     document.getElementById("initEmail").style.borderColor = "green";
    //                 }
    //             });
    //         }
    //             document.getElementById("initEmail").style.borderColor = "red";
    //
    //     }
    // });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    var pattern = {
        charLength: function() {
            if($scope.init.password.length >= 8 ) {
                return true;
            }
        },
        lowercase: function() {
            var regex = /^(?=.*[a-z]).+$/;

            if( regex.test($scope.init.password) ) {
                return true;
            }
        },
        uppercase: function() {
            var regex = /^(?=.*[A-Z]).+$/;

            if( regex.test($scope.init.password) ) {
                return true;
            }
        },
        special: function() {
            var regex = /^(?=.*[0-9_\W]).+$/;

            if( regex.test($scope.init.password) ) {
                return true;
            }
        }
    };

    $scope.$watch('init.password', function(){
        var charLen = pattern.charLength();
        var lowercase = pattern.lowercase();
        var uppercase = pattern.uppercase();
        var special = pattern.special();

        if(charLen && lowercase && uppercase && special){
            document.getElementById("initPass").style.borderColor = "green";

        }else{
            document.getElementById("initPass").style.borderColor = "red";
        }
    });

    $scope.$watch('init.confirmPassword', function(){
        if($scope.init.password != null && $scope.init.password !== ""){
            if($scope.init.password === $scope.init.confirmPassword){
                document.getElementById("initPassConfirm").style.borderColor = "green";
            }else{
                document.getElementById("initPassConfirm").style.borderColor = "red";
            }
        }
    });


    // $scope.register = function(newUser){
    //     var req = {
    //         method: 'POST',
    //         url: APP_CONFIG.apiUrl + '/register',
    //         data: newUser
    //     };
    //
    //     $http(req).then(function(res){
    //         console.log(res);
    //
    //         // var req = {
    //         //     method: 'POST',
    //         //     url: apiUrl + '/api/login',
    //         //     data: res.user
    //         // };
    //
    //
    //         $state.go('home.login', {email: res.data.user.profile.email});
    //         // $state.transitionTo('home.login', {email: res.data.user.local.email});
    //     })
    // };
});

// angular.module('registerService', []).factory('Nerd', ['$http', function($http) {
//
//     return {
//         // call to get all nerds
//         get : function() {
//             return $http.get('/api/nerds');
//         },
//
//         // these will work when more API routes are defined on the Node side of things
//         // call to POST and create a new nerd
//         create : function(nerdData) {
//             return $http.post('/api/nerds', nerdData);
//         },
//
//         // call to DELETE a nerd
//         delete : function(id) {
//             return $http.delete('/api/nerds/' + id);
//         }
//     }
//
// }]);
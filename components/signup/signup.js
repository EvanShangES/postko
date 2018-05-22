angular.module('postko.signup', ['ui.router'])
    .config(function($stateProvider){
        $stateProvider
            .state('home.signup',{
                url: 'signup',
                views: {
                    "contentHome@home":{
                        templateUrl: 'components/signup/signup.html',
                        controller : 'signupController'
                    }
                }
            });
    });
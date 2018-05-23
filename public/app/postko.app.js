/**
 * Created by Evan on 2018-01-18.
 */
var postko = angular.module ($appId, $dependencies);
postko.constant('APP_CONFIG', window.appConfig);

postko.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                navbar: {
                    templateUrl: 'components/layout/homeNav.html'
                },
                footer: {
                    templateUrl: 'components/layout/footer.html'
                },
                root: {
                    templateUrl: 'components/home/home.html'
                },
                "contentHome@home":{
                    templateUrl: 'components/home/landing/landing.html'
                }
            }
        })

        .state('home.about',{
            url: 'about',
            views: {
                "contentHome@home":{
                    templateUrl: 'components/home/about/about.html',
                }
            }
        })

        .state('home.fly',{
            url: 'fly',
            views: {
                "contentHome@home":{
                    templateUrl: 'components/home/fly/fly.html',
                }
            }
        })

        .state('home.ship',{
            url: 'ship',
            views: {
                "contentHome@home":{
                    templateUrl: 'components/home/ship/ship.html',
                }
            }
        })

        .state('home.faq',{
            url: 'faq',
            views: {
                "contentHome@home":{
                    templateUrl: 'components/home/faq/faq.html',
                }
            }
        });

});

postko.run(function($rootScope, $http, $transitions, APP_CONFIG, $state){
    $rootScope.loggedIn = null;
    $rootScope.currentState = null;
    $rootScope.userInfo = {};

    // $transitions.onStart({}, function(transition) {
    //     var req = {
    //         method: 'GET',
    //         url: APP_CONFIG.apiUrl + '/loggedIn'
    //     };
    //
    //     $http(req).then(function(res) {
    //         $rootScope.loggedIn = res.data;
    //         console.log($rootScope.loggedIn);
    //
    //         if(transition.to().name.split('.')[0] === 'user' && !$rootScope.loggedIn){
    //             $state.transitionTo('home');
    //         }
    //
    //         if(transition.to().name === 'home.login' && $rootScope.loggedIn){
    //             $state.transitionTo('home');
    //         }
    //
    //         if(transition.to().name === 'home.register' && $rootScope.loggedIn){
    //             $state.transitionTo('home');
    //         }
    //     });
    //
    //     $rootScope.currentState = transition.to().name.split('.')[0];
    //
    //     console.log($rootScope.currentState);
    //
    //     console.log(
    //         "Successful Transition from " + transition.from().name +
    //         " to " + transition.to().name
    //     );
    // });

    $rootScope.signup = function (user){
        var req = {
            method: 'POST',
            url: APP_CONFIG.apiUrl + '/register',
            data: user
        };

        $http(req).then(function(res){
            console.log(res);


            $state.go('home.login', {email: res.data.user.profile.email});
            // $state.transitionTo('home.login', {email: res.data.user.local.email});
        })
    };

    $rootScope.login = function (user){
        var req = {
            method: 'POST',
            url: APP_CONFIG.apiUrl + '/login',
            data: user
        };
        console.log(req);

        $http(req).then(function(res){
            console.log(res);
            $rootScope.loggedIn = res.data.loggedIn;
            $rootScope.userId = res.data.userId;
            $rootScope.userInfo = res.data.user;

            $state.transitionTo('user');
        })

    };

    $rootScope.logout = function (){
        var req = {
            method: 'GET',
            url: APP_CONFIG.apiUrl + '/logout'
        };

        $http(req).then(function(res) {
            console.log(res);
            $rootScope.loggedIn = res.data;
            $rootScope.userId = null;
            $rootScope.userInfo = null;

            $state.transitionTo('home');
        })
    };

    console.log('hello');
});

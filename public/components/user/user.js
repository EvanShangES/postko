angular.module('postko.user', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('user', {
                url: '/profile',
                views: {
                    navbar: {
                        templateUrl: 'components/layout/homeNav.html'
                    },
                    footer: {
                        templateUrl: 'components/layout/footer.html'
                    },
                    root: {
                        templateUrl: 'components/user/userHome.html',
                        controller: 'userHomeController'
                    },
                    "contentUser@user":{
                        templateUrl: 'components/user/flight/flight.html',
                        controller : 'flightController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/home');
    });
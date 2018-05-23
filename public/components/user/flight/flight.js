angular.module('postko.user.flight', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.user.flight', {
                url: '/flight',
                views: {
                    "contentUser@user":{
                        templateUrl: 'component/flight/flight.html',
                        controller : 'flightController'
                    }
                }
            });
    });
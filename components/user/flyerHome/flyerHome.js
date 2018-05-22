angular.module('postko.flyerHome', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.flyerHome', {
                url: '/flyerHome',
                views: {
                    "content@postko":{
                        templateUrl: 'component/flyerHome/flyerHome.html',
                        controller : 'flyerHomeController'
                    }
                }
            });
    });
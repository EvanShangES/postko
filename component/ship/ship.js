/**
 * Created by Evan on 2018-03-12.
 */

angular.module('postko.ship', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.ship', {
                url: '/shipping',
                views: {
                    "content@postko":{
                        templateUrl: 'component/ship/ship.html',
                        controller : 'shipController'
                    }
                }
            });
    });
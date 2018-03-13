/**
 * Created by Evan on 2018-03-12.
 */

angular.module('postko.fly', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.fly', {
                url: '/fly',
                views: {
                    "content@postko":{
                        templateUrl: 'component/fly/fly.html',
                        controller : 'flyController'
                    }
                }
            });
    });
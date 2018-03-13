/**
 * Created by Evan on 2018-03-12.
 */

angular.module('postko.corporate', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.corporate', {
                url: '/corporate',
                views: {
                    "content@postko":{
                        templateUrl: 'component/corporate/corporate.html',
                        controller : 'corporateController'
                    }
                }
            });
    });
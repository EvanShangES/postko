/**
 * Created by Evan on 2018-03-12.
 */

angular.module('postko.faq', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.faq', {
                url: '/faq',
                views: {
                    "content@postko":{
                        templateUrl: 'component/faq/faq.html',
                        controller : 'faqController'
                    }
                }
            });
    });
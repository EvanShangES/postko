/**
 * Created by Evan on 2018-03-04.
 */
/**
 * Created by Evan Shang on 2017-05-12.
 */
angular.module('postko.about', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.about', {
                url: '/about',
                views: {
                    "content@postko":{
                        templateUrl: 'component/about/about.html',
                        controller : 'aboutController'
                    }
                }
            });
    });
/**
 * Created by Evan Shang on 2017-05-12.
 */
angular.module('postko.home', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.home', {
               url: '/home',
               views: {
                   "content@postko":{
                       templateUrl: 'component/home/views/home1.html',
                       controller : 'homeController'
                   }
               }
            });
    });
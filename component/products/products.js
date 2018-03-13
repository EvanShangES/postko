/**
 * Created by Evan on 2018-03-04.
 */
angular.module('postko.products', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('postko.products', {
                url: '/products',
                views: {
                    "content@postko":{
                        templateUrl: 'component/products/products.html',
                        controller : 'productsController'
                    }
                }
            });
    });
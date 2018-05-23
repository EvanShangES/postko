/**
 * Created by Evan Shang on 2017-05-12.
 */

angular.module('postko.layout', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        console.log('layout loaded');
        $stateProvider
            .state('postko', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'component/layout/layout.tpl.html',
                        controller: 'layoutController'
                    }
                }

            });
        $urlRouterProvider.otherwise('/home');
    });
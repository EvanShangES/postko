/**
 * Created by Evan on 2018-01-18.
 */
var postko = angular.module ($appId, $dependencies);
postko.constant('APP_CONFIG', window.appConfig);

postko.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                navbar: {
                    templateUrl: 'components/layout/homeNav.html'
                },
                footer: {
                    templateUrl: 'components/layout/footer.html'
                },
                root: {
                    templateUrl: 'components/home/home.html'
                },
                "contentHome@home":{
                    templateUrl: 'components/home/landing/landing.html'
                }
            }
        })

        .state('home.about',{
            url: 'about',
            views: {
                "contentHome@home":{
                    templateUrl: 'components/home/about/about.html',
                }
            }
        })

        .state('home.fly',{
            url: 'fly',
            views: {
                "contentHome@home":{
                    templateUrl: 'components/home/fly/fly.html',
                }
            }
        })

        .state('home.ship',{
            url: 'ship',
            views: {
                "contentHome@home":{
                    templateUrl: 'components/home/ship/ship.html',
                }
            }
        })

        .state('home.faq',{
            url: 'faq',
            views: {
                "contentHome@home":{
                    templateUrl: 'components/home/faq/faq.html',
                }
            }
        });

});
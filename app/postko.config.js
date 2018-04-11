/**
 * Created by Evan on 2018-01-18.
 */
'use strict';

var appConfig = window.appConfig || {};

window.appConfig = appConfig;

/******************************************************************************
 * Configurations : Components and Dependencies
 ******************************************************************************/
'use strict';

var $appId = 'postko';

var $dependencies = [
    'ui.router'
];

var $components = [
    'postko.layout',
    'postko.home',
    'postko.fly',
    'postko.flyerHome',
    'postko.ship',
    'postko.corporate',
    'postko.about',
    //'postko.support',
    'postko.faq'
    //'postko.quote'
    //'yixue.auth',
    //'yixue.start_here'
];

$dependencies = $dependencies.concat($components);
'use strict';


// Declare app level module which depends on filters, and services
angular.module('App', ['App.controllers', 'App.filters', 'App.services', 'App.directives', 'ngMobile']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/requirement', {templateUrl:'partials/requirement.html'}).
            when('/framework', {templateUrl:'partials/framework.html'}).
            when('/extra', {templateUrl:'partials/extra.html'}).
            when('/reflection', {templateUrl:'partials/reflection.html'}).
            when('/deployment', {templateUrl:'partials/deployment.html', controller:'PageCtrl'}).
            when('/prototype', {templateUrl:'partials/prototype.html'}).
            when('/admin', {templateUrl:'partials/admin.html'}).
            when('/webservice', {templateUrl:'partials/webservice.html'}).
            otherwise({redirectTo:'/requirement'});
        $locationProvider.html5Mode(false);
    }]);




// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            // Swap it in and reload the page to get the new hotness.
            window.applicationCache.swapCache();
            if (confirm('A new version of this site is available. Load it?')) {
                window.location.reload();
            }
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);

}, false);
'use strict';

var app = angular.module('App', ['App.filters', 'App.services', 'App.directives', 'App.controllers', 'ui', 'ui.bootstrap']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/page/1', {templateUrl:'partials/page1.html', controller:'PageCtrl'}).
            when('/page/2', {templateUrl:'partials/page2.html', controller:'PageCtrl'}).
            when('/page/3', {templateUrl:'partials/page3.html', controller:'PageCtrl'}).
            when('/page/4', {templateUrl:'partials/page4.html', controller:'PageCtrl'}).
            when('/page/5', {templateUrl:'partials/page5.html', controller:'PageCtrl'}).
            otherwise({redirectTo:'/page/1'});
        $locationProvider.html5Mode(false);
    }]);
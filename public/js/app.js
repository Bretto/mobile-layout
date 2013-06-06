'use strict';

var app = angular.module('App', ['App.filters', 'App.services', 'App.directives', 'App.controllers', 'ui', 'ui.bootstrap']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/requirement', {templateUrl:'partials/requirement.html'}).
            when('/framework', {templateUrl:'partials/framework.html'}).
            when('/extra', {templateUrl:'partials/extra.html'}).
            when('/reflection', {templateUrl:'partials/reflection.html'}).
            when('/deployment', {templateUrl:'partials/deployment.html', controller:'PageCtrl'}).
            when('/prototype', {templateUrl:'partials/prototype.html'}).
            otherwise({redirectTo:'/requirement'});
        $locationProvider.html5Mode(false);
    }]);
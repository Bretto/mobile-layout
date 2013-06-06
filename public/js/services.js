'use strict';

var services = angular.module('App.services', []);

services.factory('DataModel', function ($http, $log, $rootScope, $routeParams, $location) {

    var dataModel = {};
    dataModel.toggleViewOpen = true;
    dataModel.pages = [{title:'Page: 1'}, {title:'Page: 2'}, {title:'Page: 3'}, {title:'Page: 4'}, {title:'Page: 5'}];


    return dataModel;
});

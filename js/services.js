'use strict';

var services = angular.module('App.services', []);

services.factory('DataModel', function ($http, $log, $rootScope, $routeParams, $location) {

    var annonces = [];
    var search = {}

    var dataModel = {
        annonces:annonces,
        search:search
    };

    return dataModel;
});

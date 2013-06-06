'use strict';
/* App Controllers */

var controllers = angular.module('App.controllers', []);


controllers.controller('MainCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel) {
    $log.info('MainCtrl');

    $scope.dataModel = DataModel;



});

controllers.controller('PageCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel) {
    $log.info('PageCtrl');

});









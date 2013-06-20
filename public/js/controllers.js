'use strict';
/* App Controllers */

var controllers = angular.module('App.controllers', []);


controllers.controller('MainCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel) {
    $log.info('MainCtrl');

    $scope.dataModel = DataModel;

    $scope.swipeLeft = function(){
        $log.info('swipeLeft');
        DataModel.toggleViewOpen = false;
    }

    $scope.swipeRight = function(){
        $log.info('swipeRight');
        DataModel.toggleViewOpen = true;
    }

});


controllers.controller('PrimaryNavCtrl', function ($scope, $rootScope, $routeParams, $timeout, $log, $http, DataModel) {
    $log.info('PriNavCtrl');

//    $rootScope.$on('$routeChangeStart',function(scope,next,current){
//        $log.info('$routeChangeStart');
//
//    })

    $scope.dataModel = DataModel;

});

controllers.controller('PageCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel) {
    $log.info('PageCtrl');

});









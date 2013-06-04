'use strict';
/* App Controllers */

var controllers = angular.module('App.controllers', []);


controllers.controller('MainCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel) {
    $log.info('MainCtrl');

    $scope.dataModel = DataModel;



});

controllers.controller('SearchCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel) {
    $log.info('SearchCtrl');

    $scope.$watch(function(){ return $scope.search }, function(v){
        DataModel.search = v;
    })

    $scope.ages = [ {name: "moin d'un jour", data: "1"},
                    {name: "moin de deux jour", data: "2"},
                    {name: "moin de trois jour", data: "3"},
                    {name: "moin d'une semaine", data: "7"},
                    {name: "pas de limit", data: "1000"}];


    $scope.onSubmit = function (searchType) {
//        $log.info(searchType);

        var sT = moment();

        $http.get('/search/' + searchType)
            .success(function (data) {
                $scope.resCnt = data.length;
                DataModel.annonces = data;
                var eT = moment();
                $scope.resTime = eT.diff(sT,'seconds');
            });
    }

});

controllers.controller('AnnoncesCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel) {
    $log.info('AnnoncesCtrl');

    $scope.$watch(function(){ return DataModel.annonces }, function(v){
        $scope.annonces = DataModel.annonces;
    })

    $scope.$watch(function(){ return DataModel.search }, function(v){
        $scope.search = DataModel.search;
        
        //this is a test
    })

//    $scope.annonces = DataModel.annonces;

//    $scope.annonces.length = 0;
//    Array.prototype.push.apply($scope.annonces, DataModel.annonces);

});












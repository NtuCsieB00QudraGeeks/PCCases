'use strict';

var salleryControllers = angular.module('salleryControllers', []);

salleryControllers.controller('SalleryListCrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('/api/sallery-list').success(function(data) {
      		$scope.datas = data.result;
    	});
		$scope.orderProp = 'name';
	}]);

salleryControllers.controller('SalleryInfoCrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){
		//$scope.aaa = $routeParams.salleryId;
		var myreq = {};
		myreq.salleryid = $routeParams.salleryId;
		$http.post('/api/sallery-info', myreq).success(function(data) {
      		$scope.datas = data.result;
    	});
	}]);
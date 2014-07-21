'use strict';

var salleryControllers = angular.module('salleryControllers', []);

salleryControllers.controller('SalleryListCrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('/api/sallery-list').success(function(data) {
      		$scope.datas = data.result;
    	});

		$scope.orderProp = 'name';
	}]);

salleryControllers.controller('SalleryInfoCrl', ['$scope', '$http',
	function($scope){
		$http.get('/api/sallery-info').success(function(data) {
      		$scope.datas = data.result;
    	});
	}])
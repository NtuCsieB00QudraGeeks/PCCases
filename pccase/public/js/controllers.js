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

salleryControllers.controller('RollCallCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('/api/rollcall').success(function(data) {
      		$scope.datas = data.result;
    	});
    	/*$scope.monthlist = [ 
      			"1"
      			"2"
      			"3"
      			"4"
      			"5"
      			"6"
      			"7"
      			"8"
      			"9"
      			"10"
      			"11"
      			"12"
      		];*/
	}])
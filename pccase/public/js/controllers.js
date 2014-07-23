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
	}])

salleryControllers.controller('RollCallCtrl', ['$scope', '$http',
	function($scope, $http){
		$scope.month = "1";
		$scope.date = "1";
		$scope.monthlist = [ 
      			"1",
      			"2",
      			"3",
      			"4",
      			"5",
      			"6",
      			"7",
      			"8",
      			"9",
      			"10",
      			"11",
      			"12"
      	];
      	$scope.datelist = [ 
      			"1",
      			"2",
      			"3",
      			"4",
      			"5",
      			"6",
      			"7",
      			"8",
      			"9",
      			"10",
      			"11",
      			"12",
      			"13",
      			"14",
      			"15",
      			"16",
      			"17",
      			"18",
      			"19",
      			"20",
      			"21",
      			"22",
      			"23",
      			"24",
      			"25",
      			"26",
      			"27",
      			"28",
      			"29",
      			"30",
      			"31"
      	];

      	$scope.buildRollcall = function() {
      		var item = {};
      		item.month = $scope.month;
      		item.date = $scope.date;
      		alert(item.month);
			// $http.post('/api/rollcall', item).success(function(data) {
 	 // 	     	$scope.datas = data.result;
   //   		});
		}
    	
	}])


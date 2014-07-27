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

salleryControllers.controller('RollCallCtrl', ['$scope', '$http', '$location', '$route',
      function($scope, $http, $location, $route){
            $http.post('/api/showrollcall', {}).success(function(data) {
                  $scope.datas = data.result;
            });
            $scope.create = function ( path ) {
                  // console.log(path);
                  $location.path( path );
            };
      }]);

salleryControllers.controller('BuildRollCallCtrl', ['$scope', '$http', '$location', '$route',
	function($scope, $http, $location, $route){
            var initial = 0;
            $scope.year = "--請選擇--";
		$scope.month = "--請選擇--";
		$scope.date = "--請選擇--";
            $scope.class = "--請選擇--";
            $scope.teacher = "--請選擇--";
            $scope.section = "--請選擇--";
            $scope.people = "--請選擇--";
            $scope.yearlist = [
                  "2011",
                  "2012",
                  "2013",
                  "2014",
                  "2015",
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020"
            ];
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
            $scope.sectionlist = [
                        "1",
                        "6",
                        "8",
                        "10",
                        "12",
                        "14"
            ];
            $scope.peoplelist = [
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
                        "20"
            ];

            $scope.student = [];

            $http.post('/api/findClass', {}).success(function(data) {
                  if(data.result.class == "" && data.result.teacher == "")
                        initial = -1;
                  $scope.classlist = data.result.class;
                  $scope.teacherlist = data.result.teacher;
            });

            $scope.addStudent = function(id, student_name) {
                  console.log(id + "~~~" + student_name);
                  $scope.student[id] = student_name;
            };

      	$scope.buildRollcall = function() {
      		var item = {};
                  if($scope.newclass == ""){
                        item.class = $scope.class;
                  }
                  else
                        item.class = $scope.newclass;

                  if($scope.newteacher == ""){
                        item.teacher = $scope.teacher;
                  }
                  else
                        item.teacher = $scope.newteacher;
                  // check student
                  // for(i = 0; i < $scope.student.length; i++){
                  //       if($scope.student == ""){
                  //             reject = 1;
                  //             alert("error");
                  //       }
                  // }

                  item.student = $scope.student;
                  item.initial = initial;

                  console.log(item.student);
                  // if(reject == 0){
      			$http.post('/api/buildrollcall1', item).success(function(data) {
                              item.year = $scope.year;
                              if($scope.month.length == 1)
                                    item.month = "0" + $scope.month;
                              else
                                    item.month = $scope.month;
                              if($scope.date.length == 1)
                                    item.date = "0" + $scope.date;
                              else
                                    item.date = $scope.date;
                              item.section = $scope.section;
                              item.id = item.teacher + item.year + "-" + item.month + "-" + item.date;
                              // need time(not yet now)
                              $http.post('/api/buildrollcall2', item).success(function(temp){
                                    // $route.reload();
                                    alert("success");
                                    $location.path('/rollcall');
                              });
           		      });
                  // }
		};
    	
	}]);

salleryControllers.controller('BuildClassCtrl', ['$scope', '$http', '$route', 'routeParams',
      function($scope, $http, $route, $routeParams){
            var myreq = {};
            myreq.rollcallid = $routeParams.rollcallId;
            $http.post('/api/rollcall-info', myreq).success(function(data) {
                  $scope.datas = data.result;
            });
      }]);

'use strict';

var onePiece = angular.module('pccase', ['ngRoute', 'salleryControllers'], function($routeProvider){
    $routeProvider.
        when('/', {
        	templateUrl: 'views/index.ejs', 
        }).
        when('/about_triangle01', {
        	templateUrl: 'views/about_triangle01.ejs' 
        }).
        when('/about_triangle02', {
        	templateUrl: 'views/about_triangle02.ejs'
        }).
        when('/about_triangle03', {
        	templateUrl: 'views/about_triangle03.ejs'
        }).
        when('/about_triangle04', {
        	templateUrl: 'views/about_triangle04.ejs'
        }).
        when('/achievement01', {
        	templateUrl: 'views/achievement01.ejs'
        }).
        when('/achievement02', {
        	templateUrl: 'views/achievement02.ejs'
        }).
        when('/classroom01', {
        	templateUrl: 'views/classroom01.ejs'
        }).
        when('/classroom02', {
        	templateUrl: 'views/classroom02.ejs'
        }).
        when('/course01', {
        	templateUrl: 'views/course01.ejs'
        }).
        when('/course02', {
        	templateUrl: 'views/course02.ejs'
        }).
        when('/course03', {
        	templateUrl: 'views/course03.ejs'
        }).
        when('/course04', {
        	templateUrl: 'views/course04.ejs'
        }).
        when('/course05', {
        	templateUrl: 'views/course05.ejs'
        }).
        when('/course06', {
        	templateUrl: 'views/course06.ejs'
        }).
        when('/news01', {
        	templateUrl: 'views/news01.ejs'
        }).
        when('/news02', {
        	templateUrl: 'views/news02.ejs'
        }).
        when('/sallery', {
            templateUrl: 'views/sallery.ejs',
            controller: 'SalleryListCrl'
        }).
        when('/sallery/:salleryId', {
            templateUrl: 'views/sallery_info.ejs',
            controller: 'SalleryInfoCrl'
        }).
        when('/rollcall', {
            templateUrl: 'views/rollcall.ejs',
            // controller: ''
        }).
        otherwise({
        	redirectTo: '/'
        });
});
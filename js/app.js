var app = angular.module('MyProfile',['ngRoute']);
 app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/home',{
				templateUrl:'views/home.html',
				controller:'ProfileListCtrl'
			}).
			when('/about', {
				templateUrl:'views/about.html',
				controller:'AboutCtrl'
			}).
			when('/experience', {
				templateUrl:'views/experience.html',
				controller:'ExpCtrl'
			}).
			when('/technical', {
				templateUrl:'views/technical.html',
				controller:'TechCtrl'
			}).
			otherwise({
				redirectTo:'/home',
				
			})
			
	}]); 
	
	
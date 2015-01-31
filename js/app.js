var app = angular.module('rtfmApp', ['ngRoute','firebase']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'js/login/login.html',
		controller: 'loginCtrl'
	})
	.when('/threads', {
		templateUrl: 'js/threads/threads.html',
		controller: 'ThreadCtrl',
		resolve: {
			threadsRef: function(threadService) {
				return threadService.getThreads();
			}
		}
	})
	.when('/threads/:threadId', {
		templateUrl: 'js/singleThread/singleThread.html',
		controller:'SingleThreadCtrl',
		resolve: {
			singleThreadRef: function(threadService, $route) {
				return threadService.getSingleThread($route.current.params.threadId); 
			},
			commentsRef: function(threadService, $route) {
				return threadService.getComments($route.current.params.threadId);
			}
		}
	})
	.otherwise({
		redirectTo: '/login'
	})
});

app.run(function($rootScope, $location, EnvironmentService){

	$rootScope.$on('$routeChangeStart', function(event, next, current){
		var username = EnvironmentService.getUsername();
		if(username) {
			$rootScope.username = username;
		}	else {
			$location.path('/login');
		}

	


});









});
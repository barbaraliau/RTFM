var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, EnvironmentService, $location){

	$scope.env = EnvironmentService.getEnv();

	$scope.username = "";

	$scope.logMeIn = function(username){

		if (username !== undefined) {
			EnvironmentService.saveUsername(username)
			$location.path('/threads');
		} else if (username === undefined) {
			alert("You must enter a username!");
		}
		$scope.username = "";
	};

});


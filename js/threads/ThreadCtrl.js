var app = angular.module('rtfmApp');

app.controller('ThreadCtrl', function($scope, threadsRef,threadService, EnvironmentService){

	$scope.threads = threadsRef.$asArray();

	$scope.threads.$loaded().then(function(threads){
		console.log(threads);
	});

	$scope.createThread = function(username, title) {
		$scope.threads.$add({username: username, title: $scope.newThreadTitle
		});
		 $scope.newThreadTitle = "";
	};

});




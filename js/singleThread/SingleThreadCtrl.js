var app = angular.module('rtfmApp');

app.controller('SingleThreadCtrl', function($scope, singleThreadRef, commentsRef){
	
	var thread = singleThreadRef.$asObject();
		thread.$bindTo($scope, 'thread'); //ensures three-way binding
	
	$scope.comments = commentsRef.$asArray();

	 $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
     $scope.newCommentText = "";
    };

});



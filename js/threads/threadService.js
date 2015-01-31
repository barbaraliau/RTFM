var app = angular.module('rtfmApp');

app.service('threadService', function($firebase, EnvironmentService){

	var firebaseUrl = EnvironmentService.getEnv().firebase;

	this.getThreads = function(){
		return $firebase(new Firebase(firebaseUrl + '/threads/'));
	};

	this.getSingleThread = function(threadId){
		return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
	};

	this.getComments = function(threadId) {
		return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'));
	};


});

// var url = EnvironmentService.getEnv().firebase;
// var ref = new Firebase(url);
// var thing = $firebase(ref);
// var thingObject = thing.$asObject();
// var thingArray = thing.$asArray();

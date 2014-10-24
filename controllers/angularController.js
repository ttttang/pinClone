var pinApp = angular.module("pinterest", ["firebase"]); //making firebase a dependency for my module//


// <!-- to display each post!-->

pinApp.controller('mailman1', function($scope, $firebase){
	var postRef = new Firebase('https://pinclone.firebaseio.com/posts'); //connect my controller to the firebase data-storage//
	var sync = $firebase(postRef); // create object out of firebase data
	$scope.tracy=sync.$asArray(); //change firebase object into array


// to add a new post //

$scope.addPost = function(x, y, z, a, b){
			var bedit=b.split(" , ");

			$scope.tracy.$add({image_url:x, goal:y, importance:z, time:a, category:bedit});		
			$scope.pics="";
			$scope.goal="";
			$scope.importance="";
			$scope.time="";
			$scope.category="";

		}

// to delete a post //

$scope.deletePost=function(postName){
			var check = confirm("Are You Sure You Want To Delete This Post??");
			if(check==true){
			$scope.tracy.$remove(postName);
			}
		}

})
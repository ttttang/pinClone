var pinApp = angular.module("pinterest", []);

// <!-- to display each post!-->

pinApp.controller('pinController', function($scope){
	$scope.tracy=posts;


// to add a new post //

$scope.addPost = function(x, y, z, a, b){
			var aedit=b.split(" , ");

			$scope.tracy.push({image_url:x, goal:y, importance:z, time:a, category:bedit})
		
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
			$scope.tracy.splice(postName, 1);}
		}










})
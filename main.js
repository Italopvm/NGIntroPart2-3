angular.module('Colorado',[]);

angular.module('Colorado')
	.controller('denver', [
		  '$scope',
		  denverCtrl
]);

	

function denverCtrl($scope){

	$scope.part2 = "LETS GET EXCITED";

 	$scope.excited = "!!!!!";

 	$scope.turnPink = function(){
 	$scope.changeColor= {'background-color' : 'pink'}
	 }
	 $scope.box = function(){
	 	$scope.bye=false;

	 	var x = confirm('are you sure you like to used this link');
	 	if(x==false){
	 		$scope.bye=true;

	 	}	
	}

}



















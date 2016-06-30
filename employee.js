var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "Bala";
    $scope.address="Your Address";
    $scope.email="Enter a valid email";
    // $scope.employement="Please select an option";
    // $scope.firstname="jhon";

    $scope.employee = [{type: 'Fulltime'},
    				{ type: 'Contract'},
    				{ type: 'C2C'}];


$scope.getname=function (){
	alert("Entered Name is "+ $scope.name);
}
});
'use strict';

// Define the `automatApp` module
var automatApp = angular.module('automatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
automatApp.controller('MarkListController', function MarkListController($scope) {
	$scope.absCheck = function(){
		var res = (($scope.missedVal / $scope.hoursVal)*100);
		$scope.result =('Пропущено '+ res.toFixed(2) + '% занятий');
		if (res<10){
			$scope.flag = true;
		}
		else{
			$scope.flag = false;
		}
			
		
	};
});



var counter = 0;
var marksArray = {};
		
function addMark(){
	var newMark=document.createElement('div');
	counter++;
	newMark.innerHTML="<input type='number' id='mark" + counter +"' maxlength = 1 size = 1 max = 5 min = 1 class ='form-control'><p></p>";
	document.getElementById('marks').appendChild(newMark);
};
			
function rmMark(){
	counter--;
	document.getElementById('marks').removeChild(document.getElementById('marks').getElementsByTagName('div')[document.getElementById('marks').getElementsByTagName('div').length-1]);
};



			
			


			



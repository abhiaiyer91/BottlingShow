'use strict';

window.app.controller('bioCtrl', ['$scope', 'officer', 'getName', 'Error', function ($scope, officer, getName, Error) {
	$scope.officer = officer;
	$scope.officer.name = getName(officer.link);

}]);
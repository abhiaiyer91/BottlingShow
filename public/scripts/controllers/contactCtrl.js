'use strict';

window.app.controller('contactCtrl', ['$scope', 'emailService', 'Error', '$rootScope', function ($scope, emailService, Error, $rootScope) {
	$scope.contact = {};

	function successHandler(){
		$rootScope.upLoading = false;
		Error(null,'Thank you, we will be in touch with you soon!');
	}

	function errorHandler(e){
		$rootScope.upLoading = false;
		Error(e, 'There was an error submitting your form. Please try again or see the console for more details.');
	}

	$scope.postEmail = function(data){
		$rootScope.upLoading = true;
		emailService.sendEmail(data).then(successHandler, errorHandler);
		$scope.contact = {};
		window.scrollTo(0,0);
	}
}]);

'use strict';

window.app.factory('Error', ['errAlert', function (errAlert) {
	return function (err, message) {
		if (message) {
			errAlert(message);
			if(err) console.log(err)
		} else {
			errAlert(err);
			console.log(err);
		}
	};
}]);

window.app.factory('errAlert', ['$modal', function ($modal) {
	return function (mes) {
		$modal.open({
			template:'<br><br><h2 class="text-center">'+mes+'</h2><br><br>',
			size:'sm'
		});
	};
}]);


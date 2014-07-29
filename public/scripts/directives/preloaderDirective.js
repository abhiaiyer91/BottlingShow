'use strict';

window.app.directive('preloader', ['$rootScope', function($rootScope){
  return {
    restrict: 'A',
    link: function(scope, elm, attrs){
      window.on('load', function(){
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
      });
    }
  };
}]);

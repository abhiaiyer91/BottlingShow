'use strict';

window.app.controller('MainCtrl', ['$scope', 'Partners', 'ProductsTop', '$location', function ($scope, Partners, ProductsTop, $location) {
    $scope.partners = Partners.partners;
    $scope.productsTop = ProductsTop.productsTop;

    $scope.isCollapsed = true;
    console.log($scope.isCollapsed);
    $scope.goto = function(link){
      $location.path('/'+link);
      $scope.isCollapsed = false;
    }
  }]);

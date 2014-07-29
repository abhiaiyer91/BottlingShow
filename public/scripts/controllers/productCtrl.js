
'use strict';

window.app.factory('categorySplit', function () {
  return function (prods) {
    prods.forEach(function (prod) {
      if (typeof prod.category==="string") {
        prod.category = prod.category.split(',');
      }
    });
    return prods;
  }
})

window.app.controller('productCtrl', function($scope, $route, ProductsTop, categorySplit) {
  $scope.path = $route.current.params['type'];
  $scope.productsTop = ProductsTop.productsTop;
  $scope.beverages = categorySplit(ProductsTop.beverages);
  $scope.snacks = categorySplit(ProductsTop.snacks);
  $scope.bevFilter = {category: '!Syrup'};
  $scope.prodShow = true;
  $scope.active = '!Syrup';
  $scope.show = function(bev){
    this.showSlide = true;
    this.prodShow = false;
  };
  $scope.unshow = function(bev){
    this.showSlide = false;
    this.prodShow = true;
  };
  $scope.narrow = function (obj) {
    $scope.bevFilter = obj;
    $scope.active = obj.category;
    $scope.equal = true;
    $scope.unequal = false;
  };
  $scope.narrowS = function (obj) {
    $scope.snackFilter = obj;
    if (obj === null) {
      $scope.active = null;
      $scope.selected = null;
      $scope.equal = $scope.active === $scope.selected;
    }
    else {
      $scope.active = obj.category;
      $scope.selected = obj
      $scope.equal = $scope.active === $scope.selected.category;
      $scope.unequal = false;
    }
  }
});

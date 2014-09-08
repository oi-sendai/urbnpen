'use strict';
console.log('productController');

var productController = angular.module('productController',[]);

productController.controller('productController',function(
  $scope, 
  $http, 
  $resource,
  IngredientFactory
  ) {
    $scope.debug = 'js/blog/public/productController';
    $scope.products =  {};
  
  function init() {
    IngredientFactory.getIngredients().then(function(response) {
      console.log(response)
        $scope.products = response.data;
    });
  }
  init();
});
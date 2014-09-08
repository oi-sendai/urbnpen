'use strict';
console.log('orderController');

var productController = angular.module('orderController',[]);

productController.controller('orderController',function(
  $scope, 
  $http, 
  OrderFactory
  ) {
    $scope.debug = 'js/shop/order/orderController';
    $scope.orders =  {};
  
  function init() {
    OrderFactory.getOrders().then(function(response) {
      console.log(response)
        $scope.orders = response.data;
    });
  }
  init();
});
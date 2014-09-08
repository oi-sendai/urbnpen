var contactController = angular.module('contactController',[]);

contactController.controller('contactController',
  function(
  $scope, 
  $http, 
  OrderFactory
  ) {
    $scope.debug = 'js/blog/public/contactController';

    $scope.formData = {};


    $scope.createOrder = function(){
      OrderFactory.insertOrder($scope.formData).then(function(response) {

      console.log(response);
      $scope.formData = {}; // clear the form so our user is ready to enter another
      // $scope.ingredients = response.data;
    }); 
  }



});

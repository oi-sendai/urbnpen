var contactController = angular.module('contactController',[]);

contactController.controller('contactController',
  function(
  $scope, 
  $rootScope,
  $http, 
  OrderFactory
  ) {
    $scope.debug = 'js/blog/public/contactController';
    $rootScope.class="contact"
    $scope.formData = {};


    $scope.createOrder = function(){
      OrderFactory.insertOrder($scope.formData).then(function(response) {

      console.log(response);
      $scope.formData = {}; // clear the form so our user is ready to enter another
      // $scope.ingredients = response.data;
    }); 
  }
});

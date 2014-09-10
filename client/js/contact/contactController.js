var contactController = angular.module('contactController',[]);

contactController.controller('contactController',
  function(
  $scope, 
  $rootScope,
  $http, 
  $state,
  OrderFactory
  ) {
    $scope.debug = 'js/contact/contactController';
    $rootScope.class="contact";
    $scope.formData = {};
    $rootScope.thankyou = {};


    $scope.createOrder = function(){
      console.log('does this fire');
      OrderFactory.insertOrder($scope.formData).then(function(response) {

        console.log(response);
        console.log('this does not fire');
        // $scope.ingredients = response.data;
      }); 
      console.log('does this fire');
        $rootScope.thankyou = $scope.formData.name;//$scope.formData.name;
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.apply = {}
        $state.go('anon.success');
    }
});

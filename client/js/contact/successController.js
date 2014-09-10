var successController = angular.module('successController',[]);
successController.controller('successController',
  function(
  $scope, 
  $rootScope,
  $http, 
  $state,
  OrderFactory
  ) {
    $scope.debug = 'js/contact/successController';
    $rootScope.class="success";

    $scope.thankyou = $rootScope.thankyou;
});


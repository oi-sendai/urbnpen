// 'use strict';
var addListingController = angular.module('addListingController', []);

addListingController.controller('addListingController', function(
    $resource,
    $scope, 
    $http,
    $stateParams,
    ListingModel
    ) { 

    $scope.debug = 'js/listing/addListingController';
    $scope.formData = {};

    $scope.createListing = function(){
        ListingModel.insertListing($scope.formData).then(function(response) {
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.ingredients = response.data;
    }); 
  }

});





//'use strict';
// 'use strict';
var userController = angular.module('userController', []);

userController.controller('userController', function(
    $resource,
    $scope, 
    $http,
    $stateParams,
    UserModel
    ) { 
    $scope.debug = "js/listing/userController";

    $scope.listing;
    $scope.username = $stateParams.username;

    user = {
      "username" : "A User",
      "contactstring" : "croftnotworking@gmail.com",
      "listingid" : ["push from listing creation"],
      "location" : "Aberdeen, Scotland",
      "image" : '<i class="fa.fa-user" data-id="somestring">'
    };

    function init() {
      UserModel.showListing($scope.listingID).then(function(response) {
          $scope.listing = response.data;
      });
    }
    init();
});

eshoprShop.factory("UserModel", function($http,$resource) {
  var factory = {};
  var url = "/api/users";

  factory.getUsers = function () {
    return $http.get(url);
  };
  factory.showUser = function (id) {
    return $http.get(url + '/' + id);
  };
  factory.insertUser = function (dataObject) {
    console.log(dataObject);
    return $http.post(url, dataObject);
  };
  // factory.updateUser = function (id, dataObject) {
  //   return $http.put(url + '/' + cust.ID, cust)
  // };

  factory.deleteUser = function (id) {
        return $http.delete(url + '/' + id);
  };
  return factory
});
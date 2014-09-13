'use strict';
console.log('ListingModel');
eshoprShop.factory("ListingModel", function($http,$resource) {
  var factory = {};
  var url = "/api/isting";

  factory.getListings = function () {
    return $http.get(url);
  };
  factory.showlisting = function (id) {
    return $http.get(url + '/' + id);
  };
  // factory.insertlisting = function (dataObject) {
  //   console.log(dataObject);
  //   return $http.post(url, dataObject);
  // };
  // factory.updateUser = function (id, dataObject) {
  //   return $http.put(url + '/' + cust.ID, cust)
  // };

  factory.deleteListing = function (id) {
        return $http.delete(url + '/' + id);
  };
  return factory
});
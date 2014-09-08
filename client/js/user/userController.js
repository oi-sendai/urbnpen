//'use strict';

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
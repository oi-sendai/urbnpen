'use strict';

eshoprShop.factory("IngredientFactory", function($http,$resource) {
  var factory = {};
  var url = "/api/ingredients";

  factory.getIngredients = function () {
    return $http.get(url);
  };
  factory.showIngredient = function (id) {
    return $http.get(url + '/' + id);
  };
  factory.insertIngredient = function (dataObject) {
    console.log(dataObject);
    return $http.post(url, dataObject);
  };
  // factory.updateIngredient = function (id, dataObject) {
  //   return $http.put(url + '/' + cust.ID, cust)
  // };

  factory.deleteIngredient = function (id) {
        return $http.delete(url + '/' + id);
  };
  return factory
});

eshoprShop.factory("RecipeFactory", function($http,$resource) {
  var factory = {};
  var url = "/api/recipes";

  factory.getRecipes = function () {
    return $http.get(url);
  };
  factory.showRecipe = function (id) {
    return $http.get(url + '/' + id);
  };
  factory.insertRecipe = function (dataObject) {
    console.log(dataObject);
    return $http.post(url, dataObject);
  };
  factory.updateIngredient = function (id, dataObject) {
    return $http.put(url + '/' + cust.ID, cust)
  };

  factory.deleteIngredient = function (id) {
        return $http.delete(url + '/' + id);
  };
  return factory
});

eshoprShop.factory("PostFactory", function($http,$resource) {
  var factory = {};
  var url = "/api/posts";

  factory.getPosts = function () {
    return $http.get(url);
  };
  factory.showPost = function (id) {
    return $http.get(url + '/' + id);
  };
  factory.insertPost = function (dataObject) {
    console.log(dataObject);
    return $http.post(url, dataObject);
  };
  // factory.updatePost = function (id, dataObject) {
  //   return $http.put(url + '/' + cust.ID, cust)
  // };

  factory.deletePost = function (id) {
        return $http.delete(url + '/' + id);
  };
  return factory
});

eshoprShop.factory("DownloadsFactory", function($http,$resource) {
  var factory = {};
  var url = "/api/downloads";
});

eshoprShop.factory("OrderFactory", function($http,$resource) {
  var factory = {};
  var url = "/api/orders";

  factory.getOrders = function () {
    return $http.get(url);
  };
  factory.showOrder = function (id) {
    return $http.get(url + '/' + id);
  };
  factory.insertOrder = function (dataObject) {
    console.log(dataObject);
    return $http.post(url, dataObject);
  };
  // factory.updatePost = function (id, dataObject) {
  //   return $http.put(url + '/' + cust.ID, cust)
  // };

  factory.deleteOrder = function (id) {
        return $http.delete(url + '/' + id);
  };
  return factory
});
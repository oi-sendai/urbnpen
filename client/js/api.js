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
    // store the returned object
      // var items = items(){
      //   // this i think is an example of a closure
        return $http.get(url);
      // };

      // return {
      //   get: function(offset, limit) {
      //     return items.slice(offset, offset+limit);
      //   },
      //   total: function() {
      //     return items.length;
      //   }
      // };
  };

  factory.showPost = function (id) {
    console.log('called api');
    console.log(id);
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
    console.log(dataObject);
    return $http.delete(url + '/' + id);
  };

  factory.insertComment = function(id, dataObject) {
      console.log('postsFactory.insertComment');
      console.log('id');
      console.log(id);
      console.log('dataObject');
      console.log(dataObject);
      return $http.post(url+ '/' + id + '/comments', dataObject);
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
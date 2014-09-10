'use strict';

var publicBlogController = angular.module('publicBlogController',['ui.bootstrap']);

publicBlogController.controller('publicBlogController',function(
  $scope, 
  $http, 
  $stateParams,
  $rootScope,
  PostFactory
  ) {
    $scope.debug = 'js/blog/public/publicBlogController';
    $rootScope.class ="blog";

    $scope.postID = $stateParams.postID;

    function init() {
      PostFactory.getPosts().then(function(response) {
        console.log(response)
        $scope.posts = response.data;
      });
    }
    init();
    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;
    $scope.items = [];

    for (var i=0; i<50; i++) {
      $scope.items.push({
        id: i, name: "name "+ i, description: "description " + i
      });
    }

    $scope.prevPage = function() {
      if ($scope.currentPage > 0) {
        $scope.currentPage--;
      }
    };

    $scope.prevPageDisabled = function() {
      return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.pageCount = function() {
      return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
    };

    $scope.nextPage = function() {
      if ($scope.currentPage < $scope.pageCount()) {
        $scope.currentPage++;
      }
    };

    $scope.nextPageDisabled = function() {
      return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };
});

eshoprShop.filter('pagination', function() {
  return function(input, start) {
    // console.log(input);
    // console.log(start);
    start = +start;
    // console.log(start);
    return input.slice(start);
  };
});




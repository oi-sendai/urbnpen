'use strict';

var publicBlogController = angular.module('publicBlogController',['ui.bootstrap']);

publicBlogController.controller('publicBlogController',function(
  $scope, 
  $http, 
  $stateParams,
  PostFactory
  ) {
    $scope.debug = 'js/blog/public/publicBlogController';
    $scope.posts = 0;
    function init() {
      PostFactory.getPosts().then(function(response) {
        console.log(response)
        $scope.posts = response.data;
      });
    }
    init();
// pagination from http://angulartutorial.blogspot.ro/2014/03/client-side-pagination-using-angular-js.html
    $scope.pageSize = 1;
    $scope.curPage = 0;
    $scope.numberOfPages = function() {
      return Math.ceil($scope.posts.length / $scope.pageSize);
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

var sidebarBlogController = angular.module('sidebarBlogController',[]);

sidebarBlogController.controller('sidebarBlogController',
  function($scope){
    $scope.debug = 'js/blog/public/sidebarBlogController';
});


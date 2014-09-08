'use strict';

var publicBlogController = angular.module('publicBlogController',[]);

publicBlogController.controller('publicBlogController',function(
  $scope, 
  $http, 
  PostFactory
  ) {
    $scope.debug = 'js/blog/public/publicBlogController';
    // $scope.posts =  [
    //   {
    //     "title":"New Winter Collection",
    //     "body": "<p>Lorem  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
    //     "image": "Untitled-10.jpg"
    //   },
    //   {
    //     "title":"A walk in the city",
    //     "body": "<p>Lorem  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
    //     "image": "Untitled-401.jpg"
    //   }
    // ];
  
  function init() {
    PostFactory.getPosts().then(function(response) {
      console.log(response)
        $scope.posts = response.data;
    });
  }
  init();
});

var sidebarBlogController = angular.module('sidebarBlogController',[]);

sidebarBlogController.controller('sidebarBlogController',
  function($scope){
    $scope.debug = 'js/blog/public/sidebarBlogController';
});


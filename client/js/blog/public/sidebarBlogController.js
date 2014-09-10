
var sidebarBlogController = angular.module('sidebarBlogController',['publicBlogController']);

sidebarBlogController.controller('sidebarBlogController',
  function(
      $scope, 
      $http, 
      $stateParams,
      $rootScope,
      PostFactory
    ){
    $scope.debug = 'js/blog/public/sidebarBlogController';
});
'use strict';

var postController = angular.module('postController',['ui.bootstrap']);

postController.controller('postController',function(
  $scope, 
  $http, 
  $stateParams,
  $rootScope,
  PostFactory
  ) {
    $scope.debug = 'js/blog/public/postController';
    $rootScope.class ="blog";
    $scope.post = {};
    $scope.postID = $stateParams.postID;
    console.log($scope.postID);
    function init() {
      console.log('called');
      PostFactory.showPost($scope.postID).then(function(response) {
        console.log(response);
        $scope.post = response.data;
      });
    }
    init();

});



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
    $scope.post_id = $stateParams.post_id;
    console.log($scope.post_id);
    function init() {
      console.log('called');
      PostFactory.showPost($scope.post_id).then(function(response) {
        console.log(response);
        $scope.post = response.data;
      });
    }
    init();

});



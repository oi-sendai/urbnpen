'use strict';

var commentController = angular.module('commentController',['ui.bootstrap']);

commentController.controller('commentController',function(
  $scope, 
  $http, 
  $stateParams,
  $rootScope,
  PostFactory
  ) {
    $scope.debug = 'js/blog/public/commentController';
    $rootScope.class ="blog";

    $scope.comments = 
     [
        {"name":"user1", "message":"this is really interesting"},
        {"name":"user2", "message":"someone elses opinion"}
    ];

});


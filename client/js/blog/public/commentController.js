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

    $scope.formData = {};
    $scope.comments = 
     [
        {"name":"user1", "message":"this is really interesting"},
        {"name":"user2", "message":"someone elses opinion"}
    ];

    $scope.insertComment = function(){
        console.log('insertComment');
        console.log($scope.formData);
        PostModel.insertComment($scope.formData).then(function(response) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.comments = response.data;
        });
    }

});


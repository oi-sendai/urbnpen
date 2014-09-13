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
    $scope.post_id = $stateParams.post_id;
    $scope.formData = {};
    // $scope.comments = 
    //  [
    //     {"name":"user1", "message":"this is really interesting"},
    //     {"name":"user2", "message":"someone elses opinion"}
    // ];

    $scope.insertComment = function(id){
        // var post_id = id;
        console.log('post_id');
        console.log($scope.post_id);
        console.log('formData');
        console.log($scope.formData);
        PostFactory.insertComment($scope.post_id, $scope.formData).then(function(response) {
        // //     $scope.formData = {}; // clear the form so our user is ready to enter another
        // //     $scope.comments = response.data;
        });
    }

});


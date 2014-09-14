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
    $scope.formData = {};
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
    
    $scope.refresh = function(){
        PostFactory.showPost($scope.post_id).then(function(response) {
        console.log(response)
        $scope.post = response.data;
        // $scioe
      });
      // $scope.apply();
    }
    $scope.insertComment = function(id){
        // var post_id = id;
        console.log('post_id');
        console.log($scope.post_id);
        console.log('formData');
        console.log($scope.formData);
        PostFactory.insertComment($scope.post_id, $scope.formData).then(function(response) {
            console.log('works now');
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.comments = response.data;
            $scope.refresh(); //refreshPosts();
        });
    };

});



// 'use strict';
var adminBlogController = angular.module('adminBlogController', ['angularFileUpload']);

adminBlogController.controller('adminBlogController', function(
  $resource,
  $scope, 
  $http, 
  $upload,
  Auth,
  // FileUploader,

  PostFactory
  ) { 
  $scope.debug = 'adminBlogController';
  $scope.posts = {};
  $scope.item = {};
  $scope.formData = {'dskfjldskf':'dfsjkd'};
  $scope.user = Auth.user;
  // $scope.uploader = new FileUploader();
  // $scope.uploaderOpts = {
  //   url: '/api/uploads'
  // }

  function init() {
    PostFactory.getPosts().then(function(response) {
      console.log(response)
        $scope.posts = response.data;
    });
  }
  init();

  $scope.createPost = function(){
  	console.log($scope.formData);
    PostFactory.insertPost($scope.formData).then(function(response) {

      console.log('wy');
      console.log(response);
      $scope.posts = response.data;
    }); 
    $scope.formData = {}; // clear the form so our user is ready to enter another
    $scope.$apply;
  }

  $scope.deletePost = function(id){
    PostFactory.deletePost(id).then(function(response) {
      console.log(response);
      $scope.posts = response.data;
    });
    $scope.$apply
  }
  $scope.updatePost = function(id){
    // should accept formdata 
  }

  $scope.showPost = function(id){
    PostFactory.showPost(id).then(function(response) {
      console.log(response);
      $scope.item = response.data;
    }); 
  }

  $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: '/api/uploads', //upload.php script, node.js route, or servlet url
        method: 'POST',
        //headers: {'header-key': 'header-value'},
        //withCredentials: true,
        data: {myObj: $scope.myModelObj},
        file: file, // or list of files ($files) for html5 only
        //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
        // customize file formData name ('Content-Disposition'), server side file variable name. 
        //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
        // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
        //formDataAppender: function(formData, key, val){}
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        console.log(data);
      });
      //.error(...)
      //.then(success, error, progress); 
      // access or attach event listeners to the underlying XMLHttpRequest.
      //.xhr(function(xhr){xhr.upload.addEventListener(...)})
    }
  };

});



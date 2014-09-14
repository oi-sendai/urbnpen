// 'use strict';
var galleryController = angular.module('galleryController', ['ui.bootstrap','modalImageController']);

galleryController.controller('galleryController', function(
    $resource,
    $scope,
    $rootScope, 
    $http,
    $timeout,
    $modal
    ) { 

  	$scope.works = 'js/gallery/galleryController';
    $rootScope.class ="gallery";

	$scope.collections = [

{
    "slides": [
        {image: '/images/slides/h1.jpg', description: 'Image 00'},
        {image: '/images/slides/h2.jpg', description: 'Image 01'},
        {image: '/images/slides/h3.jpg', description: 'Image 02'},
        {image: '/images/slides/h4.jpg', description: 'Image 03'},
        {image: '/images/slides/h5.jpg', description: 'Image 04'}
    ],
    "description": "Summer Collection"
},
{
    "slides": [
        {image: '/images/slides/p1.jpg', description: 'Image 00'},
        {image: '/images/slides/p2.jpg', description: 'Image 01'},
        {image: '/images/slides/p3.jpg', description: 'Image 02'},
        {image: '/images/slides/p4.jpg', description: 'Image 03'},
        {image: '/images/slides/p5.jpg', description: 'Image 04'}
    ],
    "description": "Autumn Collection"
},
{
    "slides": [
        {image: '/images/slides/e1.jpg', description: 'Image 00'},
        {image: '/images/slides/e2.jpg', description: 'Image 01'},
        {image: '/images/slides/e3.jpg', description: 'Image 02'},
        {image: '/images/slides/e4.jpg', description: 'Image 03'},
        {image: '/images/slides/e5.jpg', description: 'Image 04'}
    ],
    "description": "Spring Collection"
},

];


    $scope.open = function(slide){
        console.log(slide);
        $modal.open({
          templateUrl: 'gallery/gallerymodal',
          // template: '<p>this is the modal</p>',
          controller: 'modalImageController',
          size: 'md',
          resolve: {
            thing: function () {
              return slide;
            }
          }
        });
    }
});
var modalImageController = angular.module('modalImageController', ['ui.bootstrap']);

modalImageController.controller('modalImageController', function
    ($scope,$modalInstance, thing) {
        console.log(thing);
  // $scope.items = items;
  $scope.thing = thing;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };


  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  console.log($scope);

});
// 'use strict';
var galleryController = angular.module('galleryController', ['ngAnimate']);

galleryController.controller('galleryController', function(
    $resource,
    $scope, 
    $http,
    RecipeFactory,
    IngredientFactory
    ) { 

  	$scope.works = 'js/gallery/galleryController';

	$scope.slides = [
	    // {image: '/images/ioana/p1.jpg', description: 'Image 00'},
	    {image: '/images/ioana/p2.jpg', description: 'Image 01'},
	    {image: '/images/ioana/p3.jpg', description: 'Image 02'},
	    {image: '/images/ioana/p4.jpg', description: 'Image 03'},
	    {image: '/images/ioana/p5.jpg', description: 'Image 04'}
	];
	      $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

                $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
        // forked from http://onehungrymind.com/build-sweet-photo-slider-angularjs-animate/

})
.animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    // ANIMATION CODE GOES HERE 
                    // TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });                   
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    // ANIMATION CODE GOES HERE
                    // TweenMax.set(element, { left: element.parent().width() });
                    // TweenMax.to(element, 0.5, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });
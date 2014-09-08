// 'use strict';
var listingController = angular.module('listingController', []);

listingController.controller('listingController', function(
    $resource,
    $scope, 
    $http,
    $stateParams,
    ListingModel
    ) { 

    // $scope.listings = [
    //     {
    //         "_id": "12345",
    //         "name": "Hill Croft",
    //         "email": "billy@hillcroft.com",
    //         "beds-available": 2,
    //         "beds-required": 7,
    //         "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
    //     },
    //             {
    //         "_id": "12346",
    //         "name": "Meadow Croft",
    //         "email": "billy@hillcroft.com",
    //         "beds-available": 2,
    //         "beds-required": 4,
    //         "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
    //     },
    //             {
    //         "_id": "12347",
    //         "name": "Mountain Croft",
    //         "email": "ingrid@hillcroft.com",
    //         "beds-available": 4,
    //         "beds-required": 2,
    //         "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
    //     },
    //     {
    //         "_id": "12348",
    //         "name": "Wooland Croft",
    //         "email": "peter@hillcroft.com",
    //         "beds-available": 3,
    //         "beds-required": 1,
    //         "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
    //     },
    //     {
    //         "_id": "12349",
    //         "name": "Urban Croft",
    //         "email": "sally@urbancroft.com",
    //         "beds-available": 0,
    //         "beds-required": 2,
    //         "interest-rainbow": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo",  "Violet"]
    //     },
    // ]

    $scope.debug = 'js/listing/listingController';

    function init() {
        ListingModel.getListings().then(function(response) {
            console.log(response.data);
            $scope.listings = response.data;
        });
    }
    init();




});





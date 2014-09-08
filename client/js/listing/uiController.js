// 'use strict';
var uiController = angular.module('uiController', []);

uiController.controller('uiController', function(
    $resource,
    $scope, 
    $http,
    $stateParams,
    ListingModel
    ) { 
    $scope.debug = "js/listing/uiController";

    $scope.listing;
    $scope.listingID = $stateParams.instanceID;

  function init() {
    ListingModel.showListing($scope.listingID).then(function(response) {
        $scope.listing = response.data;
    });
  }
  init();

  // $scope.saveyourself = function(){


  //       simpleCart({
  //         checkout: {
  //         type: "PayPal",
  //         email: "eshoprworkshop@gmail.com",
  //       });

  //       simpleCart.bind( "afterAdd" , function( item ){
  //         console.log( item.get("name") + " was added to the cart!" );
  //       });
//     simpleCart.bind( 'beforeCheckout' , function( data ){
//         // console.log(data);
// // alert('test');
//         var dt = data;
//         var itmNo = 1;
//         console.log('beforeCheckout');
//         console.log(data);
//         for (key in dt) {
//           var ref = 'item_name_'+itmNo; // This our key, it is used against a dictionary
//           var obj = dt[ref];
//           var value = dt[key]; // this the current value of our iterated key value pair object
//           // console.log('ref: '+ref);
//           // console.log('foo: '+value);
//           // console.log('obj: '+obj);
//           // console.log('dsf'+dt[ref]);
//           if(key === ref) {
//             console.log(value);
//             $scope.unscrambled.push(value);
//             itmNo++;
//           }
//         }

//   }


});
  // $scope.createRecipe = function(){
  //   console.log($scope.items);
  //   $scope.formData.bom = $scope.items;
  //   console.log($scope.formData);
  //   RecipeFactory.insertRecipe($scope.formData).then(function(response) {

  //     console.log(response);
  //     $scope.items = [];
  //     $scope.formData = {}; // clear the form so our user is ready to enter another
  //     $scope.recipes = response.data;
  //   }); 
  // }

  // $scope.items = [];
  // $scope.addNew = function (){
  //   $scope.items.push({ active: "true" });
  //   console.log($scope.items);
  // };
  
  // $scope.submitOne = function (item){
  //   $scope.lastSubmit = angular.copy(item);
  // };
  
  // $scope.submitAll = function() {
  //   $scope.lastSubmit = angular.copy($scope.items);
  // }

  // $scope.showRecipes = function(id){
  //   RecipeFactory.showRecipe(id).then(function(response) {
  //     $scope.item = response.data;
  //   }); 
  // }

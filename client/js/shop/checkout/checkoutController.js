var checkoutController = angular.module('checkoutController',[]);

checkoutController.controller('checkoutController',
  function(
    $scope,
    $rootScope,
    $cookieStore,
    localStorageService
  ){
    $scope.debug = 'js/blog/public/checkoutController';
    // $scope.books = ['book1','book2']
            function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
$scope.storageitem = makeid();
    $scope.cook = localStorageService.get('downlo');//$scope.storageitem);
console.log('1');
console.log($scope.cook); 
    $scope.downloads = [];
    $scope.unscrambled = []; // create object to hold array of downloadable purchases

    // Example
  // To add to local storage

  // console.log(localStorageService.get('localStorageNewKey'));
  console.log();
  // window.onbeforeunload = function() {
  // localStorage.removeItem(key);
  // return '';
// };
// localStorageService.remove('downloads')
  // Read that value back
  // var value = localStorageService.get('localStorageKey');
  // To remove a local storage
  // localStorageService.remove('localStorageKey');
  // Removes all local storage
  // localStorageService.clearAll();
  // You can also play with cookies the same way
  // localStorageService.cookie.set('localStorageKey','I am a cookie value now');

    simpleCart({
        checkout: {
          type: "PayPal",
          email: "eshoprworkshop@gmail.com",
          currency: "GBP", // set the currency 
          success: "shop/thanks"
        }
    });
    simpleCart.bind('afterAdd', function(){
      alert('added');
    });
    simpleCart.bind( 'beforeCheckout' , function( data ){
        // console.log(data);
// alert('test');
        var dt = data;
        var itmNo = 1;
        console.log('beforeCheckout');
        console.log(data);
        for (key in dt) {
          var ref = 'item_name_'+itmNo; // This our key, it is used against a dictionary
          var obj = dt[ref];
          var value = dt[key]; // this the current value of our iterated key value pair object
          // console.log('ref: '+ref);
          // console.log('foo: '+value);
          // console.log('obj: '+obj);
          // console.log('dsf'+dt[ref]);
          if(key === ref) {
            console.log(value);
            $scope.unscrambled.push(value);
            itmNo++;
          }
        }

        localStorageService.set('downlo',$scope.unscrambled);
        $scope.unscrambled = [];
        console.log('1');
console.log($scope.cook);
        // $scope.unscrambled

        // localStorageService.set('localStorageKey','Add this!');
        // console.log($scope.downloads);
        // return false;
        // return false;
    });


    // simple callback example
    // .bind( 'beforeCheckout' , function( data ){
    //     data.invoiceNumber = "ABC-123456789";
    // });


});

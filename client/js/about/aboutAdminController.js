var aboutAdminController = angular.module('aboutAdminController', ['ngAnimate']);

aboutAdminController.controller('aboutAdminController', 
    function(
        $resource,
        $scope, 
        $http
        // AboutFactory
    ) { 

        $scope.debug = "js/about/aboutAdminController"

});

var aboutController = angular.module('aboutController', ['ngAnimate']);

aboutController.controller('aboutController', 
    function(
        $resource,
        $scope, 
        $rootScope,
        $http
        // AboutFactory
    ) { 

        $scope.debug = "js/about/aboutController";
        $rootScope.class="about";

});

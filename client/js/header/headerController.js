var headerController = angular.module('headerController', ['ui.bootstrap']);

headerController.controller('headerController',     function($scope) { 

    function CollapseDemoCtrl($scope) {
      $scope.isCollapsed = false;
    }
});
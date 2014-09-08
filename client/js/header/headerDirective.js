var headerDirective = angular.module('headerDirective', []);

headerDirective.directive('shopheader', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'header/header'
    };
});

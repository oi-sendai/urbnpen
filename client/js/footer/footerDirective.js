var footerDirective = angular.module('footerDirective', []);

footerDirective.directive( 'shopfooter', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'footer/footer'
    };
});
'use strict';

eshoprShop.directive('accessLevel', ['Auth', function(Auth) {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            var prevDisp = element.css('display')
                , userRole
                , accessLevel;

            $scope.user = Auth.user;
            $scope.$watch('user', function(user) {
                if(user.role)
                    userRole = user.role;
                updateCSS();
            }, true);

            attrs.$observe('accessLevel', function(al) {
                if(al) accessLevel = $scope.$eval(al);
                updateCSS();
            });

            function updateCSS() {
                if(userRole && accessLevel) {
                    if(!Auth.authorize(accessLevel, userRole))
                        element.css('display', 'none');
                    else
                        element.css('display', prevDisp);
                }
            }
        }
    };
}]);

eshoprShop.directive('activeNav', ['$location', function($location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var anchor = element[0];
            if(element[0].tagName.toUpperCase() != 'A')
                anchor = element.find('a')[0];
            var path = anchor.href;

            scope.location = $location;
            scope.$watch('location.absUrl()', function(newPath) {
                path = normalizeUrl(path);
                newPath = normalizeUrl(newPath);

                if(path === newPath ||
                    (attrs.activeNav === 'nestedTop' && newPath.indexOf(path) === 0)) {
                    element.addClass('active');
                } else {
                    element.removeClass('active');
                }
            });
        }

    };

    function normalizeUrl(url) {
        if(url[url.length - 1] !== '/')
            url = url + '/';
        return url;
    }

}]);

var pinItDirective = angular.module('pinItDirective', []);

pinItDirective.directive( 'pin', function(
  $stateParams
  ) {
    return {
      restrict: 'AE',
      replace: true,
      template: '<a class="pinterest-button" href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"  data-pin-lang="ja" data-pin-height="28"><img class="pinterest-button" src="//assets.pinterest.com/images/pidgets/pinit_fg_ja_rect_gray_28.png"/></a>',
    }

});

var tumblrDirective = angular.module('tumblrDirective', []);

tumblrDirective.directive( 'tumble', function(
  $stateParams
  ) {
    return {
      restrict: 'AE',
      replace: true,
      template: '<a href="http://www.tumblr.com/share" title="Share on Tumblr" style="display:inline-block; text-indent:-9999px; overflow:hidden; width:82px; height:32px; margin:0px 0px 0px 12px; background:url(\'http://platform.tumblr.com/v1/share_2.png\') top left no-repeat transparent;">Share on Tumblr</a>',
    }

});



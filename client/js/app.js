'use strict'; // my armpit cried

var eshoprShop = angular.module('eshoprShop', [
    'ngCookies', 
    'ui.router',
    'ngResource',
    'ngAnimate',
    // 'LocalStorageModule',
    // 'angularFileUpload',
    'ngCookies',
    'cupboardController',
    'pageController',
    'clockController',
    'recipesController',
    // 'graphsController',
    // 'graphsDirective',
    // 'questionsController',
    'publicBlogController',
    'adminBlogController',
    'sidebarBlogController',
    'headerController',
    'headerDirective',
    'footerDirective',
    'textAngular',
    'productController',
    'checkoutController',
    'contactController',
    'orderController',
    'listingController',
    'uiController',
    'addListingController',
    'weatherDirective',
    // 'userController',
    'galleryController'
    ]);

eshoprShop.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $uiViewScrollProvider, $anchorScrollProvider ) {

    var access = routingConfig.accessLevels;
    // console.log($uiViewScrollProvider);
    // $uiViewScrollProvider.useAnchorScroll();
    // $anchorScrollProvider.disableAutoScrolling();
    // Public routes
    $stateProvider
        .state('public', {
            abstract: true,
            template: '<ui-view autoscroll="false"/>',
            data: {
                access: access.public
            }
        })
        .state('public.404', {
            url: '/404/',
            templateUrl: '404'
        });

    // Anonymous routes
    $stateProvider
        .state('anon', {
            abstract: true,
            // template: '<ui-view autoscroll="false"/>',
            templateUrl: 'public',
            data: {
                access: access.public
            }
        })
        // Home
        .state('anon.home', {
            url: '/',
            // templateUrl: 'public'
            // templateUrl: 'page/ngview',
        })
        // Home Three
        .state('anon.login', {
            url: '/login/',
            templateUrl: 'login',
            controller: 'LoginCtrl'
        })
        // Login
        .state('anon.register', {
            url: '/register/',
            templateUrl: 'register',
            controller: 'RegisterCtrl'
        })
        // Register
        .state('anon.recipes', {
            url: '/recipes/',
            templateUrl: 'graphs/plot1',
            controller: 'graphsController'
        })
        // Recipe
        .state('anon.recipe', {
            url: '/recipes/:recipe_id',
            templateUrl: 'recipes/recipe',
            controller: function($scope, $stateParams) {
                $scope.foo = $stateParams.recipe_id;
            }
        });

    // Gallery Routes
    $stateProvider
        .state('anon.gallery', {
            url: '/gallery/',
            templateUrl: 'gallery/gallery',
            controller: 'galleryController'
        });

    // Contact Submissions
    $stateProvider
        .state('user.private.orders', {
            url: 'orders/',
            templateUrl: "shop/admin/orders",
            controller: 'orderController',
            data: {
                access: access.public
            }
        });

    // //Blog Routes
    $stateProvider
        .state('anon.blog', {
            url: '/blog/',
             templateUrl: 'blog/public/list',
            controller: 'publicBlogController'
        })
        .state('anon.blog.posts', {
            url: 'posts/', 
            // note how it begins with no slash for follow from its ancestor /blog/
            controller: 'publicBlogController',
            views: {
                'main': {
                    templateUrl: 'blog/public/list',
                },
                'sidebar': {
                    templateUrl: 'blog/public/sidebar',
                    controller: 'publicBlogController'
                    // templateUrl: 'blog/public/sidebar',
                }
            }
        });

    // Admin routes
    $stateProvider
        .state('admin', {
            abstract: true,
            templateUrl: 'admin',
            data: {
                access: access.user
            }
        })
        // Private
        .state('admin.admin', {
            url: '/admin/',
            templateUrl: 'admin/layout'
        })
        .state('admin.admin.write', {
            url: 'write/',
            controller: 'adminBlogController',
            templateUrl: 'blog/admin/write'
        })
        // Private Welcome
        // .state('user.private.welcome', {
        //     url: '',
        //     templateUrl: 'private/welcome',
        //     controller: 'pageController',
        // })
        // // Private AddRecipe
        // .state('user.private.addrecipe', {
        //     url: 'addrecipe/',
        //     templateUrl: 'recipes/add',
        //     controller: 'recipesController',
        // })
        // // Private Cupboard
        // .state('user.private.cupboard', {
        //     url: 'cupboard/',
        //     templateUrl: 'private/cupboard',
        //     controller: 'cupboardController'
        // })
        // Private Admin
        .state('user.private.admin', {
            url: 'admin/',
            templateUrl: 'private/stock',
            data: {
                access: access.public
            }
        });

    // // Listing routes
    //  $stateProvider
    //     .state('anon.listings', {
    //       url: '/listings/',
    //       templateUrl: 'listing/layout',
    //       controller: 'listingController'
    //     })
    //     .state('anon.listings.listing', {
    //       url: 'listing/:instanceID',
    //       views:{
    //         'right':{
    //           templateUrl:'listing/ui',
    //           controller: 'uiController'
    //           }
    //         }
    //     })
    //     .state('anon.listings.add', {
    //       url: 'add/',
    //       views:{
    //         'right':{
    //           templateUrl:'listing/add',
    //           controller: 'addListingController'
    //           }
    //         }
    //     });
    //     // .state('anon.listing.edit', {
    //     //   views:{
    //     //     'right':{
    //     //       templateUrl:'listing/ui.jade',
    //     //       controller: 'listingController'
    //     //       }
    //     //   }
    // // });





    $urlRouterProvider.otherwise('/404');

    // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
    $urlRouterProvider.rule(function($injector, $location) {
        if($location.protocol() === 'file')
            return;

        var path = $location.path()
        // Note: misnomer. This returns a query object, not a search string
            , search = $location.search()
            , params
            ;

        // check to see if the path already ends in '/'
        if (path[path.length - 1] === '/') {
            return;
        }

        // If there was no search string / query params, return with a `/`
        if (Object.keys(search).length === 0) {
            return path + '/';
        }

        // Otherwise build the search string and return a `/?` prefix
        params = [];
        angular.forEach(search, function(v, k){
            params.push(k + '=' + v);
        });
        return path + '/?' + params.join('&');
    });

    $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push(function($q, $location) {
        return {
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    });

}])

.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {

    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        if (!Auth.authorize(toState.data.access)) {
            $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
            event.preventDefault();
            
            if(fromState.url === '^') {
                if(Auth.isLoggedIn()) {
                    $state.go('user.home');
                } else {
                    $rootScope.error = null;
                    $state.go('anon.home');
                }
            }
        }
    });

}]);

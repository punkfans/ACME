(function () {
    angular.module('app', ['ngRoute'])
        .config(config)
        .controller('appController', appController);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/search', {
                templateUrl: 'app/components/ACME/search/search.html',
                controller: 'searchController'
            })
            .when('/create', {
                templateUrl: 'app/components/ACME/create/create.html',
                controller: 'createController'
            })
            .when('/edit', {
                templateUrl: 'app/components/ACME/edit/edit.html',
                controller: 'editController'
            })
            .otherwise({
                redirectTo: '/search'
            });

        $locationProvider.hashPrefix('');
    }

    function appController($scope, navBarService) {
        $scope.navBarService = navBarService;
    }
})();
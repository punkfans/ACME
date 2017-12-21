(function () {
    angular.module('app', ['ngRoute'])
        .config(config)
        .controller('appController', appController);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/search', {
                templateUrl: 'app/components/ACME/search/search.html',
                controller: 'searchController as search'
            })
            .when('/create', {
                templateUrl: 'app/components/ACME/create/create.html',
                controller: 'createController as create'
            })
            .when('/:id/edit', {
                templateUrl: 'app/components/ACME/edit/edit.html',
                controller: 'editController as edit'
            })
            .otherwise({
                redirectTo: '/search'
            });

        $locationProvider.hashPrefix('');
    }

    function appController($scope, navigationService) {
        $scope.navigationService = navigationService;
    }
})();
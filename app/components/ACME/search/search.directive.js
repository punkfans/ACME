(function () {
    angular.module('app')
        .directive('searchPage', searchPage)
        .controller('searchController', searchController);

    function searchController(dataService) {
        var vm = this;
        vm.dataService = dataService;
    }

    function searchPage() {
        return {
            restrict: 'E',
            controller: 'searchController as search',
            templateUrl: 'app/components/ACME/search/search.html'
        }
    }
})();
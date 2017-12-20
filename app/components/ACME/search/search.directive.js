(function () {
    angular.module('app')
        .directive('searchPage', searchPage)
        .controller('searchController', searchController);

    function searchController(dataService) {
        var vm = this;
        vm.items = dataService.items;

        vm.filterItems = function () {
            vm.items = dataService.items.filter(function (item) {
                return item.title.toLowerCase().indexOf(vm.filterKeyWord.trim().toLowerCase()) >= 0;
            });
        }
    }

    function searchPage() {
        return {
            restrict: 'E',
            controller: 'searchController as search',
            templateUrl: 'app/components/ACME/search/search.html'
        }
    }
})();
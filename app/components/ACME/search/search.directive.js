(function () {
    angular.module('app')
        .directive('searchPage', searchPage)
        .controller('searchController', searchController);

    function searchController(dataService, tagsFactory) {
        var vm = this;
        vm.items = dataService.items;
        vm.itemsBasedOnTags = tagsFactory.getItemsBasedOnTags(dataService.items);
        vm.tags = Object.keys(vm.itemsBasedOnTags);

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
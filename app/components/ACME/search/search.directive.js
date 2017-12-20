(function () {
    angular.module('app')
        .directive('searchPage', searchPage)
        .controller('searchController', searchController);

    function searchController(dataService, tagsFactory) {

        var vm = this;
        //set default value for keyword as empty string
        vm.filterKeyWord = '';
        // this are the items that should show on the screen, by default it's all items
        vm.items = dataService.items;
        // this represents the items that will be filtered upon, by default it's all items
        var itemsToBeFiltered = dataService.items;
        // this retrieves the reformatted items categorized by tags
        var itemsBasedOnTags = tagsFactory.getItemsBasedOnTags(dataService.items);
        // get all the available keys to show on the search screen
        vm.tags = Object.keys(itemsBasedOnTags);

        // keep track of which tag is selected and toggle its style
        // by default only the first one is true rest are false
        vm.tagActiveStatus = [true];
        for(var i in vm.tags) {
            vm.tagActiveStatus.push(false);
        }

        vm.filterByTitle = function () {
            vm.items = itemsToBeFiltered.filter(function (item) {
                return item.title.toLowerCase().indexOf(vm.filterKeyWord.trim().toLowerCase()) >= 0;
            });
        };

        vm.filterByTag = function (tagName, index) {
            // if user selects a tag, set the itemsToBeFiltered to that tag category
            itemsToBeFiltered = itemsBasedOnTags[tagName];
            vm.filterByTitle();

            //
        };

        vm.clearTagFilter = function (index) {
            // if user selects all as the tag, reset the itemsToBeFiltered to all items
            itemsToBeFiltered = dataService.items;
            vm.filterByTitle();
        };
    }

    function searchPage() {
        return {
            restrict: 'E',
            controller: 'searchController as search',
            templateUrl: 'app/components/ACME/search/search.html'
        }
    }
})();
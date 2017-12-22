(function () {
    angular.module('app')
        .controller('createController', createController)
        .directive('createPage', createPage);

    function createController(dataService, navigationService, tagsFactory) {
        var vm = this;
        // denotes the visibility of each step
        vm.stepVisibility = [true, false, false, false];
        vm.newItemModel = {
            title: '',
            price: '',
            address: '',
            tags: [],
            notes: ''
        };

        vm.progress = 1;

        vm.nextStep = function (index) {
            vm.stepVisibility[index - 1] = false;
            vm.stepVisibility[index] = true;
            vm.progress++;
        };

        vm.addItem = function () {
            // convert tags from a string to an array
            vm.newItemModel.tags = tagsFactory.convertTagFromStringToArray(vm.newItemModel.tags);
            dataService.addItem(vm.newItemModel);
            navigationService.goToSearchPage();
        }
    }

    function createPage() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/ACME/create/create.html',
            controller: 'createController as create'
        }
    }
})();
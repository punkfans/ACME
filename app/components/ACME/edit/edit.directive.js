(function () {
    angular.module('app')
        .controller('editController', editController)
        .directive('editPage', editPage);

    function editController($routeParams, dataService) {
        var vm = this;
        vm.item = dataService.getItem(parseInt($routeParams.id));
        vm.keys = Object.keys(vm.item);
        console.log($routeParams.id, vm.item);

    }

    function editPage() {
        return {
            restrict: 'E',
            controller: 'editController as edit',
            templateUrl: 'app/components/ACME/edit/edit.html'
        }
    }
})();
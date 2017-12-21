(function () {
    angular.module('app')
        .controller('createController', createController)
        .directive('createPage', createPage);

    function createController() {
        var vm = this;
        // denotes the visibility of each step
        vm.stepVisibility = [true, false, false, false];
    }

    function createPage() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/ACME/create/create.html',
            controller: 'createController as create'
        }
    }
})();
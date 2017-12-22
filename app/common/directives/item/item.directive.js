(function () {
    itemController.$inject = ["$scope", "$location"];
    angular.module('app')
        .directive('item', item)
        .controller('itemController', itemController);

    function item() {
        return {
            restrict: 'E',
            controller: 'itemController as item',
            templateUrl: 'app/common/directives/item/item.html',
            scope: {
                itemData: '='
            }
        }
    }

    function itemController($scope, $location) {
        var vm = this;
        vm.itemData = $scope.itemData;
        vm.goToEditPage = function () {
            $location.path('/' + vm.itemData.id + '/edit');
        };
    }
})();
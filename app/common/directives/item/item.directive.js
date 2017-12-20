(function () {
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

    function itemController($scope) {
        var vm = this;
        vm.itemData = $scope.itemData;
    }
})();
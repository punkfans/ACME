(function () {
    angular.module('app')
        .filter('capitalize', function () {
            return function (input) {
                return input[0].toUpperCase() + input.substring(1);
            }
        });
})();
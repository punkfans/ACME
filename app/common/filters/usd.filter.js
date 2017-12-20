(function () {
    angular.module('app')
        .filter('usd', function () {
            return function (input) {
                return '$' + input;
            }
        })
})();
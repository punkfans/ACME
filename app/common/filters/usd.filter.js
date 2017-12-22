(function () {
    angular.module('app')
        .filter('usd', function () {
            return function (input) {
                input = input || 0;
                return '$' + input;
            }
        })
})();
(function() {
    angular.module('app')
        .service('navigationService', ["$location", function($location) {
            var service = this;
            service.navBarItemActiveStatus = [true, false]; // search tab is by default activated

            service.setActive = function(index) {
                for(var i = 0; i < service.navBarItemActiveStatus.length; i++) {
                    service.navBarItemActiveStatus[i] = i === index;
                }
            };

            service.setInActive = function(index) {
                service.navBarItemActiveStatus[index] = false;
            };

            service.goToSearchPage = function () {
                $location.path('/search');
                // set search tab to active
                service.setActive(0);
            };

            service.goToCreatePage = function () {
                $location.path('/create');
                service.setActive(1);
            };

            return service;
        }]);
})();
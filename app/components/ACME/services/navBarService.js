(function() {
    angular.module('app')
        .service('navBarService', function() {
            var service = this;
            service.navBarItemActiveStatus = [true, false]; // search tab is by default activated
            service.setActive = function(index) {
                for(var i = 0; i < 2; i++) {
                    service.navBarItemActiveStatus[i] = i === index;
                }
            };

            return service;
        });
})();
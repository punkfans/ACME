(function () {
    angular.module('app')
        .service('toggleTagService', toggleTagService);

    function toggleTagService() {
        var service = this;

        service.tagActiveStatus = [];

        return service;
    }
})();
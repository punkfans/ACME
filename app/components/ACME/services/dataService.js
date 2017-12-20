(function () {
    angular.module('app')
        .service('dataService', dataService);

    function dataService() {
        var service = this;
        service.items = [
            {
                title: 'iPhoneX',
                price: 1000,
                address: 'Chicago',
                tags: ['electronics', 'apple', 'phone', 'iPhoneX'],
                notes: 'This is the new phone'
            },
            {
                title: 'Dji SPARK',
                price: 600,
                address: 'New York',
                tags: ['electronics', 'Dji', 'drone', 'Dji SPARK'],
                notes: 'This is a drone'
            },
            {
                title: 'Soccer ball',
                price: 20,
                address: 'Seattle',
                tags: ['sports', 'adidas', 'Soccer ball'],
                notes: 'This is a adidas soccer ball'
            },
            {
                title: 'xbox',
                price: 300,
                address: 'Miami',
                tags: ['electronics', 'game', 'microsoft', 'xbox'],
                notes: 'This is a game console'
            }
        ];

        return service;
    }
})();
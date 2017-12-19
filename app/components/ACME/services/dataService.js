(function () {
    angular.module('app')
        .service('dataService', dataService);

    function dataService() {
        var service = this;
        service.initialData = [
            {
                title: 'iPhoneX',
                price: 1000,
                address: 'Chicago',
                tags: ['electronics', 'apple', 'phone'],
                notes: 'This is the new phone'
            },
            {
                title: 'Dji',
                price: 600,
                address: 'New York',
                tags: ['electronics', 'Dji', 'drone'],
                notes: 'This is a drone'
            },
            {
                title: 'Soccer ball',
                price: 20,
                address: 'Seattle',
                tags: ['sports', 'adidas'],
                notes: 'This is a adidas soccer ball'
            },
            {
                title: 'xbox',
                price: 300,
                address: 'Miami',
                tags: ['electronics', 'game', 'microsoft'],
                notes: 'This is a game console'
            }
        ];

        return service;
    }
})();
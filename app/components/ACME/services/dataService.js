(function () {
    angular.module('app')
        .service('dataService', dataService);

    function dataService() {
        var service = this;
        service.items = [
            {
                id: 1,
                title: 'iPhoneX',
                price: 1000,
                address: 'Chicago',
                tags: ['electronics', 'apple'],
                notes: 'This is the new phone'
            },
            {
                id: 2,
                title: 'Dji SPARK',
                price: 600,
                address: 'New York',
                tags: ['electronics', 'Dji', 'drone'],
                notes: 'This is a drone'
            },
            {
                id: 3,
                title: 'Soccer ball',
                price: 20,
                address: 'Seattle',
                tags: ['sports', 'adidas'],
                notes: 'This is a adidas soccer ball'
            },
            {
                id: 4,
                title: 'xbox',
                price: 300,
                address: 'Miami',
                tags: ['electronics', 'game', 'microsoft'],
                notes: 'This is a game console'
            },
            {
                id: 5,
                title: 'wii',
                price: 250,
                address: 'San Jose',
                tags: ['electronics', 'game', 'nintendo'],
                notes: 'This is a game console'
            },
            {
                id: 6,
                title: 'bed',
                price: 250,
                address: 'Chicago',
                tags: ['furniture'],
                notes: 'This is a piece of furniture'
            }
        ];

        // get the item with id
        service.getItem = function (id) {
            for(var i in service.items) {
                if(service.items[i].id === id) {
                    return service.items[i];
                }
            }

            // return empty when there is no corresponding item
            return {};
        };

        service.addItem = function (item) {
            item.id = new Date().getTime();
            service.items.push(item);
        };

        return service;
    }
})();
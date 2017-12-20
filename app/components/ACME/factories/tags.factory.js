(function () {
    angular.module('app')
        .factory('tagsFactory', tagsFactory);

    function tagsFactory() {
        var factory = {};

        // get all available tags to show on the search screen
        factory.getItemsBasedOnTags = function (items) {
            var itemsBasedOnTags = {};
            for(var i in items) {
                for(var j in items[i].tags) {
                    if(!itemsBasedOnTags[items[i].tags[j]]) {
                        itemsBasedOnTags[items[i].tags[j]] = [];
                    }

                    itemsBasedOnTags[items[i].tags[j]].push(items[i]);
                }
            }

            return itemsBasedOnTags;
        };

        return factory;
    }
})();
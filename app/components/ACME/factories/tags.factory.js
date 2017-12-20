(function () {
    angular.module('app')
        .factory('tagsFactory', tagsFactory);

    function tagsFactory() {
        var factory = {};

        /**
         return reformatted items categorized by tags
         [{
                title: 'iPhoneX',
                tags: ['electronics']
            },
         {
             title: 'Dji SPARK'
             tags: ['electronics', 'drone']
         }]

         ===============>

         {
             electronics: [
                {
                    title: 'iPhoneX',
                    tags: ['electronics', 'apple']
                },
                {
                 title: 'Dji SPARK'
                 tags: ['electronics', 'drone']
                }
             ],
             drone: [
                {
                 title: 'Dji SPARK'
                 tags: ['electronics', 'drone']
                }
             ]

         }
         **/
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
#!/usr/bin/python3
""" LIFO caching module """

BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ LIFOCache class that inherits from BaseCaching """

    def __init__(self):
        """ Initialize """
        super().__init__()
        self.keys_order = []

    def put(self, key, item):
        """ Add an item to the cache using LIFO """
        if key is not None and item is not None:
            self.cache_data[key] = item

            if key not in self.keys_order:
                self.keys_order.append(key)

            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                last_key = self.keys_order.pop(-2)
                del self.cache_data[last_key]
                print("DISCARD: {}".format(last_key))

    def get(self, key):
        """ Retrieve an item from the cache """
        if key is None:
            return None

        return self.cache_data.get(key)

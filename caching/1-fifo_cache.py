#!/usr/bin/env python3
""" FIFO caching module """

BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """ FIFOCache class that inherits from BaseCaching """

    def __init__(self):
        """ Initialize """
        super().__init__()
        self.keys_order = []

    def put(self, key, item):
        """ Add an item to the cache using FIFO """
        if key is not None and item is not None:
            self.cache_data[key] = item

            if key not in self.keys_order:
                self.keys_order.append(key)

            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                first_key = self.keys_order.pop(0)
                del self.cache_data[first_key]
                print("DISCARD: {}".format(first_key))

    def get(self, key):
        """ Retrieve an item from the cache """
        if key is None or key not in self.cache_data:
            return None

        return self.cache_data.get(key)

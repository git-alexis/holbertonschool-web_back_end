#!/usr/bin/python3
"""LRU caching module"""

BaseCaching = __import__('base_caching').BaseCaching


class LRUCache(BaseCaching):
    """LRUCache class that inherits from BaseCaching"""

    def __init__(self):
        """Initialize"""
        super().__init__()
        self.usage_order = []

    def put(self, key, item):
        """Add an item in the cache using LRU"""
        if key is None or item is None:
            return

        if key in self.cache_data:
            self.cache_data[key] = item

            self.usage_order.remove(key)
            self.usage_order.append(key)
            return

        if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            lru_key = self.usage_order.pop(0)
            del self.cache_data[lru_key]
            print("DISCARD: {}".format(lru_key))

        self.cache_data[key] = item
        self.usage_order.append(key)

    def get(self, key):
        """Get an item by key"""
        if key is None or key not in self.cache_data:
            return None

        self.usage_order.remove(key)
        self.usage_order.append(key)

        return self.cache_data[key]

#!/usr/bin/env python3
""" Changes all topics of a school document based on the name """


def update_topics(mongo_collection, name, topics):
    """ Update documents in a collection based on name """
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})

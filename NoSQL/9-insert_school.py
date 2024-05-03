#!/usr/bin/env python3
""" Insert a document in a collection based on kwargs """


def insert_school(mongo_collection, **kwargs):
    """ Return the new _id """
    return mongo_collection.insert_one(kwargs).inserted_id

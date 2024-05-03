#!/usr/bin/env python3
""" Return list of mongo documents """


def list_all(mongo_collection):
    """
    Return a list of all documents in a collection or empty list
    """
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())

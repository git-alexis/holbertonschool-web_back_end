#!/usr/bin/env python3
""" Password hashing module """

import bcrypt


def hash_password(password: str) -> bytes:
    """ Return a salted and hashed password as a byte string """
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """ Return True if the password matches the hashed password """
    return bcrypt.checkpw(password.encode("utf-8"), hashed_password)

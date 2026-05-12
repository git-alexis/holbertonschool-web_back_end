#!/usr/bin/env python3
""" Password hashing module """

import bcrypt


def hash_password(password: str) -> bytes:
    """ Return a salted and hashed password as a byte string """
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

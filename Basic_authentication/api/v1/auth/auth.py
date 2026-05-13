#!/usr/bin/env python3
""" Authentication module """

from flask import request
from typing import List, TypeVar


class Auth:
    """ Manage API authentication """

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ Return False for now """
        return False

    def authorization_header(self, request=None) -> str:
        """ Return authorization header """
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """ Return current user """
        return None

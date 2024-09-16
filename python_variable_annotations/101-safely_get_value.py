#!/usr/bin/env python3
"""
Type-annotated function safely_get_value that takes adictionnary,
one key and a default value ( None )
"""
from typing import Any, Mapping, TypeVar, Union

T = TypeVar('T')


def safely_get_value(dct: Mapping, key: Any, default: Union[T, None] = None) -> Union[Any, T]:
    """
    Returns the value of the key in dictionnary or the default value None
    """
    if key in dct:
        return dct[key]
    else:
        return default

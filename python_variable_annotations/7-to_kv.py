#!/usr/bin/env python3
"""
Type-annotated function to_kv that takes a string k and an int OR float v
as arguments
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with a string and a square of a number as a float"""
    return (k, v**2)

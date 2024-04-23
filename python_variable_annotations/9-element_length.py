#!/usr/bin/env python3
"""
Type-annotated function element_length that takes a list of strings as argument
"""
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples containing each element in the
    input list and its corresponding length
    """
    return [(i, len(i)) for i in lst]

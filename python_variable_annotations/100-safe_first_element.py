#!/usr/bin/env python3
"""
Type-annotated function safe_first_element that takes a sequence of any type
as argument or null
"""
from typing import Sequence, Any, Optional


def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """
    Returns the first element of the sequence or None
    """
    if lst:
        return lst[0]
    else:
        return None

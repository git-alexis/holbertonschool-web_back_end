#!/usr/bin/env python3
"""Create an async comprehension"""

from typing import List


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random numbers using an async generator"""
    list_of_numbers = []
    async for number in async_generator():
        list_of_numbers.append(number)
    return list_of_numbers

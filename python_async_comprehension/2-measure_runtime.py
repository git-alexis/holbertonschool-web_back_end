#!/usr/bin/env python3
"""Create a coroutine called measure_runtime that takes no arguments"""

import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Return the time it takes to run async_comprehension four times
    in parallel using asyncio.gather
    """
    list_of_task = []
    for time in range(4):
        list_of_task.append(async_comprehension())

    start_time = asyncio.get_event_loop().time()
    await asyncio.gather(*list_of_task)
    end_time = asyncio.get_event_loop().time()

    total_time = end_time - start_time
    return total_time

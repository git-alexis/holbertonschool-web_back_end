#!/usr/bin/env python3
"""
Create a coroutine that takes in an integer argument
(max_delay, with a default value of 10)
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait and return a random delay between 0 and max_delay"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

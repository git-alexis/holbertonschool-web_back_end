#!/usr/bin/env python3
"""
Create a routine called task_wait_n that takes in 2 int arguments
(in this order): n and max_delay
"""

import asyncio
from typing import List


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Do task_wait_random n times and return a list of delays"""
    tasks = []
    for time in range(n):
        tasks.append(task_wait_random(max_delay))

    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays

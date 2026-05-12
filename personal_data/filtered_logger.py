#!/usr/bin/env python3
""" Filtered logger module """

import re
from typing import List


def filter_datum(fields: List[str], redaction: str,
                 message: str, separator: str) -> str:
    """ Return the log message with obfuscated fields """
    return re.sub(
        fr"({'|'.join(fields)})=[^{separator}]*",
        lambda mes: f"{mes.group(1)}={redaction}",
        message
    )

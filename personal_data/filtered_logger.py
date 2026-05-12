#!/usr/bin/env python3
""" Filtered logger module """

import re


def filter_datum(fields, redaction, message, separator):
    """ Return the log message with obfuscated fields """
    return re.sub(
        fr"({'|'.join(fields)})=[^{separator}]*",
        lambda mes: f"{mes.group(1)}={redaction}",
        message
    )

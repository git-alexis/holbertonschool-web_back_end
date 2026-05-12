#!/usr/bin/env python3
""" Filtered logger module """

import logging
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


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]) -> None:
        """ Initialize the formatter with fields to redact """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """ Return the formatted log record with redacted fields """
        return filter_datum(
            self.fields, self.REDACTION,
            super().format(record), self.SEPARATOR
        )

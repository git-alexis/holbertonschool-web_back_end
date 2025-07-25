#!/usr/bin/env python3
""" Basic Flask app Module
"""
from flask import Flask, render_template, request
from flask_babel import Babel


class Config:
    """ Configuration class
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
app.config.from_object(Config)

babel = Babel()


@app.route('/', methods=['GET'], strict_slashes=False)
def welcome() -> str:
    """ Endpoint returning Hello world
    """
    return render_template("4-index.html")


def get_locale() -> str:
    """ Select the best match language
    """
    requested_locale = request.args.get('locale')
    if requested_locale in app.config['LANGUAGES']:
        return requested_locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])


babel.init_app(app, locale_selector=get_locale)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

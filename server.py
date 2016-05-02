#!/usr/bin/python
import sys
from flask import Flask, render_template, url_for
from parser.funk import Funk
from parser.tabla import Tabla
from parser.programa import Programa
from parser.gijackLexer import gijackLexer
from parser.gijackParser import gijackParser
from antlr4 import *

app = Flask(__name__)

@app.route("/")
def index():
    print url_for('static', filename='style.css')
    return render_template('index.html')

@app.route("/compile")
def compile():
    tabla = Tabla()
    inputfile = FileStream("tmp.gi")
    programa1 = Programa(tabla, "meep")
    lexer = gijackLexer(inputfile)
    stream = CommonTokenStream(lexer)
    parser = Funk(stream, tabla, programa1)

    try:
        tree = parser.start()
    except Exception as e:
        errors = str(e)

    programa1.escribo("tmp.gi")

if __name__ == "__main__":
    app.run()
#!/usr/bin/python
import sys
<<<<<<< Updated upstream
from flask import Flask, render_template, request
=======
from flask import Flask, render_template, url_for
>>>>>>> Stashed changes
from parser.funk import Funk
from parser.tabla import Tabla
from parser.programa import Programa
from parser.gijackLexer import gijackLexer
from parser.gijackParser import gijackParser
from antlr4 import *

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/compile", methods=['POST'])
def compile():
    if request.method == 'POST':
        with open('tmp.gi', 'w') as f:
            f.write(request.form['code'])

        inputfile = FileStream('tmp.gi')
        tabla = Tabla()
        programa1 = Programa(tabla, "meep")
        lexer = gijackLexer(inputfile)
        stream = CommonTokenStream(lexer)
        parser = Funk(stream, tabla, programa1)

        try:
            tree = parser.start()
        except Exception as e:
            errors = str(e)

        prog = "<br />".join(programa1.line_dump())

        return prog
    else:
        redirect('/')

if __name__ == "__main__":
    app.run(debug=True)

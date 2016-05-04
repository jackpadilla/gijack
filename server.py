#!/usr/bin/python
import sys
from flask import Flask, render_template, request, jsonify
from parser.funk import Funk
from parser.tabla import Tabla
from parser.programa import Programa
from parser.gijackLexer import gijackLexer
from parser.gijackParser import gijackParser
from vm.meep import Meep
from antlr4 import *

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/compile", methods=['POST'])
def compile():
    if request.method == 'POST':
        errors = []
        prints = []

        with open('tmp.gi', 'w') as f:
            f.write(request.form['code'])

        tabla = Tabla()
        prog = Programa(tabla, "meep")
        inputfile = FileStream('tmp.gi')
        lexer = gijackLexer(inputfile)
        stream = CommonTokenStream(lexer)
        parser = Funk(stream, tabla, prog)

        try:
            tree = parser.start()
        except Exception as e:
            errors = [str(e)]

        if not errors:
            meep = Meep()
            meep.read_meeps_from_lines(prog.line_dump())

            try:
                prints = meep.while_my_guitar_gently_meeps(False)
            except Exception as e:
                errors = [str(e)]

        response = {
            'errors': errors,
            'prints': prints
        }

        return jsonify(**response)
    else:
        redirect('/')

if __name__ == "__main__":
    app.run(debug=True)

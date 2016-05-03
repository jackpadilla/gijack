#!/usr/bin/python
import sys
from flask import Flask, render_template, request
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
        with open('tmp.gi', 'w') as f:
            f.write(request.form['code'])

        inputfile = FileStream('tmp.gi')
        tabla = Tabla()
        programa1 = Programa(tabla, "meep")
        lexer = gijackLexer(inputfile)
        stream = CommonTokenStream(lexer)
        parser = Funk(stream, tabla, programa1)

       

        meep = Meep()
        
        meep.while_my_guitar_gently_meeps()

        try:
            tree = parser.start()
        except Exception as e:
            errors = str(e)

        programa1.dump()
        programa1.escribo('tmp.jack')
        meep.read_meeps('tmp.jack')
        meep.while_my_guitar_gently_meeps()

        prog = "<br />".join(programa1.line_dump())

        return prog
    else:
        redirect('/')

if __name__ == "__main__":
    app.run(debug=True)

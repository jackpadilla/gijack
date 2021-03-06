#!/usr/bin/python
import sys
from parser.funk import Funk
from parser.tabla import Tabla
from parser.programa import Programa
from parser.gijackLexer import gijackLexer
from parser.gijackParser import gijackParser
from antlr4 import *

def main(argv):
    tabla = Tabla()
    inputfile = FileStream(argv[1])
    programa1 = Programa(tabla, "meep")
    lexer = gijackLexer(inputfile)
    stream = CommonTokenStream(lexer)
    parser = Funk(stream, tabla, programa1)

    # tree = parser.start()
    try:
        tree = parser.start()
    except Exception as e:
        print 'Hubo un error: ' + str(e)

    #tabla.print_vars()
    #tabla.print_funcion()
    #tabla.print_constante()
    programa1.dump()
    programa1.escribo(argv[1])

if __name__ == '__main__':
    main(sys.argv)

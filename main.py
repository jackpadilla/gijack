import sys 
from antlr4 import * 
from funk import Funk
from tabla import Tabla
from gijackLexer import gijackLexer
from gijackParser import gijackParser
 
def main(argv):
    tabla = Tabla()
    inputfile = FileStream(argv[1])
    lexer = gijackLexer(inputfile)
    stream = CommonTokenStream(lexer)
    parser = Funk(stream, tabla)

    try:
        tree = parser.start()   
    except Exception as e:
        print 'Hubo un error: ' + str(e)

    tabla.print_vars()
    tabla.print_funcion()
 
if __name__ == '__main__':
    main(sys.argv)

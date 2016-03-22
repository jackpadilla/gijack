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
    tree = parser.start()
    tabla.print_vars()
 
if __name__ == '__main__':
    main(sys.argv)
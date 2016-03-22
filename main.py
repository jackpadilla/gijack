import sys 
from antlr4 import * 
from gijackLexer import gijackLexer
from gijackParser import gijackParser
 
def main(argv):
    inputfile = FileStream(argv[1])
    lexer = gijackLexer(inputfile)
    stream = CommonTokenStream(lexer)
    parser = gijackParser(stream)
    tree = parser.start()
 
if __name__ == '__main__':
    main(sys.argv)
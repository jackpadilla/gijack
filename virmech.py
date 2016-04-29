#!/usr/bin/python
import sys
from vm.meep import Meep

def main(argv):
    meep = Meep()
    meep.read_meeps("cuadruplos")
    meep.while_my_guitar_gently_meeps()

if __name__ == '__main__':
    main(sys.argv)

from memoria import Memoria

class ManejadorMemoria:
    def __init__(self):
        self.detalles = {
            'int': 0,
            'float': 0,
            'string': 0,
            'bool': 0
        }

        self.constantes = {}

        self.memorias = []
        self.memoriaActual = None

    def agregar_detalle(self, tipo, cant):
        self.detalles[tipo] = int(cant)

    def primer_mem(self):
        mem = Memoria()

        for tipo, cant in self.detalles.items():
            mem.llenarMemoria(tipo, cant)

        for index, const in self.constantes.items():
            mem.ponerValor(index, const)

        self.memorias.append(mem)
        self.memoriaActual = mem

    def nueva_mem(self):
        mem = Memoria(self.memoriaActual)

        self.memorias.append(mem)
        self.memoriaActual = mem

    def termina_mem(self):
        self.memorias.pop()
        self.memoriaActual = self.memorias[-1]

    def crearConstante(self, tipo, valor, index):
        if  tipo == 'int':
            self.constantes[index] = int(valor)
        elif tipo == 'float':
            self.constantes[index] = float(valor)
        elif tipo == 'bool':
            self.constantes[index] = valor == ".TRUE"
        elif tipo == 'string':
            self.constantes[index] = valor[1:-1]

    def crearFuncion(self, tipo, index):
        if  tipo == 'int':
            self.constantes[index] = 0
        elif tipo == 'float':
            self.constantes[index] = 0.0
        elif tipo == 'bool':
            self.constantes[index] = True
        elif tipo == 'string':
            self.constantes[index] = ''

    def obtenerVariable(self,varid):
        if varid in self.constantes:
            return self.constantes[varid]
        else:
            return self.memoriaActual.obtenerVariable(varid)

    def ponerValor(self,varid,valor):
        if varid in self.constantes:
            self.constantes[varid] = valor
        else:
            self.memoriaActual.ponerValor(varid, valor)

    def dump(self):
        print "In mem %d" % len(self.memorias)
        self.memoriaActual.dump()

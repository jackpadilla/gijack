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

        for valor, datos in self.constantes.items():
            mem.crearConstante(datos['tipo'], valor, datos['index'])

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
        self.constantes[valor] = {
            'tipo': tipo,
            'index': index
        }

    def obtenerVariable(self,varid):
        return self.memoriaActual.obtenerVariable(varid)

    def ponerValor(self,varid,valor):
        return self.memoriaActual.ponerValor(varid, valor)

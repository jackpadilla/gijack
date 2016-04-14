from semantic_cube import CUBO
from cuadruplo import Cuadruplo

class Programa:
    def __init__(self, tabla, nombre):
        self.tabla = tabla
        self.nombre = nombre
        self.estatutos = []
        self.varIds = []

    def aritmetica(self, operador):
        # TODO valida que es una operacion valida utilizando la funcion que puse ahi abajo
        # TODO poner mas meeps por ahi
        
        id1 = self.varIds.pop()
        id2 = self.varIds.pop()

        var1 = self.tabla.buscar_variable(id1)
        var2 = self.tabla.buscar_variable(id2)

        cuad = Cuadruplo(operador,var1,var2,"0")
        self.estatutos.append(cuad)

    def valid_operation(tipo1, tipo2, op):
        try:
            resultado = CUBO[tipo1][tipo2][op]
        except KeyError:
            resultado = "invalido"

        if resultado == "invalido":
            raise Exception("ERROR: %s %s %s no es una operacion valida" % (
                tipo1, op, tipo2
            ))

        return resultado

    def dump(self):
        for estatuto in self.estatutos:
            print estatuto.toString()

    def addVar(self, id):
        self.varIds.append(id)
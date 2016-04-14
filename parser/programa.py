from semantic_cube import CUBE
from cuadruplo import Cuadruplo

class Programa:
    def __init__(self, nombre):
        self.nombre = nombre
        self.estatutos = []

    def aritmetica(self, operador, var1 ,var2):
        # TODO valida que es una operacion valida utilizando la funcion que puse ahi abajo
        # TODO poner mas meeps por ahi

        cuad = Cuadruplo(operador,var1,var2,0)
        self.estatutos.append(cuad)

    def valid_operation(tipo1, tipo2, op):
        try:
            resultado = CUBE[tipo1][tipo2][op]
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

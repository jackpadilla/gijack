from semantic_cube import CUBO
from cuadruplo import Cuadruplo

class Programa:
    def __init__(self, tabla, nombre):
        self.tabla = tabla
        self.nombre = nombre
        self.estatutos = []
        self.varIds = []

    def aritmetica(self, operador):
   

        id1 = self.varIds.pop()
        id2 = self.varIds.pop()

        var1 = self.tabla.buscar_variable(id1)
        var2 = self.tabla.buscar_variable(id2)

        tipo = self.operacion(var1['tipo'], var2['tipo'], operador)
        temporal = self.tabla.agregar_temporal(tipo)
        self.varIds.append(temporal['nombre'])

        cuad = Cuadruplo(operador,var1['nombre'],var2['nombre'],temporal['nombre'])
        self.estatutos.append(cuad)

        #Para constantes


    def asignacion(self, variable):
        otroId = self.varIds.pop()

        var1 = self.tabla.buscar_variable(variable)
        var2 = self.tabla.buscar_variable(otroId)

        if var1["tipo"] != var2["tipo"]:
            raise Exception("ERROR: %s %s  la asignacion de tipos no es valida" %(
               var1["tipo"], var2["tipo"] 
            ))

        cuad=Cuadruplo("=",var2['nombre'],'',var1['nombre'])
        self.estatutos.append(cuad)

    def lectura(self, variable):
       

        var1 = self.tabla.buscar_variable(variable)
        

        

        cuad=Cuadruplo("read",'','',var1['nombre'])
        self.estatutos.append(cuad)

    def negacion(self):
        otroId = self.varIds.pop()

        var=self.tabla.buscar_variable(otroId)

        if var["tipo"] != "bool":
            raise Exception("ERROR: solo se pueden negar variables de tipo bool " )

        temporal = self.tabla.agregar_temporal("bool")
        self.varIds.append(temporal['nombre'])

        cuad = Cuadruplo("!",var['nombre'],'',temporal['nombre'])
        self.estatutos.append(cuad)

    def imprimir(self):
        otroId = self.varIds.pop()

        var=self.tabla.buscar_variable(otroId)



        cuad = Cuadruplo("print",var['nombre'],'','')
        self.estatutos.append(cuad)

    def operacion(self, tipo1, tipo2, op):
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

    def add_var(self, id):
        self.varIds.append(id)

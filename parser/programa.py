from semantic_cube import CUBO
from cuadruplo import Cuadruplo

class Programa:
    def __init__(self, tabla, nombre):
        self.tabla = tabla
        self.nombre = nombre
        self.estatutos = []
        self.varIds = []
        self.saltos = []
        self.ifelsecount = 1
        self.cuadruplosFor=[]

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
    # funcion para estatuos if else & else if
    def si(self):
        otroId = self.varIds.pop()

        var=self.tabla.buscar_variable(otroId)

        if var["tipo"] != "bool":
            raise Exception("ERROR:  " )

        self.saltos.append(len(self.estatutos))

        cuad = Cuadruplo("gotof",var['nombre'],'_','')
        self.estatutos.append(cuad)

    def talvez(self):
        cuad = Cuadruplo("goto",'','_','')
        self.estatutos.append(cuad)
        
        cont = self.saltos.pop()
        cuad = self.estatutos[cont]
        cuad.direccion2 = str(len(self.estatutos))

        self.saltos.append(len(self.estatutos)-1)
       
    #rellana los saltos de los if pendientes.     
    def pudieras(self):
        for i in range(self.ifelsecount):
            cont = self.saltos.pop()
            cuad = self.estatutos[cont]

            cuad.direccion2 = str(len(self.estatutos))

        self.ifelsecount = 1

    # cuenta la cantidad de else if para rellenar todos los saltos.
    def comprender(self):
        self.ifelsecount += 1

     # programacion del while y do while
     #agrega a la pila de saltos el punto de retorno del ciclo
    def mientras(self):
        self.saltos.append(len(self.estatutos))

    #agrega el goto en falso en la expresion del while
    def siga(self):
        otroId = self.varIds.pop()

        var=self.tabla.buscar_variable(otroId)

        if var["tipo"] != "bool":
            raise Exception("ERROR:  " )

        self.saltos.append(len(self.estatutos))

        cuad = Cuadruplo("gotof",var['nombre'],'_','')
        self.estatutos.append(cuad)
    #rellena la funcion while
    def viendo(self):
        falso=self.saltos.pop()
        retorno=self.saltos.pop()

        cuad = Cuadruplo("goto",' ',retorno,'')
        self.estatutos.append(cuad)

        cuad = self.estatutos[falso]
        cuad.direccion2 = str(len(self.estatutos))

    #funcion utilizada para retornar en el dowhile
    def tucara(self):
        otroId = self.varIds.pop()

        var=self.tabla.buscar_variable(otroId)

        if var["tipo"] != "bool":
            raise Exception("ERROR:  " )

       
        verdadero=self.saltos.pop()

        cuad = Cuadruplo("gotot",var['nombre'],verdadero,'')
        self.estatutos.append(cuad)

    #ciclo for
    def quiereme(self):
        cuad =Cuadruplo('','','','')
        self.estatutos.append(cuad)
        otroId = self.varIds.pop()

        var=self.tabla.buscar_variable(otroId)

        if var["tipo"] != "bool":
            raise Exception("ERROR:  " )

        self.saltos.append(len(self.estatutos))

        cuad2 = Cuadruplo("gotof",var['nombre'],'_','')
        self.estatutos.append(cuad2)

    def otra(self):
        cuad = self.estatutos.pop()

        while cuad.direccion1 != '':
            self.cuadruplosFor.append(cuad)
            cuad = self.estatutos.pop()
    
    def vez(self):
        while self.cuadruplosFor:
            self.estatutos.append(self.cuadruplosFor.pop())
        falso=self.saltos.pop()
        retorno=self.saltos.pop()

        cuad = Cuadruplo("goto",' ',retorno,'')
        self.estatutos.append(cuad)

        cuad = self.estatutos[falso]
        cuad.direccion2 = str(len(self.estatutos))




    def dump(self):
        for i, estatuto in enumerate(self.estatutos):
            print "[%d] %s" % (i, estatuto.toString())

    def add_var(self, id):
        self.varIds.append(id)

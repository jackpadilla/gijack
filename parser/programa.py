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
        self.paramcount=0
        self.funcName=""

    def aritmetica(self, operador):
        id1 = self.varIds.pop()
        id2 = self.varIds.pop()

        var1 = self.tabla.buscar_variable(id1)
        var2 = self.tabla.buscar_variable(id2)

        tipo = self.operacion(var1['tipo'], var2['tipo'], operador)
        temporal = self.tabla.agregar_temporal(tipo)
        self.varIds.append(temporal['nombre'])

        cuad = Cuadruplo(operador,var2['id'],var1['id'],temporal['id'])
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

        cuad=Cuadruplo("=",var2['id'],'_',var1['id'])
        self.estatutos.append(cuad)

    def lectura(self, variable,texto):
        var1 = self.tabla.buscar_variable(variable)

        if texto :
            var2 = self.tabla.agregar_constante(texto,"string")
            cuad=Cuadruplo("read",var2['id'],'_',var1['id'])
        else :
            cuad=Cuadruplo("read",'_','_',var1['id'])

        self.estatutos.append(cuad)

    def negacion(self):
        otroId = self.varIds.pop()

        var=self.tabla.buscar_variable(otroId)

        if var["tipo"] != "bool":
            raise Exception("ERROR: solo se pueden negar variables de tipo bool " )

        temporal = self.tabla.agregar_temporal("bool")
        self.varIds.append(temporal['nombre'])

        cuad = Cuadruplo("!",var['id'],'_',temporal['id'])
        self.estatutos.append(cuad)

    def imprimir(self):
        otroId = self.varIds.pop()

        var=self.tabla.buscar_variable(otroId)

        cuad = Cuadruplo("print",var['id'],'_','_')
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

        cuad = Cuadruplo("gotof",var['id'],'_','_')
        self.estatutos.append(cuad)

    def talvez(self):
        cuad = Cuadruplo("goto",'_','_','_')
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

        cuad = Cuadruplo("gotof",var['id'],'_','_')
        self.estatutos.append(cuad)
    #rellena la funcion while
    def viendo(self):
        falso=self.saltos.pop()
        retorno=self.saltos.pop()

        cuad = Cuadruplo("goto",'_',retorno,'_')
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

        cuad = Cuadruplo("gotot",var['id'],verdadero,'_')
        self.estatutos.append(cuad)

    #ciclo for
    def quiereme(self):
        otroId = self.varIds.pop()
        var=self.tabla.buscar_variable(otroId)

        if var["tipo"] != "bool":
            raise Exception("ERROR:  " )

        self.saltos.append(len(self.estatutos))

        cuad2 = Cuadruplo("gotof",var['id'],'_','_')
        self.estatutos.append(cuad2)

        cuad =Cuadruplo('','','','')
        self.estatutos.append(cuad)


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

        cuad = Cuadruplo("goto",'_',retorno,'_')
        self.estatutos.append(cuad)

        cuad = self.estatutos[falso]
        cuad.direccion2 = str(len(self.estatutos))

    def brincamain(self):
        cuad = Cuadruplo("goto",'_','_','_')
        self.estatutos.append(cuad)


    def brincaprincipio(self,tipo):
        self.tabla.agregar_funcion("main",tipo,len(self.estatutos))
        cuad=self.estatutos[0]
        cuad.direccion2=str(len(self.estatutos))

    def regresafuncion(self):
        cuad =Cuadruplo("endfunc",'_','_','_')
        self.estatutos.append(cuad)

    def retornar(self):
        respuesta=self.varIds.pop()
        var = self.tabla.buscar_variable(respuesta)
        func = self.tabla.buscar_funcion(self.funcName)
        fuk = func["variable"]["id"] if func["variable"] else "_"
        cuad =Cuadruplo("return",var["id"],'_',fuk)
        self.estatutos.append(cuad)

    def llamarfunc(self,nombre):
        func= self.tabla.buscar_funcion(nombre)
        cuad =Cuadruplo("era",func['id'],'_','_')
        self.estatutos.append(cuad)
        self.paramcount=0;
        self.funcName=nombre

    def generarPam(self):
        parametro=self.varIds.pop()
        var=self.tabla.buscar_variable(parametro)
        par=self.tabla.obtener_parametro(self.paramcount,self.funcName)

        if var["tipo"] != par["tipo"]:
            raise Exception("ERROR: %s %s  la asignacion de parametros de tipos no es valida" %(
               var["tipo"], par["tipo"]
            ))
        cuad =Cuadruplo("param",var["id"],'_',par["id"])
        self.estatutos.append(cuad)
        self.paramcount+=1

    def argumentar(self,nombre,tipo):
        var = self.tabla.agregar_variable(nombre,tipo)
        self.tabla.agregar_parametro(var)

    def declarar_funcion(self, nombre, tipo):
        self.tabla.agregar_funcion(nombre, tipo,len(self.estatutos))
        self.funcName = nombre

    def gosubrut(self):
        func= self.tabla.buscar_funcion(self.funcName)
        cuad =Cuadruplo("gosub",func['contador'],'_','_')
        self.estatutos.append(cuad)

        if func["variable"]:
            var = func["variable"]
            self.varIds.append(var["nombre"])

    def dump(self):
        for i, estatuto in enumerate(self.estatutos):
            print "[%d] %s" % (i, estatuto.toString())

    def escribo(self, nombre):
        filename = nombre.split(".")[0] + '.jack'

        with open(filename,'w') as f:
            for tipo, cantidad in self.tabla.memoria.items():
                f.write("gen %s %d\n" % (tipo, cantidad))

            for nombre,constante in self.tabla.constantes.items():
                if constante["add"]:
                    f.write("const %s %s %s\n" % (constante["tipo"], constante["id"], nombre))

            for funcion, datos in self.tabla.funciones.items():
                if funcion != 'main' and datos['variable']:
                    f.write("func %s %s\n" % (datos['variable']['tipo'], datos['variable']['id']))

            for i, estatuto in enumerate(self.estatutos):
                f.write(estatuto.toString())
                f.write("\n")

    def line_dump(self):
        lines = []

        for tipo, cantidad in self.tabla.memoria.items():
            lines.append("gen %s %d" % (tipo, cantidad))

        for nombre,constante in self.tabla.constantes.items():
            if constante["add"]:
                lines.append("const %s %s %s" % (constante["tipo"], constante["id"], nombre))

        for funcion, datos in self.tabla.funciones.items():
            if funcion != 'main' and datos['variable']:
                lines.append("func %s %s" % (datos['variable']['tipo'], datos['variable']['id']))

        for i, estatuto in enumerate(self.estatutos):
            lines.append(estatuto.toString())

        return lines

    def debug(self):
        cuad = Cuadruplo("debug",'_','_','_')
        self.estatutos.append(cuad)

    def add_var(self, id):
        self.varIds.append(id)

    def agregar_arreglo(self, nombre, tipo, tam):
        tama = int(tam)
        self.tabla.agregar_arreglo(nombre, tipo, tama)

    def asignar_arreglo(self, nombre):
        var2 = self.varIds.pop()
        var1 = self.varIds.pop()
        
        var = self.tabla.buscar_variable(var2)
        index = self.tabla.buscar_variable(var1)
        arreglo = self.tabla.buscar_arreglo(nombre)

        if index['tipo'] != 'int':
            raise Exception('El acceso a un arreglo solo puede ser con un valor entero')

        cuad = Cuadruplo('arrass', var['id'], index['id'], arreglo['empieza'])
        self.estatutos.append(cuad)

    def accesar_arreglo(self, nombre):
        varid = self.varIds.pop()
        index = self.tabla.buscar_variable(varid)
        arreglo = self.tabla.buscar_arreglo(nombre)

        if index['tipo'] != 'int':
            raise Exception('El acceso a un arreglo solo puede ser con un valor entero')

        temporal = self.tabla.agregar_temporal(arreglo['tipo'])
        self.varIds.append(temporal['nombre'])

        cuad = Cuadruplo('arracc', arreglo['empieza'], index['id'], temporal['id'])
        self.estatutos.append(cuad)

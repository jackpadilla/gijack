class Tabla():
    def __init__(self):
        self.variables = {}
        self.funciones = {}
        self.constantes = {}
        self.memoria = {
            'int':0,
            'float':0,
            'bool':0,
            'string':0
        }
        self.contexto = ""

    def buscar_variable(self, nombre):
        try:
            return self.traer_contexto()[nombre]
        except KeyError:
            try:
                return self.variables["constantes"][nombre]
            
            except:

                raise Exception("ERROR: Variable %s no definida" % nombre)

    def traer_contexto(self):
        if not self.contexto in self.variables:
            self.variables[self.contexto] = {}
    
        return self.variables[self.contexto]



    def agregar_variable(self, variable, tipo):
        if variable in self.traer_contexto().keys():
            raise Exception('Variable ya existe: ' + variable)

        var = {
            'nombre': variable, 
            'tipo': tipo,
            'id': self.pedir_id(tipo)
        }

        self.traer_contexto()[variable] = var
        return var

    def pedir_id(self,tipo):
        nuevoId= tipo[0]+ str(self.memoria[tipo])
        self.memoria[tipo]+=1
        return nuevoId


    def print_vars(self):
        for contexto,tabla in self.variables.items():
            if tabla:

                for nombre,var in tabla:
                    print contexto,nombre,var["tipo"]

    def agregar_funcion(self, funcion, tipo,contador):
        if funcion in self.funciones.keys():
            raise Exception('Funcion ya existe: '+ funcion)

        if tipo:
            var = self.agregar_constante(funcion,tipo,False)
        else:
            var = None

        self.funciones[funcion] = {
            'contador':contador,
            'variable': var,
            'parametros':[],
            'tipo':tipo,
            'id': len(self.funciones.keys())
        }

        self.contexto=funcion


    def buscar_funcion(self, funcion):
        try:
            return self.funciones[funcion]
        except KeyError:
            raise Exception('Funcion no declarada %s' % funcion)

    def print_funcion(self):
        for nombre,var in self.funciones.items():
            print nombre,var["tipo"]

    def agregar_constante(self, constante, tipo, add=True):
        contexto= self.contexto
        self.contexto="constantes"

        if constante in self.traer_contexto().keys():
            return self.traer_contexto()[constante]
        
        var = self.agregar_variable(constante, tipo)
        var["add"] = add
        self.constantes[constante] = var
        self.contexto=contexto

        return self.constantes[constante]

    def print_constante(self):
        for nombre,var in self.constantes.items():
            print nombre,var["tipo"]

    def agregar_temporal(self, tipo):
        nombre = "___tmp_%s_%d" % (tipo, len(self.traer_contexto().keys()))

        return self.agregar_variable(nombre, tipo)

    def agregar_parametro(self,parametro):
        self.funciones[self.contexto]["parametros"].append(parametro)

    def obtener_parametro(self,contador,contexto):
        if contador >= len(self.funciones[contexto]["parametros"]):
            raise Exception("Cantidad incorrecta de argumentos")
        
        return self.funciones[contexto]["parametros"][contador]


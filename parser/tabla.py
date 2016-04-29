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

    def buscar_variable(self, nombre):
        try:
            return self.variables[nombre]
        except KeyError:
            raise Exception("ERROR: Variable %s no definida" % nombre)

    def agregar_variable(self, variable, tipo):
        if variable in self.variables.keys():
            raise Exception('Variable ya existe: ' + variable)

        var = {
            'nombre': variable, 
            'tipo': tipo,
            'id': self.pedir_id(tipo)
        }

        self.variables[variable] = var
        return var

    def pedir_id(self,tipo):
        nuevoId= tipo[0]+ str(self.memoria[tipo])
        self.memoria[tipo]+=1
        return nuevoId


    def print_vars(self):
        for nombre,var in self.variables.items():
            print nombre,var["tipo"]

    def agregar_funcion(self, funcion, tipo):
        if funcion in self.funciones.keys():
            raise Exception('Funcion ya existe: '+ funcion)

        self.funciones[funcion] ={
            'tipo':tipo,
            'id': len(self.funciones.keys())
        }

    def buscar_funcion(self, funcion):
        try:
            return self.funciones[funcion]
        except KeyError:
            raise Exception('Funcion no declarada')

    def print_funcion(self):
        for nombre,var in self.funciones.items():
            print nombre,var["tipo"]

    def agregar_constante(self, constante, tipo):
        if constante in self.variables.keys():
            return

        self.constantes[constante] = self.agregar_variable(constante, tipo)

    def print_constante(self):
        for nombre,var in self.constantes.items():
            print nombre,var["tipo"]

    def agregar_temporal(self, tipo):
        nombre = "___tmp_%s_%d" % (tipo, len(self.variables.keys()))

        return self.agregar_variable(nombre, tipo)
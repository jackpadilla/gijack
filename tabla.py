class Tabla():
    def __init__(self):
        self.variables = {}
        self.funciones = {}
        
    def agregar_variable(self, variable, tipo):
        if variable in self.variables.keys():
            raise Exception('Variable ya existe: ' + variable)

        self.variables[variable] = {
            'tipo': tipo,
            'id': len(self.variables.keys())
        }

    def variable_existe(self, variable):
        try:
            return self.variables[variable]
        except KeyError:
            raise Exception('Variable no declarada: ' + variable)

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
    def funcion_existe(self, funcion):
        try:
            return self.funciones[funcion]
        except KeyError:
            raise Exception('Funcion no declarada')


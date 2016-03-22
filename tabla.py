class Tabla():
    def __init__(self):
        self.variables = {}
        self.funciones = {}
        self.ids= []
        self.tipos= []

    def agregar_variable(self):
        print "meep"
        variable=self.ids[-1]
        tipo=self.tipos[-1]
        if variable in self.variables.keys():
            raise Error('Variable ya existe')

        self.variables[variable] = {
            'tipo': tipo,
            'id': len(self.variables.keys())
        }

    def variable_existe(self, variable):
        try:
            return self.variables[variable]
        except KeyError:
            raise Error('Variable no declarada')

    def agregar_id(self, id):
        self.ids.append(id)

    def agregar_tipo(self, tipo):
        self.tipos.append(tipo)

    def print_vars(self):
        for nombre,var in self.variables.items():
            print nombre,var["tipo"]
        

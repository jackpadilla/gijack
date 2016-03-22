class Tabla()
    def __init__(self):
        self.variables = {}
        self.funciones = {}
        self.ids= []

    def agregar_variable(variable, tipo):
        if variable in variables.key:
            raise Error('Variable ya existe')

        variables[variable] = {
            'tipo': tipo,
            'id': len(variables.keys())
        }

    def variable_existe(variable):
        try:
            return variables[variable]
        except KeyError:
            raise Error('Variable no declarada')

    def agregar_id(id):
        self.ids.append(id)


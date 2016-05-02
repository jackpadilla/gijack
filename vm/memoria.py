class Memoria:
    def __init__(self, copyMem=None):
        self.enteros=[]
        self.flotantes=[]
        self.booleanos=[]
        self.palabras=[]

        if copyMem:
            self.copy_from(copyMem)

    def copy_from(self, other):
        for entero in other.enteros:
            self.enteros.append(entero)

        for flotante in other.flotantes:
            self.flotantes.append(flotante)

        for booleano in other.booleanos:
            self.booleanos.append(booleano)

        for palabra in other.palabras:
            self.palabras.append(palabra)

    def llenarMemoria(self, tipo, cant):
        cantidad = int(cant)

        if tipo == "int":
            for i in range(cantidad+1):
                self.enteros.append(0)
        elif tipo == "float":
            for i in range(cantidad+1):
                self.flotantes.append(0.0)
        elif tipo == "bool":
            for i in range(cantidad+1):
                self.booleanos.append(0)
        elif tipo == "string":
            for i in range(cantidad+1):
                self.palabras.append(0)


    def obtenerVariable(self,varid):
        tipo=varid[0]
        direccion=int(varid[1:])

        if tipo == "i":
            return self.enteros[direccion]
        elif tipo == "f":
            return self.flotantes[direccion]
        elif tipo == "b":
            return self.booleanos[direccion]
        elif tipo == "s":
            return self.palabras[direccion]
        else:
            raise Exception("Error tipo no valido")

    def ponerValor(self,varid,valor):
        tipo=varid[0]
        direccion=int(varid[1:])

        if tipo == "i":
            self.enteros[direccion]= valor
        elif tipo == "f":
            self.flotantes[direccion]= valor
        elif tipo == "b":
            self.booleanos[direccion]= valor
        elif tipo == "s":
            self.palabras[direccion]= valor
        else:
            raise Exception("Error tipo no valido")

    def dump(self, which=None):
        if which:
            print 'Int %s is %s' % (which, self.enteros[int(which[1:])])
        else:
            print 'Ints: [' + ', '.join([str(i) for i in self.enteros]) + ']'

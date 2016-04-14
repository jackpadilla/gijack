class Cuadruplo:
    def __init__ (self,operacion,direccion1,direccion2,direccionDestino):
        self.operacion = operacion
        self.direccion1 = direccion1
        self.direccion2 = direccion2
        self.direccionDestino = direccionDestino

    def toString(self):
        return "%s %s %s %s" % (
            self.operacion,
            self.direccion1,
            self.direccion2,
            self.direccionDestino
        )

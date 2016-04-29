import re
from memoria import Memoria

class Meep:
    def __init__(self):
        self.estatutos = []
        self.contador = 0
        self.memoria = Memoria()

    def read_meeps(self, filename):
        with open(filename, "r+") as archivo:
            for linea in archivo.readlines():
                estatuto=linea.strip().split(" ")
                if estatuto[0] == "gen":
                    self.memoria.llenarMemoria(estatuto[1], estatuto[2])
                elif estatuto[0] == "const":
                    if estatuto[1] == "string":
                        valor = re.search(r'\".*\"', linea).group()
                        self.memoria.crearConstante(estatuto[1],valor,estatuto[2])
                    else:
                        self.memoria.crearConstante(estatuto[1],estatuto[3],estatuto[2])
                else:
                    self.estatutos.append(estatuto)


    def while_my_guitar_gently_meeps(self):
        while self.contador < len(self.estatutos):
            self.im_meeping()

    def im_meeping(self):
        estatuto = self.estatutos[self.contador]
        instruccion = estatuto[0]
        direccion1 = estatuto[1]
        direccion2 = estatuto[2]
        resultado = estatuto[3]

        if instruccion == 'print':
            self.imprimir(direccion1)
            
        elif instruccion == '+':
            self.sumar(direccion1,direccion2,resultado)
        
        elif instruccion == '-':
            self.restar(direccion1,direccion2,resultado)
        
        elif instruccion == '*':
            self.multiplicar(direccion1,direccion2,resultado)
        
        elif instruccion == '/':
            self.dividir(direccion1,direccion2,resultado)
        
        elif instruccion == '%':
            self.modear(direccion1,direccion2,resultado)
        
        elif instruccion == '==':
            self.igualque(direccion1,direccion2,resultado)
        
        elif instruccion == '>=':
            self.mayoroigual(direccion1,direccion2,resultado)
        
        elif instruccion == '<=':
            self.menoroigual(direccion1,direccion2,resultado)
        
        elif instruccion == '>':
            self.mayorque(direccion1,direccion2,resultado)
        
        elif instruccion == '<':
            self.menorque(direccion1,direccion2,resultado)
        
        elif instruccion == 'and' or instruccion == '&&':
            self.y(direccion1,direccion2,resultado)
        
        elif instruccion == 'or' or instruccion == '||':
            self.o(direccion1,direccion2,resultado)
        
        elif instruccion == '!=': 
            self.noigual(direccion1,direccion2,resultado)
        
        elif instruccion == '!' or instruccion == 'not': 
            self.negar(direccion1,resultado)

        elif instruccion == '=': 
            self.igual(direccion1,resultado)

        elif instruccion == 'gotof': 
            self.irf(direccion1,direccion2)
        
        elif instruccion == 'goto': 
            self.ir(direccion2)
        
        elif instruccion == 'gotot': 
            self.irt(direccion1,direccion2)

        self.contador += 1

    def imprimir(self, direccion):
        valor = self.memoria.obtenerVariable(direccion)
        print valor
       
    def sumar(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) + self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)

    def restar(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) - self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def dividir(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) / self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def multiplicar(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) * self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def modear(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) % self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def mayorque(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) > self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def menorque(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) < self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def igualque(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) == self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def mayoroigual(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) >= self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def menoroigual(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) <= self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def noigual(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) != self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def y(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) and self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def o(self,dir1,dir2,res):
        valor = self.memoria.obtenerVariable(dir1) or self.memoria.obtenerVariable(dir2)
        self.memoria.ponerValor(res, valor)
    
    def negar(self,dir1,res):
        valor = not self.memoria.obtenerVariable(dir1)
        self.memoria.ponerValor(res, valor)

    def igual(self,dir1,res):
        valor = self.memoria.obtenerVariable(dir1)
        self.memoria.ponerValor(res, valor)

    def irf(self,dir1,res):
        valor = self.memoria.obtenerVariable(dir1)
        if not valor:
            self.contador=int(res)-1
       

    def irt(self,dir1,res):
        valor = self.memoria.obtenerVariable(dir1)
        if valor:
            self.contador=int(res)-1
       

    def ir(self,res):
        self.contador=int(res)-1
       



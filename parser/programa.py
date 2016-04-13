class programa:
	def __init__(self,nombre):
		self.nombre = nombre
		self.estatutos = []

	def aritmetica(self, operador, var1 ,var2):
		c = cuadruplo(operador,var1,var2,0)
		self.estatutos.append(c) 

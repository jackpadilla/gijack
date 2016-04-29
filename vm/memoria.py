class Memoria: 
	def __init__(self):
		self.enteros=[]
		self.flotantes=[]
		self.booleanos=[]
		self.palabras=[]
		
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

	def crearConstante(self,tipo,valor,index):
		en = int(index[1:])

		if tipo == "int":
			self.enteros[en] = int(valor)
		elif tipo == "float":
			self.flotantes[en] = float(valor)
		elif tipo == "bool":
			self.booleanos[en] = valor==".TRUE"
		elif tipo == "string":
			self.palabras[en] = valor[1:-1]
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
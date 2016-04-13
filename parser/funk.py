from gijackParser import gijackParser

class Funk(gijackParser):
	def __init__ (self,stream,tabla, programa):
		self.tabla = tabla
		self.programa=programa
		super(Funk, self).__init__(stream)
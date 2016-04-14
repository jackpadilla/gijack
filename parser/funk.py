from gijackParser import gijackParser

class Funk(gijackParser):
	def __init__ (self,stream,tabla, programa2):
		self.tabla = tabla
		self.programa2=programa2
		super(Funk, self).__init__(stream)
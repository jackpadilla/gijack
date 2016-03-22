from gijackParser import gijackParser

class Funk(gijackParser):
	def __init__ (self,stream,tabla):
		self.tabla = tabla
		super(Funk, self).__init__(stream)
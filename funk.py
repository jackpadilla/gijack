from gijack import gijackparser
class Funk(gijackparser):
	def __init__ (self,stream,tabla):
		self.tabla = tabla
		super(Funk,self).__init__(stream)
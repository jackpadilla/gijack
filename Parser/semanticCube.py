from pythonds.basic.stack import stack

numVariables = 5
tipoVariables = 4
tipoOperadores = 14
NOT_VALID = -1

distance = [[[0 for k in xrange(numVariables)] for j in xrange(tipoVariables)] for i in xrange(tipoOperadores)]
	[	[
			#BOOL BOOL
			#+			-			  *		   /		  %		    &&		      ||			<		   >		  <=		 >=			   ==		     !=			    =
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, VARTYPE_BOOL, VARTYPE_BOOL, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, VARTYPE_BOOL, VARTYPE_BOOL],
			#BOOL INT
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID],
			#BOOL FLOAT
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID],
			#BOOL STRING
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID]
		],
		[
			#INT BOOL
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID],
			#INT INT
			#+			   -			*		    /			 %		      &&		  ||		<		       >			<=			  >=			==		      !=			=
			[VARTYPE_INT, VARTYPE_INT, VARTYPE_INT, VARTYPE_INT, VARTYPE_INT, NOT_VALID, NOT_VALID, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_INT],
			#INT FLOAT
			#+			    -			   *		      /			     %		        &&		   ||		  <		        >			  <=			>=			  ==		    !=			  =
			[VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, NOT_VALID, NOT_VALID, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, NOT_VALID],
			#INT STRING
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID]
		],
		[
			#FLOAT BOOL
			#+			    -		   *		  /			 %		    &&		   ||		  <		     >		    <=		   >=		  ==		 !=			  =
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID],
			#FLOAT INT
			[VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, NOT_VALID, NOT_VALID, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_FLOAT],
			#FLOAT FLOAT
			[VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, VARTYPE_FLOAT, NOT_VALID, NOT_VALID, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_FLOAT],
			#FLOAT STRING
			[VARTYPE_STRING, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID]
		],
		[
			#STRING BOOL
			#     +			   	  -		   *		  /			 %		    &&		   ||		  <		     >		    <=		   >=		  ==		 !=			  =			
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID],
			#STRING INT
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID],
			#STRING FLOAT
			[NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID],
			#STRING STRING
			[VARTYPE_STRING, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, NOT_VALID, VARTYPE_BOOL, VARTYPE_BOOL, VARTYPE_STRING]
		],
	]
			
	 


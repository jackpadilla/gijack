cubo = {
    "bool": {
        "bool": {
            "+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "bool",
            "||": "bool",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
        },
        "int": {
            "+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
        },
        "float": {
        	"+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "invalid"
            # ...
        },
        "string": {
        	"+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "invalid"
        }
    },
    "int": {
        "bool": {
            "+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
        },
        "int": {
            "+": "int",
            "-": "int",
            "*": "int",
            "/": "float"
            "%": "float",
            "&&": "invalid",
            "||": "invalid",
            "<": "bool",
            ">": "bool",
            "<=": "bool",
            ">=": "bool",
            "==": "bool"
            # ...
        },
        "float": {
        	"+": "float",
            "-": "float",
            "*": "float",
            "/": "float"
            "%": "float",
            "&&": "invalid",
            "||": "invalid",
            "<": "bool",
            ">": "bool",
            "<=": "bool",
            ">=": "bool",
            "==": "bool"
            # ...
        },
        "string": {
        	"+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
            # ...aqui
        }
    },
    "float": {
        "bool": {
            "+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
        },
        "int": {
            "+": "float",
            "-": "float",
            "*": "float",
            "/": "float"
            "%": "float",
            "&&": "invalid",
            "||": "invalid",
            "<": "bool",
            ">": "bool",
            "<=": "bool",
            ">=": "bool",
            "==": "bool"
            # ...
        },
        "float": {
        	"+": "float",
            "-": "float",
            "*": "float",
            "/": "float"
            "%": "float",
            "&&": "invalid",
            "||": "invalid",
            "<": "bool",
            ">": "bool",
            "<=": "bool",
            ">=": "bool",
            "==": "bool"
            # ...
        },
        "string": {
        	"+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
            # ...
        }
    },
    "string": {
        "bool": {
            "+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
        },
        "int": {
            "+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
            # ...
        },
        "float": {
        	"+": "invalid",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
            # ...
        },
        "string": {
        	"+": "string",
            "-": "invalid",
            "*": "invalid",
            "/": "invalid"
            "%": "invalid",
            "&&": "invalid",
            "||": "invalid",
            "<": "invalid",
            ">": "invalid",
            "<=": "invalid",
            ">=": "invalid",
            "==": "bool"
            # ...
        }
    },
}

def ValidOperation(tipo1, tipo2, op):
	resultado = cubo[tipo1][tipo2][op]
	return resultado


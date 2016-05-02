grammar gijack;

start: programa EOF;

programa: programAux funcion* main CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT ;

programAux:TK_PROGRAM ID DELIMITER {self.programa2.brincamain()};

main: vartipo=tipo 'main' {self.programa2.brincaprincipio($vartipo.text)};

procesos: proceso+;

retorno: 'return' expresion DELIMITER {self.programa2.retornar()};

proceso
  : asignacion
  | condicion
  | ciclos
  | imprimir
  | lectura
  | func_call DELIMITER
  | variable
  | retorno
  | debug
  ;

debug: 'debug' PAREN_LEFT PAREN_RIGHT DELIMITER {self.programa2.debug()};

lista: expresion;

asignacion: (varId=simple_id|varId=vdimAux SQUARE_BRACKET_LEFT lista SQUARE_BRACKET_RIGHT) ASSIGN_OP expresion DELIMITER {self.programa2.asignacion($varId.text)};

forLoop:forAux forAux2 forAux3 CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT{self.programa2.vez()};

forAux:TK_FOR PAREN_LEFT (asignacion | variable) {self.programa2.mientras()};

forAux2:expresion DELIMITER {self.programa2.quiereme()};

forAux3:asignacion PAREN_RIGHT {self.programa2.otra()};

whileLoop: whileAux whileAux2 CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT {self.programa2.viendo()} ;

whileAux: TK_WHILE {self.programa2.mientras()} ;

whileAux2: PAREN_LEFT expresion PAREN_RIGHT {self.programa2.siga()} ;

doLoop: doAux CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT TK_WHILE PAREN_LEFT expresion PAREN_RIGHT DELIMITER {self.programa2.tucara()} ;

doAux: TK_DO {self.programa2.mientras()} ;

ciclos: (whileLoop | doLoop | forLoop) ;

condicion: ifCond elseifCond* elseCond? {self.programa2.pudieras()} ;

ifCond: ifAux CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT ;

ifAux: TK_IF PAREN_LEFT expresion PAREN_RIGHT {self.programa2.si()};

elseCond: elseAux CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT;

elseAux: TK_ELSE {self.programa2.talvez()};

elseifCond: elseAux ifCond {self.programa2.comprender()};

variable
  : varTipo=tipo varId=simple_id DELIMITER {self.tabla.agregar_variable($varId.text, $varTipo.text)}
  | varTipo=tipo varId=simple_id ASSIGN_OP expresion DELIMITER {self.tabla.agregar_variable($varId.text, $varTipo.text)}
  | vdim DELIMITER
  ;

simple_id returns [String varId]
  : var=ID {$varId=$var.text}
  ;

vdim
  : varTipo=tipo varId=vdimAux SQUARE_BRACKET_LEFT INT SQUARE_BRACKET_RIGHT {self.tabla.agregar_variable($varId.text, $varTipo.text)}
  ;

vdimAux returns [String varId]
  : var=ID {$varId=$var.text}
  ;

imprimir
  : TK_PRINT PAREN_LEFT expresion PAREN_RIGHT DELIMITER {self.programa2.imprimir()};

tipo returns [String varTipo]
  : var=('bool'| 'string' | 'int' | 'float' ) {$varTipo=$var.text};

argumentos: (arguAux (COMMA arguAux)* )? ;

arguAux
  : varTipo=tipo varId=simple_id {self.programa2.argumentar($varId.text, $varTipo.text)}
  | varTipo=tipo varId=vdimAux SQUARE_BRACKET_LEFT SQUARE_BRACKET_RIGHT {self.programa2.argumentar($varId.text, $varTipo.text)}
  ;

funcion: funcionAux PAREN_LEFT argumentos PAREN_RIGHT CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT {self.programa2.regresafuncion()};

funcionAux: TK_FUNC varTipo=tipo? varId=ID {self.programa2.declarar_funcion($varId.text, $varTipo.text)};

const:
  ( varId=INT {self.tabla.agregar_constante($varId.text, "int")}
  | varId=FLOAT {self.tabla.agregar_constante($varId.text, "float")}
  | varId=STRING {self.tabla.agregar_constante($varId.text, "string")}
  | varId=BOOL {self.tabla.agregar_constante($varId.text, "bool")}
  );

comp_op returns [String op]
: var=( '>' | '<' | '>=' | '<=' | '==' | '!=') {$op=$var.text};

rel_op returns [String op]
: var=('and' | 'or' | '&&' | '||') {$op=$var.text};

mult_op returns [String op]
  : var=('*' | '%' | '/' ) {$op=$var.text};

add_op returns [String op]
  : var=('+' | '-') {$op=$var.text};

neg_op returns [String op]
: var=('not' | '!') {$op=$var.text};

expresion
  : exp
  | op=rel_op expresion {self.programa2.aritmetica($op.text)}
  ;

exp
  : e
  | e op=comp_op e {self.programa2.aritmetica($op.text)}
  ;

e
  : term
  | term op=add_op e {self.programa2.aritmetica($op.text)}
  ;

term
  : fact
  | fact op=mult_op term {self.programa2.aritmetica($op.text)}
  ;

fact
  : ( PAREN_LEFT expresion PAREN_RIGHT | f)
  | neg_op ( PAREN_LEFT expresion PAREN_RIGHT | f) {self.programa2.negacion()}
  ;

f
  : varId=const {self.programa2.add_var($varId.text)}
  | varId=simple_id {self.programa2.add_var($varId.text)}
  | varId=vdimAux SQUARE_BRACKET_LEFT lista SQUARE_BRACKET_RIGHT {self.programa2.add_var($varId.text)}
  | func_call
  ;

lectura: TK_READ PAREN_LEFT (varTxt=STRING COMMA)? varId=simple_id PAREN_RIGHT DELIMITER {self.programa2.lectura($varId.text,$varTxt.text)};

func_call: callAux PAREN_LEFT call_arg PAREN_RIGHT {self.programa2.gosubrut()};

callAux:varId=simple_id {self.programa2.llamarfunc($varId.text)} ;

call_arg: ( call_argaux (COMMA call_argaux )*)? ;

call_argaux: expresion {self.programa2.generarPam()};


// ---
// TOKENS
// ---

DELIMITER: ';';
CURLY_BRACKET_LEFT: '{';
CURLY_BRACKET_RIGHT: '}';
SQUARE_BRACKET_LEFT: '[';
SQUARE_BRACKET_RIGHT: ']';
PAREN_LEFT: '(';
PAREN_RIGHT: ')';
COMMA: ',';
TK_PROGRAM: 'program';
TK_FOR: 'for';
TK_WHILE: 'while';
TK_DO: 'do';
TK_FUNC: 'funcion';
TK_READ: 'read';
TK_PRINT: 'print';
TK_IF: 'if';
TK_ELSE: 'else';
ASSIGN_OP: '=';

ID  : ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*
    ;

INT : '0'..'9'+
    ;

FLOAT
    : ('0'..'9')+ '.' ('0'..'9')* EXPONENT?
    | '.' ('0'..'9')+ EXPONENT?
    | ('0'..'9')+ EXPONENT
    ;

BOOL: '.'('TRUE' | 'FALSE');

WS: (' '| '\t'| '\r'| '\n') -> skip;

STRING
    : '"' ( ESC_SEQ | ~('\\'|'"') )* '"' ;

fragment
EXPONENT : ('e'|'E') ('+'|'-')? ('0'..'9')+ ;

fragment
HEX_DIGIT : ('0'..'9'|'a'..'f'|'A'..'F') ;

fragment
ESC_SEQ
    :   '\\' ('b'|'t'|'n'|'f'|'r'|'\"'|'\''|'\\')
    |   UNICODE_ESC
    |   OCTAL_ESC
    ;

fragment
OCTAL_ESC
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;

fragment
UNICODE_ESC
    :   '\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
    ;

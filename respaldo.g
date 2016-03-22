grammar gijack;



start: programa EOF;

programa: 'program' ID ';' (variable|funcion)? '{' procesos '}'; 

procesos: proceso+;

proceso: (asignacion | condicion | ciclos | imprimir | lectura | FUNC_CALL | variable ) ;

LISTA: CTE (','CTE)* ;

asignacion: ID ( '('  LISTA  ')' )? '=' EXPRESION ';' ;

forLoop: 'for'(asignacion|variable) ';' EXPRESION ';' EXPRESION ';' procesos;

whileLoop: 'while' EXPRESION '{' procesos '}' ;

doLoop: 'do' '{' proceso '}' 'while' EXPRESION ';' ;

ciclos: (whileLoop | doLoop | forLoop) ;

condicion: 'if' EXPRESION '{' procesos '}' elseifCond* elseCond? ;

elseCond: 'else' '{' procesos '}'; 

elseifCond: 'else if' EXPRESION '{' procesos '}' ;

variable: tipo ID (('=' EXPRESION)|('[' LISTA ']'))? ';' ;

imprimir: 'print' '(' EXPRESION ( ',' EXPRESION)* ')' ';' ;

tipo: ('bool' | 'char' | 'string' | 'int' | 'float' ) ;

argumentos: ( tipo ID ( ',' tipo ID)*)? ;

funcion: 'funcion' tipo? ID '(' argumentos ')' '{' variable? proceso '}' ;

CTE:  (INT | FLOAT | CHAR | STRING | BOOL);

COMP_OP: ( '>' | '<' | '>=' | '<=' | '==' | '!='); 

REL_OP: ('and' | 'or' | '&&' | '||');

MULT_OP: ('*' | '%' | '/' );

ADD_OP: ( '+' | '-');

NEG_OP: ('not' | '!');

EXPRESION: EXP (REL_OP EXP)? ;

EXP: E ( COMP_OP| E)? ;

E: TERM (ADD_OP TERM)*;

TERM: FACT (MULT_OP FACT)* ;

FACT: NEG_OP? ( '(' EXPRESION ')' | CTE | (ID ('[' LISTA ']'))) ; 

lectura: 'read' '(' ID ('[' LISTA ']')?  (',' ID ('[' LISTA ']')?)* ')' ';' ;

FUNC_CALL: ID '(' CALL_ARG ')' ';' ;

CALL_ARG: (EXPRESION (',' EXPRESION )*)? ;


ID  :   ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*
    ;

INT :   '0'..'9'+
    ;

FLOAT
    :   ('0'..'9')+ '.' ('0'..'9')* EXPONENT?
    |   '.' ('0'..'9')+ EXPONENT?
    |   ('0'..'9')+ EXPONENT
    ;

BOOL: ('TRUE' | 'FALSE'); 

WS  :   ( ' '
        | '\t'
        | '\r'
        | '\n'
        ) -> skip
    ;

CHAR
    :  '"' ( ESC_SEQ | ~('\\'|'"') ) '"' ;
    
STRING
    :  '"' ( ESC_SEQ | ~('\\'|'"') )* '"' ;

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



grammar gijack;

start: programa EOF; 

programa: TK_PROGRAM ID DELIMITER funcion* CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT;

procesos: proceso+; 

proceso: (asignacion | condicion | ciclos | imprimir | lectura | func_call | variable ) ;

lista: expresion (COMMA expresion)* ;

asignacion: simple_id ASSIGN_OP expresion DELIMITER; 
 
forLoop: TK_FOR PAREN_LEFT (asignacion | variable) expresion DELIMITER expresion PAREN_RIGHT CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT;

whileLoop: TK_WHILE  PAREN_LEFT expresion PAREN_RIGHT CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT;

doLoop: TK_DO CURLY_BRACKET_LEFT proceso CURLY_BRACKET_RIGHT TK_WHILE PAREN_LEFT expresion PAREN_RIGHT DELIMITER ;

ciclos: (whileLoop | doLoop | forLoop) ;

condicion: ifCond elseifCond* elseCond? ;

ifCond: TK_IF PAREN_LEFT expresion PAREN_RIGHT CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT;

elseCond: TK_ELSE CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT;

elseifCond: TK_ELSE ifCond ;

variable
  : varTipo=tipo varId=simple_id DELIMITER {self.tabla.agregar_variable($varId.text, $varTipo.text)}
  | varTipo=tipo varId=simple_id ASSIGN_OP expresion DELIMITER {self.tabla.agregar_variable($varId.text, $varTipo.text)}
  ;

imprimir
  : TK_PRINT PAREN_LEFT expresion (COMMA expresion)* PAREN_RIGHT DELIMITER ;

tipo returns [String varTipo]
  : var=('bool' | 'char' | 'string' | 'int' | 'float' ) {$varTipo=$var.text};

argumentos: (tipo simple_id (COMMA tipo simple_id)* )? ;

funcion: TK_FUNC tipo? ID PAREN_LEFT argumentos PAREN_RIGHT CURLY_BRACKET_LEFT procesos CURLY_BRACKET_RIGHT ;

const:  (INT | FLOAT | CHAR | STRING | BOOL);

comp_op: ( '>' | '<' | '>=' | '<=' | '==' | '!=');

rel_op: ('and' | 'or' | '&&' | '||');

mult_op: ('*' | '%' | '/' );

add_op: ( '+' | '-');

neg_op: ('not' | '!');

expresion: exp (rel_op exp)* ;

exp: e ( comp_op e)? ;

e: term (add_op term)*;

term: fact (mult_op fact)* ;

fact: neg_op? ( PAREN_LEFT expresion PAREN_RIGHT | const | simple_id) ;

lectura: TK_READ PAREN_LEFT simple_id (COMMA simple_id)* PAREN_RIGHT DELIMITER ;

func_call: simple_id PAREN_LEFT call_arg PAREN_RIGHT DELIMITER ;

call_arg: (expresion (COMMA expresion )*)? ;listlist[1,2,3,4][1,2,3,4]

simple_id returns [String varId]
  : var=ID {$varId=$var.text}
  | var=ID SQUARE_BRACKET_LEFT lista SQUARE_BRACKET_RIGHT {$varId=$var.text}
  ;

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

BOOL: ('TRUE' | 'FALSE');

WS: (' '| '\t'| '\r'| '\n') -> skip;

CHAR
    : '"' ( ESC_SEQ | ~('\\'|'"') ) '"' ;

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

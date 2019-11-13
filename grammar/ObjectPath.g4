grammar ObjectPath;

// parser rules

start : expression? EOF ;

expression : '(' expression ')' # Parentheses

           | '$' # RootObject
           | '@' # CurrentObject

           | IDENTIFIER # PropertyAccess // shorthand for expr1 = @
           | expr1=expression '.' IDENTIFIER # PropertyAccess
           | '[' expr2=expression ']' # IndexAccess // shorthand for expr1 = @
           | expr1=expression '[' expr2=expression ']' # IndexAccess
           | 'filter(' expr2=expression ')' # ArrayFilter // shorthand for expr1 = @
           | expr1=expression '.' 'filter(' expr2=expression ')' # ArrayFilter
           | 'map(' expr2=expression ')' # ArrayMap // shorthand for expr1 = @
           | expr1=expression '.' 'map(' expr2=expression ')' # ArrayMap

           | IDENTIFIER '(' ((expression ',')* expression)? ')' # Function

           // operators (by priority)
           | op=('+'|'-') expression # Unary
           | '!' expression # UnaryLogicalNot
           | expression op=('*'|'/') expression # Multiplicative
           | expression op=('+'|'-') expression # Additive
           | expression op=('<'|'>'|'<='|'>=') expression # Relational
           | expression op=('=='|'!=') expression # Equality
           | expression '&&' expression # LogicalAnd
           | expression '||' expression # LogicalOr
           | <assoc=right> expression '?' expression ':' expression # Ternary

           // primitives
           | STRING # String
           | NUMBER # Number
           | BOOLEAN # Boolean
           | NULL # Null
           ;

// lexer rules

STRING : '\'' ~'\''* '\'' ;
NUMBER : '-'? ('0' | [1-9] [0-9]*) ;
BOOLEAN : 'true' | 'false' ;
NULL : 'null' ;

IDENTIFIER : [a-zA-Z_$] [a-zA-Z0-9_$]* ;

WHITESPACE : ' ' -> skip ;

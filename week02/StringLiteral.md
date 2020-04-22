StringLiteral ::
" DoubleStringCharactersopt "
' SingleStringCharactersopt '
DoubleStringCharacters ::
DoubleStringCharacter DoubleStringCharactersopt
SingleStringCharacters ::
SingleStringCharacter SingleStringCharactersopt
DoubleStringCharacter ::
SourceCharacter but not one of " or \ or LineTerminator
<LS>
<PS>
\ EscapeSequence
LineContinuation
SingleStringCharacter ::
SourceCharacter but not one of ' or \ or LineTerminator
<LS>
<PS>
\ EscapeSequence
LineContinuation
LineContinuation ::
\ LineTerminatorSequence
EscapeSequence ::
CharacterEscapeSequence
0 [lookahead ∉ DecimalDigit]
HexEscapeSequence
UnicodeEscapeSequence
A conforming implementation, when processing strict mode code, must not extend the syntax of EscapeSequence to
include LegacyOctalEscapeSequence as described in B.1.2.
CharacterEscapeSequence ::
SingleEscapeCharacter
NonEscapeCharacter
SingleEscapeCharacter :: one of
' " \ b f n r t v
NonEscapeCharacter ::
Syntax
170
© Ecma International 2019
SourceCharacter but not one of EscapeCharacter or LineTerminator
EscapeCharacter ::
SingleEscapeCharacter
DecimalDigit
xu
HexEscapeSequence ::
x HexDigit HexDigit
UnicodeEscapeSequence ::
u Hex4Digits
u{ CodePoint }
Hex4Digits ::
HexDigit HexDigit HexDigit HexDigit
# StringLiteral
*StringLiteral* ::  
&nbsp;&nbsp;  " DoubleStringCharactersopt "  
&nbsp;&nbsp;  ' SingleStringCharactersopt '  
*DoubleStringCharacters* ::  
&nbsp;&nbsp;  DoubleStringCharacter DoubleStringCharactersopt  
*SingleStringCharacters* ::  
&nbsp;&nbsp;  SingleStringCharacter SingleStringCharactersopt  
*DoubleStringCharacter* ::  
&nbsp;&nbsp;  SourceCharacter but not one of " or \ or LineTerminator  
&nbsp;&nbsp;  \<LS\>  
&nbsp;&nbsp;  \<PS\>  
&nbsp;&nbsp;  \ EscapeSequence  
&nbsp;&nbsp;  LineContinuation  
```/^[^'\\\n\r\u2028\u2029]|\u2028|\u2029|([^\n\r\u2028\u2029\dxu])|(0(?!=\d))|(x[0-9a-fA-F]{2})|(u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\}))|\\(\n|\r\n?|\u2028|\u2029)$/```  

*SingleStringCharacter* ::  
&nbsp;&nbsp;  SourceCharacter but not one of ' or \ or LineTerminator  
&nbsp;&nbsp;  \<LS\>  
&nbsp;&nbsp;  \<PS\>  
&nbsp;&nbsp;  \ EscapeSequence  
&nbsp;&nbsp;  LineContinuation  
```/^[^"\\\n\r\u2028\u2029]|\u2028|\u2029|([^\n\r\u2028\u2029\dxu])|(0(?!=\d))|(x[0-9a-fA-F]{2})|(u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\}))|\\(\n|\r\n?|\u2028|\u2029)$/```  

*LineContinuation* ::  
&nbsp;&nbsp;  \ LineTerminatorSequence  
```/^\\(\n|\r\n?|\u2028|\u2029)$/u```  

*EscapeSequence* ::  
&nbsp;&nbsp;  CharacterEscapeSequence`/^[^\n\r\u2028\u2029\dxu]$/u`  
&nbsp;&nbsp;  0 [lookahead ∉ DecimalDigit]`/^0(?!=\d)$/`  
&nbsp;&nbsp;  HexEscapeSequence`/^x[0-9a-fA-F]{2}$/`  
&nbsp;&nbsp;  UnicodeEscapeSequence`/^u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\})$/`  
```/^([^\n\r\u2028\u2029\dxu]) | (0(?!=\d)) | (x[0-9a-fA-F]{2}) | (u([0-9a-fA-F]{4}|\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\}))$/```  

*CharacterEscapeSequence* ::  
&nbsp;&nbsp;  SingleEscapeCharacter  
&nbsp;&nbsp;  NonEscapeCharacter  
```/^[^\n\r\u2028\u2029\dxu]$/u```  

*SingleEscapeCharacter* :: **one of**  
&nbsp;&nbsp;  ' " \ b f n r t v  
```/^['"\\bfnrtv]$/```  

*NonEscapeCharacter* ::  
&nbsp;&nbsp;  SourceCharacter but not one of EscapeCharacter or LineTerminator  
```/^[^\n\r\u2028\u2029'"\\bfnrtv\dxu]$/u```  

*LineTerminator* ::  
&nbsp;&nbsp;  U+000A LINE FEED (LF)
&nbsp;&nbsp;  U+000D CARRIAGE RETURN (CR)
&nbsp;&nbsp;  U+2028 LINE SEPARATOR
&nbsp;&nbsp;  U+2029 PARAGRAPH SEPARATOR
```/^[\n\r\u2028\u2029]$```  

*EscapeCharacter* ::  
&nbsp;&nbsp;  SingleEscapeCharacter  
&nbsp;&nbsp;  DecimalDigit  
&nbsp;&nbsp;  x  
&nbsp;&nbsp;  u  
```/^['"\\bfnrtv\dxu]$```  

*HexEscapeSequence* ::  
&nbsp;&nbsp;  x HexDigit HexDigit  
```/^x[0-9a-fA-F]{2}$/```  

*UnicodeEscapeSequence* ::  
&nbsp;&nbsp;  u Hex4Digits  
```/^u[0-9a-fA-F]{4}$/```  

&nbsp;&nbsp;  u{ CodePoint }
```/^u\{0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,5}\}$/```  

&nbsp;&nbsp;  CodePoint
```/^0[0-9a-fA-F]{5}|10[0-9a-fA-F]{4}|[0-9a-fA-F]{1,5}$/```  

*Hex4Digits* ::  
&nbsp;&nbsp;  HexDigit HexDigit HexDigit HexDigit 
```/^[0-9a-fA-F]{4}$/```  

# Numeric Literals
*NumericLiteral* ::  
&nbsp;&nbsp;  DecimalLiteral  
&nbsp;&nbsp;  BinaryIntegerLiteral  
&nbsp;&nbsp;  OctalIntegerLiteral  
&nbsp;&nbsp;  HexIntegerLiteral  
```/^(0|[1-9][0-9]?\.([0-9]+)?([eE][\+-]?[0-9]+)?)$ | ^(\.[0-9]+([eE][\+-]?[0-9]+)?)$ | ^0[bB][01]+$ | ^0[oO][0-7]+$ | ^0[xX][0-9a-fA-F]+$/```  
*DecimalLiteral* ::  
&nbsp;&nbsp;  DecimalIntegerLiteral . DecimalDigitsopt ExponentPartopt  
&nbsp;&nbsp;  . DecimalDigits ExponentPartopt  
&nbsp;&nbsp;  DecimalIntegerLiteral ExponentPartopt  
```(0|[1-9][0-9]?\.([0-9]+)?([eE][\+-]?[0-9]+)?) | (\.[0-9]+([eE][\+-]?[0-9]+)?)```
*DecimalIntegerLiteral* ::  
&nbsp;&nbsp;  0  
&nbsp;&nbsp;  NonZeroDigit DecimalDigitsopt  
```0|[1-9][0-9]?```
*NonZeroDigit* :: one of  
&nbsp;&nbsp;  1 2 3 4 5 6 7 8 9  
```[1-9]```
*ExponentPart* ::  
&nbsp;&nbsp;  ExponentIndicator SignedInteger  
```[eE][\+-]?[0-9]+```  
*ExponentIndicator* :: one of  
&nbsp;&nbsp;  e E  
```[eE]```  
*SignedInteger* ::  
&nbsp;&nbsp;  DecimalDigits  
&nbsp;&nbsp;  + DecimalDigits  
&nbsp;&nbsp;  - DecimalDigits  
```[\+-]?[0-9]+```
*DecimalDigits* ::  
&nbsp;&nbsp;  DecimalDigit  
&nbsp;&nbsp;  DecimalDigits DecimalDigit  
```[0-9]+```  
*DecimalDigit* :: one of  
&nbsp;&nbsp;  0 1 2 3 4 5 6 7 8 9  
```[0-9]```  
*BinaryIntegerLiteral* ::  
&nbsp;&nbsp;  0b BinaryDigits  
&nbsp;&nbsp;  0B BinaryDigits  
```0[bB][01]+```  
*BinaryDigits* ::  
&nbsp;&nbsp;  BinaryDigit  
&nbsp;&nbsp;  BinaryDigits BinaryDigit  
```[01]+```
*BinaryDigit* :: one of  
&nbsp;&nbsp;  0 1  
```[01]```
*OctalIntegerLiteral* ::  
&nbsp;&nbsp;  0o OctalDigits  
&nbsp;&nbsp;  0O OctalDigits  
```/^0[oO][0-7]+$/```  
*OctalDigits* ::  
&nbsp;&nbsp;  OctalDigit  
&nbsp;&nbsp;  OctalDigits OctalDigit  
```/^[0-7]+$/```  
*OctalDigit* :: one of  
&nbsp;&nbsp;  0 1 2 3 4 5 6 7  
```/^[0-7]$/```  
*HexIntegerLiteral* ::  
&nbsp;&nbsp;  0x HexDigits  
&nbsp;&nbsp;  0X HexDigits  
```/^0[xX][0-9a-fA-F]+$/```  
*HexDigits* ::  
&nbsp;&nbsp;  HexDigit  
&nbsp;&nbsp;  HexDigits HexDigit  
```/^[0-9a-fA-F]+$/```  
*HexDigit* :: one of  
&nbsp;&nbsp;  0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F  
```/^[0-9a-fA-F]$/```  

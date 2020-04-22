NumericLiteral ::
DecimalLiteral
BinaryIntegerLiteral
OctalIntegerLiteral
HexIntegerLiteral
DecimalLiteral ::
DecimalIntegerLiteral . DecimalDigitsopt ExponentPartopt
. DecimalDigits ExponentPartopt
DecimalIntegerLiteral ExponentPartopt
DecimalIntegerLiteral ::
0
NonZeroDigit DecimalDigitsopt
Syntax
11.8 Literals
11.8.1 Null Literals
Syntax
11.8.2 Boolean Literals
Syntax
11.8.3 Numeric Literals
Syntax
166
© Ecma International 2019
DecimalDigits ::
DecimalDigit
DecimalDigits DecimalDigit
DecimalDigit :: one of
0 1 2 3 4 5 6 7 8 9
NonZeroDigit :: one of
1 2 3 4 5 6 7 8 9
ExponentPart ::
ExponentIndicator SignedInteger
ExponentIndicator :: one of
e E
SignedInteger ::
DecimalDigits
+ DecimalDigits
- DecimalDigits
BinaryIntegerLiteral ::
0b BinaryDigits
0B BinaryDigits
BinaryDigits ::
BinaryDigit
BinaryDigits BinaryDigit
BinaryDigit :: one of
0 1
OctalIntegerLiteral ::
0o OctalDigits
0O OctalDigits
OctalDigits ::
OctalDigit
OctalDigits OctalDigit
OctalDigit :: one of
0 1 2 3 4 5 6 7
HexIntegerLiteral ::
0x HexDigits
0X HexDigits
HexDigits ::
HexDigit
HexDigits HexDigit
HexDigit :: one of
© Ecma International 2019
167
0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
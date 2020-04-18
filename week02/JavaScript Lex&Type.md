# JavaScript Lex&Type

## source code

### Unicode

- block

	- ASCII
	- CJK
	- ...

- Charactor
- String.fromCharCode(num) '\t'.codePointAt(0).toString(16)

## Lex

### White Space

- TAB
- VT

	- vertical tab

- FF

	- form feed

- SP
- NBSP
- ZWNBSP

	- zero width no break space(Bit Order Mask/BOM)
	- \uFEFF

- USP

### Line Terminator

- LF

	- line feed

- CR

	- carriage return

- LS
- PS

### Comment

- /**/
- //

### Token

- IdentifierName

	- 变量名
	- 属性名

- Literal

	- String Literal
	- Numerical Literal

- Puncuator
- Keyword

## Home Work

### 1. A regular expression to match all numerical literals

### 2. UTF8_Encoding function

function UTF8_Encoding() {
  // return new  Buffer();
}

### 3. A regular expression to match all string literals

## Type

### Number

-  IEEE 754 Double Float

### String

- Character
- Encoding

	- Memory

		- UTF-8
		- UTF-16

	- USC:U+0000 ~ U+FFFF, unicode BMP
	- GB(国标)

- grammar

	- ""
	- ''
	- ``

		- ${}

### Boolean

- true
- false

### Null

### undefined

### Symbol

### Class

### RegEx Literal

*XMind - Trial Version*
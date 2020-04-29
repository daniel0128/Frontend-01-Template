function convertStringToNumber(string, radix = 10) {
    // const numberReg = /(0|[1-9][0-9]?\.([0-9]+)?([eE][\+-]?[0-9]+)?)|(\.[0-9]+([eE][\+-]?[0-9]+)?)|[1-9][0-9]*|0[bB][01]+|0[oO][0-7]+|0[xX][0-9a-fA-F]+/;
    // console.log(numberReg.test(string));
    if (radix<2 || radix>36) return;
    // if(!numberReg.test(string)) return;
    const digitals = '0123456789abcdefghijklmnopqrstuvwxyz';
    let chars = string.split('');
    let number = 0;
    let i = 0;
    while (i < chars.length && chars[i] != '.') {
        number *= radix;
        let digital = digitals.indexOf(chars[i]);
        if (digital >= radix) return number;
        number += digital;
        i++;
    }
    let fraction = 1;
    if (chars[i] === '.') i++;
    while (i < chars.length) {
        fraction /= radix;
        let digital = digitals.indexOf(chars[i]);
        if (digital >= radix) return number;
        number += digital;
        i++;
    }
    return number;
}

function expect(string, number) {
    console.log(`${number} ${string === number ? '✅' : '❌'}`);
}

expect(convertStringToNumber('100', 2),4);
expect(convertStringToNumber('ff', 16), 255);
expect(convertStringToNumber('23'), 23);
expect(convertStringToNumber('zz', 36), 1295);

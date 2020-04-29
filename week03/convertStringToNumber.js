function convertStringToNumber(string, scale = 10) {
    if (scale<2 || scale>36) return;
    let chars = string.split('');
    let number = 0;
    let i = 0;
    while (i < chars.length && chars[i] != '.') {
        number *= scale;
        number += chars[i].codePointAt(0) - 48;
        i++;
    }
    let fraction = 1;
    if (chars[i] === '.') i++;
    while (i < chars.length) {
        fraction /= scale;
        number += (chars[i].codePointAt(0) - 48) * fraction;
        i++;
    }
    return number;
}

// console.log('100, 2: ', convertStringToNumber('100', 2));
// console.log(convertStringToNumber('100.012345'));
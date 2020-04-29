function convertNumberToString(number, radix = 10) {
    if (radix%1!==0 || radix<2 || radix>36) return;
    if (typeof number !== 'number') return;
    let symbols = '0123456789abcdefghijklmnopqrstuvwxyz';
    let integer = Math.floor(number);
    let fraction = number * 10e8 % 10e8 / 10e8;
    let string = integer === 0 ? '0' : '';
    while(integer>0) {
        string = symbols[integer % radix] + string;
        integer = Math.floor(integer/radix);
    }
    if(fraction === 0) return string;
    string += '.';

    let len = fraction.toString(radix).length - 2;
    while(fraction !== 0 && len-- > 0) {

        fraction *= 10e10 / (10e10 / radix);

        if(len === 0) {
            console.log(fraction)
        }
        string = string + symbols[Math.floor(fraction)];
        fraction = fraction * 10e10 % 10e10 / 10e10
    }
    return string;
}
// const numbers = [23, 0b11001, 0o07702, 0x12fe3, 0.1, 0.5, 3e-6];
// numbers.map(number => {
//     for(let i = 2; i<=36; i++) {
//         if (convertNumberToString(number, i) !== number.toString(i)) {
//             console.log('wrong at '+ number, i);
//             console.log(convertNumberToString(number, i))
//             console.log(number.toString());
//             break;
//         }
//     }
// });
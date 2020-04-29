function convertNumberToString(number, scale = 10) {
    if (scale<2 || scale>36) return;
    number = Number(number);
    let symbolArr = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
    if (number % 1 === 0) { // integer

    } else { // float
        // decimal

        // eE

    }
    // console.log(symbolArr);
    return (number).toString(scale);
}
console.log(convertNumberToString(120))
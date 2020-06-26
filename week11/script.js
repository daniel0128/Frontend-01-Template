console.log('hello');
function red() {
    console.log('red');

    setTimeout(green, 10000);
}

function yellow() {
    console.log('yellow');
    setTimeout(red, 2000)
}

function green() {
    console.log('green');
    setTimeout(yellow, 10000)
}
red();
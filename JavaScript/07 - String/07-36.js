/*
Write a JavaScript function to create a Zerofilled value with optional +, - sign. 
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
*/
function zeroFill(number, width, osign) {
    const num = '' + Math.abs(number),
        zerosw = width - num.length,
        sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));


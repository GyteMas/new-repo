/*
Write a JavaScript function to convert Hexadecimal to ASCII format. 
Test Data :
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
Output :
"12"
"100"
*/
function hex_to_ascii(str1) {
    const hex = str1.toString();
    let str = '';
    for (let n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));


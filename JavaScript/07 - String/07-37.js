/*
Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison. 
Test Data :
console.log(compare_strings('abcd', 'AbcD'));
true
console.log(compare_strings('ABCD', 'Abce'));
false
*/
function compare_strings(str1, str2) {
    const areEqual = str1.toUpperCase() === str2.toUpperCase();
    return areEqual;
}

console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));



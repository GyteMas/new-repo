/*
 Write a JavaScript function to check whether an `input` is a string or not. 
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
*/
function isString(input) {
    if (typeof input === "string" || input instanceof String) return true;
else return false;
}
console.log(isString('w3resource'));
console.log(isString([1, 2, 4, 0]));
/*
 Write a JavaScript function check if a string ends with specified suffix. 
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false
*/
function string_endsWith(str, suffix) {
  if (str === null || str === "" || suffix === null || suffix === "") {
    return false;
  } else {
    str = str.toString();
    suffix = suffix.toString();
  }
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

console.log(string_endsWith("JS PHP PYTHON", "PYTHON"));
console.log(string_endsWith("JS PHP PYTHON", ""));

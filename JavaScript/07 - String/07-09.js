/*
Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/
function capitalizeWords(input) {
  return input.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
console.log(capitalizeWords("js string exercises"));

/*
Write a JavaScript function to capitalize the first letter of a string. 
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/
function capitalize(input){
    // Capitalize the first character of the input string and concatenate it with the rest of the string starting from the second character
    return input.charAt(0).toUpperCase() + input.slice(1);
  }    
  // Output the result of capitalizing the string 'js string exercises'
  console.log(capitalize('js string exercises'));

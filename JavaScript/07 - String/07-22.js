/*
Write a JavaScript function to get a part of a string after a specified character.
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"
*/

function subStrAfterChars(str, char, pos)
{
 if(pos=='b')
    return str.substring(str.indexOf(char) + 1);
 else if(pos=='a') 
    return str.substring(0, str.indexOf(char));
  else
    return str;  
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
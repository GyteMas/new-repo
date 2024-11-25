/*
Write a JavaScript function to convert a string to title case. 
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
*/
function sentenceCase (str) {
    if ((str===null) || (str===''))
         return false;
    else
    str = str.toString();
  
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  console.log(sentenceCase('PHP exercises. python exercises.'));
  

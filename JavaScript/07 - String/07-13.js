/*
Write a JavaScript function to concatenates a given string n times (default is 1). 
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
*/
function repeat(input, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' : new Array(count + 1).join(input);
    }
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));


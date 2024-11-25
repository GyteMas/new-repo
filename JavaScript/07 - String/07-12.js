/*
Write a JavaScript function to uncamelize a string. 
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
*/
function uncamelize(input, separator) {
    if(typeof(separator) == "undefined") {
      separator = " ";
    }
    let str = input.replace(/[A-Z]/g, function (letter) 
    {
      return separator + letter.toLowerCase();
    });
    return str.replace("/^" + separator + "/", '');
  }
  console.log(uncamelize('helloWorld'));
  console.log(uncamelize('helloWorld','-'));
  console.log(uncamelize('helloWorld','_'));

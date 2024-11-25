/*
Write a JavaScript function that can pad (left, right) a string to get to a determined length. 
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"
*/
function formattedString(pad, user_str, pad_pos) {
    if (typeof user_str === 'undefined') 
      return pad;
   if (pad_pos == 'l') {
     return (pad + user_str).slice(-pad.length);
    } 
    else {
     return (user_str + pad).substring(0, pad.length);
    }
  }
  console.log(formattedString('0000',123,'l'));
  console.log(formattedString('00000000',123,''));
  

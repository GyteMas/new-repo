/*
Write a JavaScript function to convert ASCII to Hexadecimal format. 
Test Data :
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
Output :
"3132"
"313030"
*/
function ascii_to_hexa(str)
{
   const arr1 = [];
   for (let n = 0, l = str.length; n < l; n++)
    {
      const hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));


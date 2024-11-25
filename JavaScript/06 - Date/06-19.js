/*
Write a JavaScript function to get the day of the month, 2 digits with leading zeros. 
Test Data :
d= new Date(2015, 10, 1); 
console.log(day_of_the_month(d));
"01"
*/
function day_of_the_month(d)
{ 
  return (d.getDate() < 10 ? '0' : '') + d.getDate();
}
let d= new Date();
console.log(day_of_the_month(d));

d= new Date(2015, 10, 1);
console.log(day_of_the_month(d));


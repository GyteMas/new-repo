/*
Write a JavaScript function to get the current date. 

Note : Pass a separator as an argument.
Test Data :
console.log(curday('/')); 
console.log(curday('-'));
Output :
"11/13/2014" 
"11-13-2014"
*/
function curDay(sp) {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return mm + sp + dd + sp + yyyy;
}

console.log(curDay("/"));
console.log(curDay("-"));

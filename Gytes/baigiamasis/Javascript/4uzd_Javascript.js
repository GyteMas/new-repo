let names= ["Olivia","Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella"];
//1 function delete Olivia
let newArray = names.filter((value)=>value!='Olivia');
console.log(newArray);
//2 function add in front Mason
newArray.unshift('Mason');
console.log(newArray);

//3 function add in back Gyte
newArray.push('Gyte');
console.log(newArray);
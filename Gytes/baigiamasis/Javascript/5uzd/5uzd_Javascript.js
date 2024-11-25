//5 UZDUOTIS- Precentage calculator
let button = document.getElementById("calc");
const PROCENT = document.getElementById("procent");
const NUMBER = document.getElementById("number");

function giveAnswer(event) {
  event.preventDefault();
  let p= +PROCENT.value;
let n= +NUMBER.value;
let sum= (n*p)/100 ;
document.getElementById("rezult").innerHTML = sum;
}
button.addEventListener("click", giveAnswer);

let button = document.getElementById("calc");
let die1 = document.getElementById("1die");
let die2 = document.getElementById("2die");
let die3 = document.getElementById("3die");
let die4 = document.getElementById("4die");
let die5 = document.getElementById("5die");
let rezpamHTML = document.getElementById("rezpam");
let rezminHTML = document.getElementById("rezmin");

function calculatePrice(e) {
  e.preventDefault();
  // console.log('Funkcija sako "Labas"');

  let dietSum =
    +die1.value + +die2.value + +die3.value + +die4.value + +die5.value;
  let minSum = dietSum * 45;

  rezpamHTML.innerHTML = dietSum;
  rezminHTML.innerHTML = minSum;
}

button.addEventListener("click", calculatePrice);



const button2 = document.getElementById("calc2");
const fish = document.getElementById("zuv");
const fishperday = document.getElementById("zuvperdien");
const days = document.getElementById("dienu");
const rezulzuvHTML = document.getElementById("rezulzuv");

function giveAnswer(event) {
  event.preventDefault();


  rezulzuvHTML.innerHTML = `po ${days.value} dienu akvariume gyvens ${
    Number(fish.value) + Number(fishperday.value) * Number(days.value)
  } zuvu`;
}

button2.addEventListener("click", giveAnswer);

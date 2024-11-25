let button = document.getElementById("calc");
const accel = 9.8;
const height = document.getElementById("1die");
const unfold = document.getElementById("2die");
let rezul = document.getElementById("rezult");

function giveAnswer(event) {
  event.preventDefault();

  let rezultatas = Math.sqrt((2 * +height.value) / accel);
  console.log(height, unfold);
  

  if (height.value && unfold.value) {
    if (rezultatas > Number(unfold.value)) {
      rezul.innerHTML = sum;
    } else {
      rezul.innerHTML = "parasiutas nespes issiskleisti";
    }
  } else {
    alert("Suveskite duomenis");
  }
}
button.addEventListener("click", giveAnswer);

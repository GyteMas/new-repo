//let date = new Date("1990-07-23");
//let timest = date.getTime();
// // console.log(timest);
// let marijus = 86313600000;

// let skirt = timest-marijus;
// let metai = skirt / 31556952000;
// let metuskirt = 17*3155695000
// let menskirt = skirt-metuskirt
// console.log(menskirt);

// //console.log(timest-marijus);

//  console.log(typeof date.getFullYear());

// const months = ["January", "February", "March", "April", "May", "June",   "July", "August", "September", "October", "November", "December" ];

//  function getMonth(date) {
//    const month = new Date(date).getMonth();
//     return months[month];
//  }
//  console.log(getMonth('1990-07-23'));

const button = document.getElementById("calc");
const conv1 = document.getElementById("date1");
const conv2 = document.getElementById("date2");
const rezul = document.getElementById("rezultatas");

function giveAnswer(event) {
  event.preventDefault();
  const date1 = new Date(conv1.value);
  const date2 = new Date(conv2.value);

  if (date1 > date2) {
    rezul.innerHTML = date1;
  }
  if (date1 < date2) {
    rezul.innerHTML = date2;
  } else {
    rezul.innerHTML = date1, date2;
  }
}
button.addEventListener("click", giveAnswer);

// **********Kaledos

const button1 = document.getElementById("calc1");
const conv3 = document.getElementById("date3");
const rezul1 = document.getElementById("rezultatas2");
const div = document.getElementById("div");

function giveAnswerKaledos(event) {
  event.preventDefault();
  const date3 = new Date(conv3.value);
  const kaledos = new Date("2024-12-25");
  const ikiKaledu = Math.round((kaledos - date3) / 86400000);
  rezul1.innerHTML = ikiKaledu;
  div.style.backgroundColor = "#ff1122"
  rezul1.style.fontSize = "36px"
}
button1.addEventListener("click", giveAnswerKaledos);

// **********Paveiksleliai
const images = document.querySelectorAll(".img");
const changeImgBg = (e) => {
  e.target
  .closest(".images")
  .querySelectorAll(".img")
  .forEach((el) => {
    el.style.borderWidth = "thin";
    el.style.borderColor = "lightcoral";
  });
        e.target.style.borderStyle = "solid";
        e.target.style.borderWidth = "thick";
        e.target.style.borderColor = "lightgreen";
}
      images.forEach((node) => node.addEventListener("click", changeImgBg));
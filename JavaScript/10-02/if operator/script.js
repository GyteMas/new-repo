// 1 UZDUOTIS

function giveAnswer(event) {
  event.preventDefault();
  const PRADZIA = document.getElementById("pradzia");
  const PABAIGA = document.getElementById("pabaiga");
  let marskineliai = 0;

  for (let i = +PRADZIA.value; i <= +PABAIGA.value; i++) {
    let d = i % 6;
    if (d === 0) {
      marskineliai++;
    }
    document.getElementById("rezult").innerHTML = marskineliai;
  }
}
document.getElementById("calc").addEventListener("click", giveAnswer);

// 2 UZDUOTIS

function giveAnswer1(event) {
  event.preventDefault();
  const ZINGSNIAI = document.getElementById("zingsniai");
  let suplojimai = 0;
  let spragtelejimai = 0;
  let a = +ZINGSNIAI.value;
  for (let i = 1; i <= a; i++) {

    let b = i.toString();
    let lastChar = b.charAt(b.length - 1);

    if (lastChar == 5) {
      spragtelejimai++;
    }
    if (lastChar == 0) {
      suplojimai++;
    }
    document.getElementById("suplos").innerHTML = suplojimai;
    document.getElementById("spragtels").innerHTML = spragtelejimai;
  }

}
document.getElementById("calc1").addEventListener("click", giveAnswer1);

// 3 UZDUOTIS

function giveAnswer2(event) {
  event.preventDefault();
  const NUKRITO = document.getElementById("nukrito");
  const SNIGO = document.getElementById("snigo");
  let snaiges = +NUKRITO.value;
  let a = +SNIGO.value;

  for (let i = 2; i <= a; i++) {
    snaiges = snaiges + (snaiges * 2);
  }
  console.log(snaiges);

  document.getElementById("snaiges").innerHTML = snaiges;

}
document.getElementById("calc2").addEventListener("click", giveAnswer2);


// 4 UZDUOTIS

function giveAnswer3(event) {
  event.preventDefault();
  const EGLES = document.getElementById("eglutes");
  const MASYVAS = document.getElementById("masyvas");

  let str = MASYVAS.value;
  let array = str.split(',');
  let sum = 0;

  for (let i = 0; i < +array.length; i++) {
    sum += +array[i];
  }
  if (+array.length == +EGLES.value) {
    let average = sum / +EGLES.value;
    document.getElementById("aukštis").innerHTML = average;
  } else {
    document.getElementById("aukštis").innerHTML = "Prašom patikrinti ar eglučių kiekis atitinka kiekį nurodytų matmenų";
  }


}
document.getElementById("calc3").addEventListener("click", giveAnswer3);

// 5 UZDUOTIS

function giveAnswer4(event) {
  event.preventDefault();
  const DRAUGAI = document.getElementById("draugai");
  const SKAICIAI = document.getElementById("skaiciai");
  let even = 0;

  let str = SKAICIAI.value;
  let array = str.split(',');
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0)
      even++;
}
if ((array.length === +DRAUGAI.value)&&(even > 0)) {
  document.getElementById("lyginiai").innerHTML = even;
} else if ((array.length === +DRAUGAI.value)&&(even == 0)) {
  document.getElementById("lyginiai").innerHTML = "Lyginių skaičių nėra";
} else {
  document.getElementById("lyginiai").innerHTML = "Prašom patikrinti ar nurodytas kiekis draugų atitinka nurodytą kiekį skaičių";
}
}

document.getElementById("calc4").addEventListener("click", giveAnswer4);

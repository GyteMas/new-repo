function giveAnswer(event) {
  event.preventDefault();
  const NUM = document.getElementById("1stdiv");

  function isPositive(num) {
    if (+num.value > 0) {
      document.getElementById("rezult").innerHTML = "Skaicius teigiamas";
    } else if (+num.value < 0) {
      document.getElementById("rezult").innerHTML = "Skaicius neigiamas";
    } else {
      document.getElementById("rezult").innerHTML = "Skaicius neutralus";
    }
  }

  isPositive(NUM);
}

document.getElementById("calc").addEventListener("click", giveAnswer);

//KITA UZDUOTIS

function giveAnswer2(event) {
  event.preventDefault();
  const HEIGHT = document.getElementById("height");
  const WIDTH = document.getElementById("width");

  function isLandscape(num1, num2) {
    if (+num1.value < +num2.value) {
      document.getElementById("rezult2").innerHTML = "Landscape";
    } else {
      document.getElementById("rezult2").innerHTML = "Portrait";
    }
  }

  isLandscape(HEIGHT, WIDTH);
}

document.getElementById("calc2").addEventListener("click", giveAnswer2);

//KITA UZDUOTIS

function giveAnswer3(event) {
  event.preventDefault();
  const NUM1ST = document.getElementById("num1st");
  const NUM2ND = document.getElementById("num2nd");

  function compareNumbers(num1, num2) {
    +num1.value > +num2.value
      ? (document.getElementById("rezult3").innerHTML = NUM1ST.value)
      : (document.getElementById("rezult3").innerHTML = NUM2ND.value);
  }
  compareNumbers(NUM1ST, NUM2ND);
}

document.getElementById("calc3").addEventListener("click", giveAnswer3);

//KITA UZDUOTIS

function giveAnswer4(event) {
  event.preventDefault();
  const NUM1 = document.getElementById("num1");
  const NUM2 = document.getElementById("num2");
  const NUM3 = document.getElementById("num3");

  function specifySign(num1, num2, num3) {
    +num1.value * +num2.value * +num3.value > 0
      ? (document.getElementById("rezult4").innerHTML =
          "The product sign is +(plus)")
      : (document.getElementById("rezult4").innerHTML =
          "The product sign is -(minus)");
  }
  specifySign(NUM1, NUM2, NUM3);
}

document.getElementById("calc4").addEventListener("click", giveAnswer4);

//KITA UZDUOTIS

function giveAnswer5(event) {
  event.preventDefault();
  const NUME1 = document.getElementById("nume1");

  function CheckisArmstrong(NUME1) {
    const A = NUME1.value.charAt(0);
    const B = NUME1.value.charAt(1);
    const C = NUME1.value.charAt(2);

    let armstrong = (+A) ** 3 + (+B) ** 3 + (+C) ** 3;
    console.log(armstrong);

    armstrong == NUME1.value
      ? (document.getElementById("rezult5").innerHTML =
          "Is an Armstrong number")
      : (document.getElementById("rezult5").innerHTML =
          "Is not an Armstrong number");
  }
  CheckisArmstrong(NUME1);
}

document.getElementById("calc5").addEventListener("click", giveAnswer5);

//KITA UZDUOTIS

function giveAnswer6(event) {
  event.preventDefault();
  const NUMER1 = document.getElementById("numer1");
  const NUMER2 = document.getElementById("numer2");

  function isMultipleOf(n, m) {
    let d = m.value % n.value;
    console.log(d);

    d === 0
      ? (document.getElementById("rezult6").innerHTML =
          "Is multiple of 1st number")
      : (document.getElementById("rezult6").innerHTML =
          "Is not multiple of 1st number");
  }
  isMultipleOf(NUMER1, NUMER2);
}

document.getElementById("calc6").addEventListener("click", giveAnswer6);

//KITA UZDUOTIS

function giveAnswer7(event) {
  event.preventDefault();

  const NUMERR1 = document.getElementById("chart0");
  const NUMERR2 = document.getElementById("chart1");
  const NUMERR3 = document.getElementById("chart2");

  let newArray = [];

  function sortNumbers(n, m, l) {
    if ((+l.value < +n.value) && (+n.value> +m.value)) {
        newArray[0]= n.value;
    } else if ((+l.value < +m.value) && (+m.value > +n.value)) {
        newArray[0]= m.value;
    } else {
        newArray[0]=l.value;
    }

    if (((+l.value > +n.value) && (+n.value > +m.value)) || ((+m.value > +n.value) && (+l.value < +n.value))) {
        newArray[1]= n.value;
    } else if (+l.value > +m.value > +n.value || +n.value > +m.value > +l.value) {
        newArray[1]= m.value;
    } else {
        newArray[1]=l.value;
    }

    if ((+l.value > +n.value) && (+n.value < +m.value)) {
        newArray[2]= n.value;
    } else if ((+l.value > +m.value) &&  (+m.value< +n.value)) {
        newArray[2]= m.value;
    } else {
        newArray[2]=l.value;
    }
  }
  sortNumbers(NUMERR1, NUMERR2, NUMERR3);

  document.getElementById("rezult7").innerHTML = newArray[0];
  document.getElementById("rezult7").innerHTML +=' '+newArray[1];
  document.getElementById("rezult7").innerHTML +=' '+newArray[2];
}

document.getElementById("calc7").addEventListener("click", giveAnswer7);

//KITA UZDUOTIS

function giveAnswer8(event) {
  event.preventDefault();

  const NUMERRI1 = document.getElementById("chartnum1");
  const NUMERRI2 = document.getElementById("chartnum2");
  const NUMERRI3 = document.getElementById("chartnum3");


  function isValidTriangle(a, b, c) {
    let valid = ((+a.value +(+b.value)) > +c.value) 
    && ((+b.value+(+c.value))> +a.value)
    &&((+c.value+(+a.value))> +b.value);

    if (valid) {
      document.getElementById("rezult8").innerHTML = "It is a valid Triangle";
    }else{
      document.getElementById("rezult8").innerHTML = "Not valid triangle";
    }
    
  }
  isValidTriangle(NUMERRI1, NUMERRI2, NUMERRI3);
}

document.getElementById("calc8").addEventListener("click", giveAnswer8);

//KITA UZDUOTIS

function giveAnswer9(event) {
  event.preventDefault();

  const FAVORIT = document.getElementById("favnum");
  const MYFAVORIT ="13";


  function favoriteNumber(a, b) {
    if (b < a) {
      document.getElementById("rezult9").innerHTML = "Too high";
    } else if (b > a) {
      document.getElementById("rezult9").innerHTML = "Too low";
    } else {
      document.getElementById("rezult9").innerHTML = "You got it!";
    }
  }
  favoriteNumber(FAVORIT.value, MYFAVORIT);
}
document.getElementById("calc9").addEventListener("click", giveAnswer9);


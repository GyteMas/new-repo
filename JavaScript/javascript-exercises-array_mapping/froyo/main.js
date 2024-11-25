const answ = prompt(`froyo flavors:`);
let arrayFlavor = answ.split(",");
function FlavorTotalsforEach(array) {
    const counter = {};
   
    array.forEach((flavor) => {
      if (counter[flavor]) {
        // jeigu counter[flavor] egzistuoja
        counter[flavor] += 1; // tada pridedam 1
      } else {
        // jei neegzistuoja
        counter[flavor] = 1; // sukuriam su reiksme 1
      }
    });
   
    console.log(counter);
  }
   
  FlavorTotalsforEach(arrayFlavor);

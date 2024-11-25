// 1 UZDUOTIS- SKAICIU SUMA
let lyginSum = 0;
let nelygSum = 0;

for (let i = 0; i <100; i++) {
    let d = i % 2;
    if (d === 0) {
      lyginSum+= i;
    } else {
        nelygSum+= i; 
    }
  }
  console.log(lyginSum);
  console.log(nelygSum);
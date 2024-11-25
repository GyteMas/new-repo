const books = [
  { title: "Knyga #1", price: 10.25 },
  { title: "Knyga #2", price: 5.15 },
  { title: "Knyga #3", price: 7.32 },
  { title: "Knyga #4", price: 54.01 },
  { title: "Knyga #5", price: 77.17 },
];

// 1 Uzduotis
function getIndexedNames(arr) {
  return arr.map((item, index) => {
    return index + " " + item.title;
  });
}
console.log(getIndexedNames(books));

// 2 Uzduotis
function getQuantity(arr) {
  return arr.length;
}
console.log(getQuantity(books));

// 3 Uzduotis
function addBook(arr) {
  arr.push({ title: "Knyga #6", price: 2.75 });
  return arr;
}
console.log(addBook(books));

// 4 Uzduotis
function getLastItem(arr) {
  let Title = arr[arr.length - 1].title;
  let Price = arr[arr.length - 1].price;
  return { Title, Price };
}
console.log(getLastItem(books));

// 5 Uzduotis
function getTotalPrice(arr) {
  return arr
    .reduce((acc, curr) => {
      return acc + curr.price;
    }, 0)
    .toFixed(2);
}
console.log(getTotalPrice(books));

// 6 Uzduotis
function getDiscountPrice(arr) {
  return arr.map((item) => {
    const discTitle = item.title;
    const oldPrice = item.price;
    if (item.price > 10) {
      let discPrice = (item.price * 0.75).toFixed(2);
      return {Knyga: `${discTitle} Sena kaina: ${oldPrice} Pardavimo kaina: ${discPrice} Pritaikyta nuolaida -25%`}
    }
  }).filter((item)=> item != undefined);
}
console.log(getDiscountPrice(books));

// 7 Uzduotis
function sortedByPrice(arr) {
  return arr.sort((a, b)=>a.price-b.price);
}
console.log(sortedByPrice(books));

// 8 Uzduotis
function sortedAz(arr) {
  return arr.sort((a,b)=>a.title-b.title)
}
console.log(sortedAz(books));

function sortedZa(arr) {
  return arr.reverse((a,b)=> a.title-b.title)
}
console.log(sortedZa(books));

// 9 Uzduotis
function moreThen(arr) {
  return arr.filter((item)=>item.price > 7.5)
}
console.log(moreThen(books));
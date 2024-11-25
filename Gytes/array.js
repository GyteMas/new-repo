// 1 UZDUOTIS
// const people = [ 'Lebron','Aaliyah','Diamond','Dominique','Aliyah','Jazmin','Darnell','Hatfield','Hawkins','Hayden','Hayes','Haynes','Hays','Head','Heath','Hebert','Henderson','Hendricks','Hendrix','Henry','Hensley','Henson','Herman','Hernandez','Herrera','Herring','Hess','Hester','Hewitt','Hickman','Hicks','Higgins','Hill','Hines','Hinton','Hobbs','Hodge','Hodges','Hoffman','Hogan','Holcomb','Holden','Holder','Holland','Holloway','Holman','Holmes','Holt','Hood','Hooper','Hoover','Hopkins','Hopper','Horn','Horne','Horton','House','Houston','Howard','Howe','Howell','Hubbard','Huber','Hudson','Huff','Waldo','Hughes','Hull','Humphrey','Hunt','Hunter','Hurley','Hurst','Hutchinson','Hyde','Ingram','Irwin','Jackson','Jacobs','Jacobson','James','Jarvis','Jefferson','Jenkins','Jennings','Jensen','Jimenez','Johns','Johnson','Johnston','Jones','Jordan','Joseph','Joyce','Joyner','Juarez','Justice','Kane','Kaufman','Keith','Keller','Kelley','Kelly','Kemp','Kennedy','Kent','Kerr','Key','Kidd','Kim','King','Kinney','Kirby','Kirk','Kirkland','Klein','Kline','Knapp','Knight','Knowles','Knox','Koch','Kramer','Lamb','Lambert','Lancaster','Landry','Lane','Lang','Langley','Lara','Larsen','Larson','Lawrence','Lawson','Le','Leach','Leblanc','Lee','Leon','Leonard','Lester','Levine','Levy','Lewis','Lindsay','Lindsey','Little','Livingston','Lloyd','Logan','Long','Lopez','Lott','Love','Lowe','Lowery','Lucas','Luna','Lynch','Lynn','Lyons','Macdonald','Macias','Mack','Madden','Maddox','Maldonado','Malone','Mann','Manning','Marks','Marquez','Marsh','Marshall','Martin','Martinez','Mason','Massey','Mathews','Mathis','Matthews','Maxwell','May','Mayer','Maynard','Mayo','Mays','Mcbride','Mccall','Mccarthy','Mccarty','Mcclain','Mcclure','Mcconnell','Mccormick','Mccoy','Mccray','Waldo','Mcdaniel','Mcdonald','Mcdowell','Mcfadden','Mcfarland','Mcgee','Mcgowan','Mcguire','Mcintosh','Mcintyre','Mckay','Mckee','Mckenzie','Mckinney','Mcknight','Mclaughlin','Mclean','Mcleod','Mcmahon','Mcmillan','Mcneil','Mcpherson','Meadows','Medina','Mejia','Melendez','Melton','Mendez','Mendoza','Mercado','Mercer','Merrill','Merritt','Meyer','Meyers','Michael','Middleton','Miles','Miller','Mills','Miranda','Mitchell','Molina','Monroe','Lucas','Jake','Scott','Amy','Molly','Hannah','Lucas'] ;
// const waldo = people.filter(item =>item.includes('Waldo'))
// const count= waldo.length
// console.log(waldo);
// console.log(count);

// 2 UZDUOTIS
// const myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// const item= myArray[2];
// myArray[4]='null';
// console.log(item);
// console.log(myArray);

// 3 UZDUOTIS
// const myArray = [15,17,2,6,9,14,18,];
// const getMax = (arr) => {
//     let max;
//     for (let i = 0; i < arr.length; i++) {
//         if (!max) {
//             max = arr[i];
//         } else {
//             if (max < arr[i]) max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(getMax(myArray));

// 4 UZDUOTIS

// const myArray = [15,17,2,6,9,14,18,9];
// let sum = 0;
// for (let e of myArray){
//     sum += e;
// }
// REDUCE METHOD
// const myArray = [15,17,2,6,9,14,18,9];
// const initialValue = 0;
// const sum = myArray.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sum);

// 5 UZDUOTIS

// const myArray = [15, 17, 2, 6, 9, 14, 18, 9];
// // //const myArray = [-15,-17,-2,-6,-9,-14,-18,-9];
// // //const myArray = [15,17,2,6,-9,14,-18,9];
// const isBelowThreshold = (currentValue) => currentValue > 0;
// console.log(myArray.every(isBelowThreshold));

// const found = myArray.find((element) => element < 0);
// if (found<0) {
//     console.log('FALSE');
// } else {
//     console.log('TRUE');
// }

// 6 UZDUOTIS

//REDUCE METHOD
// const myArray = [2,4,6];
// const sum = myArray.reduce(
//   (accumulator, currentValue) => accumulator * currentValue
// );

// console.log(sum);

// 7 UZDUOTIS
//const myArray = [15,17,2,6,9,14,18,9];
// const myArray = [-15,-17,-2,-6,-9,-14,-18,-9];
// const myArray = [15,17,2,6,-9,14,-18,9];
// const found = myArray.find((element) => element > 0);
// if (found < 0) {
//     console.log('FALSE');
// } else {
//     console.log('TRUE');
// }

// 8 UZDUOTIS

// const myArray = [15,17,2,6,-9,14,-18,9];
// const result = myArray.filter((item) => item > 0);
// console.log(result)

//9 UZDUOTIS
// function mean(arr) {
// if (arr.length === 0) return 0
// const total = arr.reduce( (num, add) => add + num,0 );
// return total / arr.length;
// }
// console.log(mean([15,17,2,6,-9,14,-18,9]));

//10 UZDUOTIS

// const myArray = [15,17,2,6,-9,14,-18,9];
// const result = myArray.filter((item) => item % 2 ===0);
// console.log(result)

//11 UZDUOTIS

// const myArray = [15,17,2,6,-9,14,-18,9];
// const result = myArray.filter((item) => item % 2 !=0);
// console.log(result)

//12 UZDUOTIS

// const numbers = [8, 19.5, 5, 6, 14.3, 9, 13];
// const integer = [];
// numbers.forEach((num) => {
//   if (Number.isInteger(num)) {
//     integer.push(num);
//   }
// });
// console.log(integer);

// 13 UZDUOTIS

// const numbers = [8, 19.5, 5, 6, 14.3, 9, 13];
// const integer = [];
// numbers.forEach((num) => {
//   if (Number.isInteger(num)) {
//     integer.push(num);
//   }
// });
// console.log(integer);

// 14 UZDUOTIS

// const numbers = [8, 19.5, 5, 6, 14.3, 9, 13,10];
// const integer = [];
// numbers.forEach((num) => {
//   if (Number.isInteger(num)) {
//     integer.push(num);
//   }
// });
// function isEven(integer) {
//     let count = 0;
//     for (let i = 0; i < integer.length; i++) { 
//         if (integer[i] % 2 === 0) {
//             count++; 
//         }
//     }
//     return count;
// }
// console.log(isEven(integer));

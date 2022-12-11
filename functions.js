// create a car
// function createCar() {

//   console.log('Car Creation Started');

//   // Engineer
//   // make chasis
//   makeChasis();

//   // buy typres
//   buyTyres('MRF');

//   // assembly
//   assemble();
  
//   console.log('Car Creation Completed');
// }


// function makeChasis() {

// }

// function buyTyres(company) {
//   console.log('Tyres bought from', company);
// }

// function assemble() {
//   console.log('Started Assemble');
//   console.log('Complete Assemble');
// }


// return inside a function
function multiple(a, b) {
  let result = a * b
  // console.log(result);
  // return result;
}

// var muliplyResult = multiple(10, 90);
// console.log(muliplyResult);


// // a function which should have return
// function getMarks () {
//   return [99, 80, 70]
// }

// // a function a which does **not** require
// function displayResultInfo(marks) {
//   var i = 1;
//   marks.forEach((mark) => {
//     console.log('Mark', i, mark);
//     i++;
//   });
// }

// displayResultInfo(getMarks());

// function decalaration

// function someFunc() {
//   console.log('Inside Some function');
// }

// function expression
// var someFunc = function () {
//   console.log('Inside Some function');
// };

// arrow function
// var someFunc = () => {
//   console.log('Inside Some function');
// }

// someFunc(); // fucntion call

// // IIFE --> immediately invoked function expression
// (function (name) {
//   console.log("Hi Hello", name);
// })('B42WEENG');

// // anonymous function
// ['Blue', 'Green', 'Yellow'].forEach(function (color) {
//   console.log(color, 'Color Ball');
// });

// // lexical scoping (does not having any own scope variable instead using the outer scoped variable)
// // Closure --> functions using lexical scoping is called closures
// function createCar(name, type) {

//   console.log('Car Creation Started');

//   // // Engineer
//   // // make chasis
//   // makeChasis();

//   // // buy typres
//   // buyTyres('MRF');

//   // // assembly
//   // assemble();
  

//   // Closure Function
//   function displayInfo() {
//     console.log('Car Created Susscessfully');
//     console.log('Name:', name);
//     console.log('Type:', type);
//   }

//   displayInfo();
// }


// createCar('BMW', 'Sedan');



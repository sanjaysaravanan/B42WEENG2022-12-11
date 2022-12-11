// default parameters
// es5 
// function sum(a, b) {
//   var a = a || 50;
//   var b = b || 10;
//   console.log(a + b);
// }

// es6
// function sum(a=50, b=10) {
//   console.log(a + b); // 60
// }

// sum();


var fname = 'Sanjay';

var lname = 'Saravanan';

// Your firstName: Sanjay & Your last Name: Saravanan

// es5
// console.log('Your firstName: ' + fname + ' & ' + 'Your Last Name: ' + lname );

// // es6 template literals use a statement with ${PARAMETER}
// console.log(`Your firstName: ${fname} & Your Last Name: ${lname}`);

/**
 * Line 1: Hello World
 * Line 2: Hi Hello
 * Line 3: Hello There
 */

// console.log(
// `Line 1: Hello World
// Line 2: Hi Hello
// Line 3: Hello There`);

// Object Shorthand
const name = 'B42WEENG';
const strength = 13;
const time = '10:00AM';

// create an Object (use above variables not values) { name: 'B42WEENG', strength: 13, time: '10:00AM' }

//es5
const obj = {
  name: name,
  strength: strength,
  time: time
};

console.log(obj)

// es6 object shorthand ( when variable name and key of objecti same )
const objEs6 = {
  name,
  strength,
  time
};

console.log(objEs6);


// Spread Operator --> ...
// create an obj like below.
/**
 * {
 *   name: 'B42WEENG',
 *   strength: 13,
 *   time: '10:00AM',
 *   isWeekend: true,
 *   techStacks: ['Python', 'JS', 'HTML']
 * }
 */

// es5
const finalObj = {
   name: 'B42WEENG',
   strength: 13,
   time: '10:00AM',
   isWeekend: true,
   techStacks: ['Python', 'JS', 'HTML']
};

//es6
const objUsingSpread = {
  ...objEs6,
  isWeekend: true,
  techStacks: ['Python', 'JS', 'HTML']
}

console.log(finalObj);
console.log(objUsingSpread);

// overriding a particular value with spread
/**
 * {
 *   name: 'B42WEENG',
 *   strength: 13,
 *   time: '2:00PM',
 *   isWeekend: true,
 *   techStacks: ['Python', 'JS', 'HTML']
 * }
 */

const overridenObj = {
  ...objUsingSpread,
  time: '2:00PM'
};

console.log(overridenObj);

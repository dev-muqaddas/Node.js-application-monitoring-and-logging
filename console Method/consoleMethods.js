// ========================= Assert Method =====================================
// ____________________ Example 1 ____________________________
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number += 1) {
  console.log("the # is " + number);
  // console.assert(number % 2 === 0, { number: number, errorMsg: errorMsg });
  console.assert(number % 2 === 0, 'Assertion Failed....!');
  // or, using ES2015 object property shorthand:
  // console.assert(number % 2 === 0, {number, errorMsg});
}

// ____________________ Example 2 ____________________________
console.assert(5 !== 5, 'Expression failed');

// ____________________ Example 3 ____________________________
let myArr = ['Orange', 'Apple', 'Mango'];
console.assert(5 != 5, myArr);



// ========================= Clear Method =====================================
// ____________________ Example 1 ____________________________
for (let i = 1; i <= 5; i++) {
  console.log(`It is ${i}`);
}

//Uncomment the code below
// console.clear();


// ========================= Count Method =====================================
// ____________________ Example 1 ____________________________
for (let i = 0; i < 5; i++) {
  console.count();
}
// ____________________ Example 2 ____________________________
for (let i = 0; i < 5; i++) {
  console.count();
}
// ____________________ Example 3 ____________________________
console.count();
console.count();
// ____________________ Example 4 ____________________________
for (let i = 0; i < 5; i++) {
  console.count();
  // console.count();
  // console.count('My Label');
  console.count('My Label');
}


// ========================= Error Method =====================================
// ____________________ Example 1 ____________________________
console.error('You made a mistake...!');


// ========================= group Method =====================================
// ____________________ Example 1 ____________________________
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
// ____________________ Example 2 ____________________________
console.log("Hello world!");
console.group('Stack 1');
console.log("Hello again, this time inside a group!");
console.log("Hello again, this time again inside a group!");
console.groupEnd();
console.log("and we are back.");


// ========================= groupCollapsed Method =====================================
// ____________________ Example 1 ____________________________
console.log("Hello World")
console.groupCollapsed("myLabel");
console.log('this time from inside the collapsed group');
console.groupEnd();
console.log("i am back");


// ========================= Info Method =====================================
// ____________________ Example 1 ____________________________
console.info(`this is a information`);
// ____________________ Example 2 ____________________________
const myObj = {firstname:"John", lastname:"Doe"};
console.info(myObj);


// ========================= table Method =====================================
// ____________________ Example 1 ____________________________
console.table(["Audi", "Volvo", "Ford"]);
// ____________________ Example 2 ____________________________
let car1 = {name:"Audi", model:"A4"}
let car2 = {name:"Volvo", model:"XC90"}
let car3 = {name:"Ford", model:"Fusion"}

console.table([car1, car2, car3]);
// ____________________ Example 3 ____________________________
let car1 = {name:"Audi", model:"A4"}
let car2 = {name:"Volvo", model:"XC90"}
let car3 = {name:"Ford", model:"Fusion"}

console.table([car1, car2, car3], ["model"]);


// ========================= time Method =====================================
// ____________________ Example 1 ____________________________
console.time("test1");
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd("test1");
// ____________________ Example 2 ____________________________
console.time("for loop");
for (let i = 0; i < 1000000; i++) {
  // some code
}
console.timeEnd("for loop");

let i = 0;
console.time("while loop");
while (i < 1000000) {
  i++
}
console.timeEnd("while loop");


// ========================= trace Method =====================================
// ____________________ Example 1 ____________________________
function myFunction() {
  myOtherFunction();
}

function myOtherFunction() {
  console.trace();
}

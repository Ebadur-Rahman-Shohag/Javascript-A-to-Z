"use strict";
/*
//****************************************TODO:Scope*********************************************
// 1.Global Scope 2.function Scope 3. Block Scope
// children can access parent element but parent can not access children element
//we can create different variable with same name in different scope
function bioData() {
  const firstName = "Rahman";
  const fullName = `${firstName} ${lastName}`;
  // return `My name is ${fullName}`; //and ${friend} is my friend`;
  function friendBio() {
    const friend = "Dipta";
    return `${fullName} is a student`;
  }
  console.log(friendBio());
  if (5 > 2) {
    const greater = `5 is greater than 2`;
    console.log(greater);
  }
}
const firstName = "Ebadur";
const lastName = "Shohag";
console.log(bioData());
*/
// *************************TODO:HOisting********************************
/*
// hoisting in variable
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// hoisting in Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
// ************************TODO:Primitive vs Objects***********************************
// Primitive Type---> Number,String,Boolean,Undefined,Null,Symbol,BigInt
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// Objects---> Object literal, Arrays, Functions, Many more...
const bio = {
  name: "Ebadur Rahman",
  age: 24,
};
const friendBio = bio;
friendBio.age = 25;
console.log(bio);
console.log(friendBio);
// Here we only change the age variable value of friendBio objects but bio  objects age variable value also changed.

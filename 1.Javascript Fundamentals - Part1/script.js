/*
****************************TODO:variable convention*********************

console.log("shohag");
let lastName = "Dipta";
console.log(lastName);

// We can use underscore in variable name
let last_name = "Joydip";
console.log(last_name);

// We can add $sign in variable
let $function = 27;

// constant value's variable name should be in uppercase
let PI = 3.1416;

// variable name should be descriptive
let myFirstJob = "student";
let myCurrentJob = "student";
*/
// *******************************TODO:Data types in Javascript**********************************
/*
console.log(typeof true);

let number = 23;
console.log(typeof number);

let firstName = "Ebadur";
console.log(typeof firstName);
let lastName;
console.log(typeof lastName);

console.log(typeof null);

number = "Fifty";
console.log(typeof number);
*/
// ***************************TODO:let,var,const***************************************
/*
// We can declare an empty variable by let
let firstName;
let age = 24;
// We can assign a new value in a variable when  variable is declared by let
age = 25;
console.log(age);

// we can not declare an empty variable by const
const myBirthYear;
const birthYear = 1997;
birthYear = 1998;
*/
/*
// *******************************TODO:Operators************************************
// Math Operators +, -, *, /
let now = 2021;
let ageShohag = now - 1997;
let ageDipta = now - 1996;
console.log(ageShohag, ageDipta);
console.log(ageShohag + ageDipta, ageShohag / 2, ageShohag * 2);
console.log(2 ** 3); //2x2x2

// Assignment Operators =, +=, -=, *=, /=
let x = 10 + 5;
x += 10; //x = x +10
x -= 10; //x = x-10;
x++;
x--;
x--;
console.log(x);

// Comparison Operators >, <, >=, <=
if (ageShohag > ageDipta) {
  console.log("Shohag is elder than Dipta"); //ageShohag = 24, ageDipta = 25
} else {
  console.log("Dipta is elder than Shohag");
}

if (ageDipta >= 18) {
  console.log("Dipta is an adult");
} else {
  console.log("Dipta is not an adult");
}
*/
/*
// ***************************TODO:String******************************************

const firstName = "Ebadur";
const currentYear = 2021;
const birthYear = 1997;
const job = "student";

// Old way to concatanate string
const bioData =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  ".";
console.log(bioData);

// New way to concatanate string
const newBioData = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}.`;
console.log(newBioData);

// Old way to write multiple line
console.log("I'm Shohag. \nand I'm a student.");

// New way to write multiple line
console.log(`I'm Shohag
and I'm a student.`);
*/
// ******************************TODO:if else statement*****************************************
/*
let year = 2021;
let century;
if (year <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// *****************************TODO:Type Conversion******************************************
/*
// string to number conversion
let currentYear = "2021";
console.log(currentYear, typeof currentYear);
let updatedCurrentYear = Number(currentYear);
console.log(updatedCurrentYear, typeof updatedCurrentYear);

// Number to string conversion
let birthYear = 2021;
console.log(birthYear, typeof birthYear);
let updatedBirthYear = String(birthYear);
console.log(updatedBirthYear, typeof updatedBirthYear);

// ***Type coercion
console.log("I'm a student and I'm " + 23 + " years old");

// plus operator automatically convert the number to string
console.log("23" + 3);

// minus,multiple,divide and comparison operator automatically convert the string to number
console.log("23" - 3);
console.log("20" * "5");
console.log("20" / 2 / "2");
console.log("25" < "50");

// example
let n = "23" + 3 - "15" * 2;
console.log(n);
*/
// ******************************TODO:truthy and falsy value******************************************
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));

// except these 5 values, all values are truthy
console.log(Boolean("Shohag"));
console.log(Boolean(24));

let money = 0; //0 is a falsly value so js automatically give us false
if (money) {
  console.log("spend the money wisely");
} else {
  console.log("Get a job");
}

let height; //undefined is a falsy value so Js automatically give us false
if (height) {
  console.log("Yes, height is defined.");
} else {
  console.log("Height is UNDEFINED");
}
*/
// *****************************TODO:Equaility Operator*******************************************
/*
let age = "20";
if (age == 20) {  //Double Equals (==) checks for value equality only.
  console.log("I am an adult");
} else {
  console.log("I am a child");
}

let age = "20";
if (age === 20) { //Triple Equals (===) will verify whether the variables being compared have both the same value AND the same type.
  console.log("I am an adult");
} else {
  console.log("I am a child");
}
*/
// **********************************TODO:swich case****************************************
/*
// swich case basically use for equality and it is use instead of if else
//if we want to caompare one value with multiple option then we can use switch statement.
const day = "sunday"; 

switch (day) {
  case "saturday": //day === "saturday"
    console.log("Go to coding bootcamp");
    break; //without the break the code simply continues executing 
  case "sunday":
    console.log("Prepare for theory videos");
    break;
  case "monday":
    console.log("Prepare to do css");
    break;
  case "tuesday":
    console.log("watching Movie");
    break;
  case "wednesday":
    console.log("writing code");
    break;
  case "thursday":
  case "friday":
    console.log("watching Js video");
    break;

  default:  //default is going to executed when all the other cases fail
    console.log("Take rest");
}
*/
// *******************************TODO:Conditional (Ternary) operator*******************************************
/*
let age = 23;
let result = age > 23 ? "I can drink wine now" : "I can drink water";
console.log(result);
*/

//*******************************TODO:null and undefined*******************************
/*
let leviticus = null;
// leviticus is null

let dune;
// dune is undefined

//leviticus is intentionally without an object value (null). 
//Whereas dune is declared, yet it's unintentionally missing a value (undefined).
*/
/*
//***TODO:strict mode
// we use strict mode to find bug easily in our code
"use strict";
let hasDriversLicense = false;
let passTest = true;
if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log("You can Drive now!");
}
*/
// **********************TODO:function****************************
/*
// This is a simple function structure
function fruitProcessor(apples, oranges) {
  const buyProduct = `You can buy ${apples} apples and ${oranges} oranges.`;
  return buyProduct; //return keyword return the value
}
console.log(fruitProcessor(3, 5));
console.log(fruitProcessor(5, 10));
const result = fruitProcessor(10, 15);
console.log(result);
*/
// ***********************TODO:function declarations******************************
/*
// In function declarion we can call the function before we write the function
function calcAge1(currentYear, birthYear) {
  const age1 = currentYear - birthYear;
  return age1;
}
const result = calcAge1(2021, 1997);
console.log(result);

//**********************TODO:function expression*********************************
// In function expression we can not call the function before write the function
const calcAge2 = function (currentYear, birthYear) {
  const age2 = currentYear - birthYear;
  return age2;
};
const result2 = calcAge2(2021, 1998);
console.log(result2);
*/
// **************************TODO:arrow function****************************
/*
const age3 = (currentYear, birthYear) => currentYear - birthYear;
console.log(age3(2021, 1997));

// if we have mltiple line of code we should use parenthesis and return keyword
const retirementAge = (currentYear, birthYear, maximumAgeOfJob) => {
  const age = currentYear - birthYear;
  const retirement = maximumAgeOfJob - age;
  return retirement;
};
const result = retirementAge(2021, 1997, 65);
console.log(result);
*/
// *************************TODO:function calling other function********************************
/*
const cutPieces = function (fruit) {
  return fruit * 4;
};
const foodProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};
const result = foodProcessor(3, 6);
console.log(result);
*/
// ***********************TODO:function review*********************************
/*
const calcAge = function (currentYear, birthYear) {
  return currentYear - birthYear;
};
const retirement = function (currentYear, birthYear, maximumAgeOfJob) {
  const age = calcAge(currentYear, birthYear);
  const retirementAge = maximumAgeOfJob - age;
  if (retirementAge > 0) {
    return retirementAge;
    console.log("The function is executed."); //if we return something it execute the function immediately.
    //So if we write something after the return it will skip it.
  } else {
    return -1;
  }
};
console.log(retirement(2021, 1997, 65));
*/
// **************************TODO:Array******************************
/*
const friends = ["Dipta", "Ony", "Kabir", "Eshaq"]; //We can create array following this method.
const years = new Array(1990, 1995, 2000, 2005); //We also can create an array by using new keyword.
console.log(years[0]);
console.log(friends[0]);
console.log(friends[friends.length - 1]); //we can find the last data of an array by this method.
friends[4] = "Shohag"; //We can add a data to an array by this method.
console.log(friends);

const bioData = ["Shohag", "student", 1997, ["dipta", "ony"]]; //We can store different type of data in an array.
console.log(bioData);

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const age = [1990, 1995, 2000];
console.log(calcAge(age[0]));
*/
// ***************************TODO:Some array method*******************************
/*
const friends = ["Dipta", "Ony", "Kabir"];
friends.push("Eshaq"); //Push method will add the element as a last value in an array.
//It also return the length of the array
console.log(friends);
friends.unshift("Partha"); // unshift method will add the element as a first value in an array.
console.log(friends);

// Remove element
friends.pop(); //pop() method will remove the last value of the array.
//It will also return the removed value
console.log(friends);
friends.shift(); // shift() method will remove the first value of the array.
console.log(friends);

const elementIndex = friends.indexOf("Dipta"); //indexof() method will get the index of an element which you want.
console.log(elementIndex);

const elementInclude = friends.includes("Ony"); //Includes() method will help you to check
//your wanted element is the part of the array or not.
console.log(elementInclude);
*/
// ****************************TODO:object***********************************
/*
const shohag = {
  firstName: "Ebadur",
  lastName: "Shohag",
  age: 24,
  job: "student",
  friends: ["Dipta", "Ony", "kabir"],
};
console.log(shohag);

// Dot vs Bracket Notation
console.log(shohag.lastName); //By dot notation we can access any value of an object.

console.log(shohag["lastName"]); //By bracket notation we can any value from an object.

// We can write expression in bracket notation
const nameKey = "Name";
console.log(shohag[`first${nameKey}`]);

const interestedIn = prompt(
  "What do you want to know about Shohag? Choose between firstName,lastName,age,job,friends:"
);
if (shohag[interestedIn]) {
  console.log(shohag[interestedIn]);
} else {
  console.log("Wrong Request!");
}

// We can also add new data in an object by dot and bracket notation
shohag.location = "Sylhet"; //In this way we can add element by dot notation
console.log(shohag);

shohag["favrtMovie"] = "3 idiots";
console.log(shohag);

// Challenge
// Shohag has 3 friends, and his best friend is called Dipta
console.log(
  `${shohag.lastName} has ${shohag.friends.length} friends, and his best friend is called ${shohag.friends[0]}`
);
*/

/*
// Object method
const shohag = {
  firstName: "Ebadur",
  lastName: "Shohag",
  age: 24,
  birthYear: 1999,
  job: "student",
  friends: ["Dipta", "Ony", "kabir"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },
  // calcAge: function () {
  //   return 2021 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  // challenge
  // Shohag is a 46-year old teacher, and he has a driver's license
  getSummary: function () {
    return `${this.lastName} is a ${this.calcAge()}-years old ${this.job}`;
  },
};
console.log(shohag.getSummary());
// console.log(shohag.calcAge());
console.log(shohag.age);
// console.log(shohag["calcAge"](1998));
*/

// ****************************TODO:loop*********************************
/*
// for loop
for (let i = 1; i <= 10; i++) {
  console.log(`This is counter ${i}`);
}
*/
// *****************************TODO:loops in array*******************************
/*

const shohag = ["Ebadur", "Shohag", "24", "student", ["Dipta", "Ony", "Kabir"]];
const types = [];
for (let i = 0; i < shohag.length; i++) {
  console.log(shohag[i], typeof shohag[i]);
  // types[i] = typeof shohag[i]; //in this way we can push value to typea array.
  types.push(typeof shohag[i]);
}
console.log(types);

// simple exercise
const years = [1990, 1995, 2000, 2005];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);

// continue and break
//continue
console.log("---Only String---");
const dipta = ["Shuvendu", "Dipta", 24, "student", ["Shohag", "Banna"]];
for (let i = 0; i < dipta.length; i++) {
  if (typeof dipta[i] !== "string") continue;
  console.log(dipta[i], typeof dipta[i]);
}

//break
console.log("---Break when find a number---");
for (let i = 0; i < dipta.length; i++) {
  if (typeof dipta[i] === "number") break;
  console.log(dipta[i], typeof dipta[i]);
};
*/
// *****************************TODO:Looping backwards in an array*************************************
/*
const shohag = ['Ebadur', 'Shohag', '24', 'student', ['Dipta', 'Ony', 'Kabir']];
for (let i = shohag.length - 1; i > 0; i--) {
  console.log(shohag[i]);
}

// Nested Loop

// *****************************TODO:The While loop*************************************
let i = 1;
while (i <= 10) {
  console.log(`Let's count the number from 1-10: ${i} `);
  i++;
}

let dice = Math.floor(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}.`);
  dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log('Loop is about to end.');
  }
}
*/

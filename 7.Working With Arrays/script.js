'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/
/////////////////////////////////////////////////
/*
// ********************************TODO:Simple array method************************************

//SLICE method()
//The slice method is used to take a slice or extract a part from an array.
//This method does not change the original array.
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); //The first value is the index number where it start extracting.
console.log(arr.slice(2, 4)); //The second value is the (index-1) where it stop extracting.
console.log(arr.slice(-2)); //we can take negative value for extracting an array. The value is the index number from the reverse side of the array.
//We can copy the original array by slice method.
console.log(arr.slice());
console.log([...arr]); //This is another way to copy an array.

//SPLIC method()
//splice and slice method are almost same. But there are some differences.
//splice method does change the original array. The first value is the index number
//where it start extracting. But the second value is how many value you want to extract from an array.
//Generally we use splice method when we need to delete some value from an array. 
console.log(arr.splice(2, 3));
console.log(arr.splice(-1));
console.log(arr);

// REVERSE method.
//This method reverse the array and it does change the original array.
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT method()
//We can concat or merge two array by concat method. This method does not change the original array.
let letters = arr.concat(arr2);
console.log(letters);
// we can merge two array by another way.
console.log([...arr, ...arr2]);

// JOIN merthod()
//This method concate or merge (by commas or a specified separator string) the array and return a string.
console.log(letters.join('-'));
*/
/*
//************************************TODO:Looping arrays_forEach**********************************

//for of loop
// To access the index by for of we should use .entries() method. And firsr position contain index number and the second position contain the value from array.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  }
}

//forEach loop
// For access index number by forEach loop we can use argument in the callback function.
// First parameter contain the value from the array, second one contain the index number and the third one contain the array.
console.log('----------------------------------------');
movements.forEach((element, index, array) => {
  if (element > 0) {
    console.log(`Movement ${index + 1}: You deposited ${element}`);
  } else {
    console.log(`Movement ${index + 1}: You deposited ${element}`);
  }
});

//0: function(200)
//1: function(450)
//2: function(400)
*/
/*
//**********************************************TODO:forEach in maps and sets***********************************************

// For maps
// The first parameter contain the value, second parameter conatain the key of the maps, third one contain the maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach((value, key, maps) => {
  console.log(`${key}: ${value}`);
});

// For sets
//The first parameter contain the value, second parameter also conatain the value and third one contain the maps
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach((value, key, sets) => {
  console.log(`${value}: ${value}`);
});
console.log(currenciesUnique);
*/
/*
// **********************************************TODO:The map() method**************************************
// we can loop through an array by map PaymentMethodChangeEvent.
// This method create another array automatically and return it.
//It does not change the original array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// problem
// Loop through the movements array,add 1 with every element and return another array.

const newMovements = movements.map(value => {
  return value + 1;
});
console.log(newMovements);

// Solving this problem without map
// By for of loop

const newMovements2 = [];
for (const element of movements) {
  newMovements2.push(element + 1);
}
console.log(newMovements2);

// Access the index via map method
//The first parameter is the value,second parameter is the index.

const newMovements3 = movements.map((value, index) => {
  return `Index ${index}: value ${value}`;
});
console.log(newMovements3);
*/
/*
// ********************************************TODO:The filter() method***********************************
// This method is used to loop through an array and return a new array with element that fulfill the condition
//It does not change the original array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// problem
// Get all the positive value
const positiveValue = movements.filter(value => {
  return value > 0;
});
console.log(positiveValue);

// Get all the positive value without filter method
const positiveValue2 = [];

movements.forEach(value => {
  if (value > 0) {
    positiveValue2.push(value);
  }
});
console.log(positiveValue2);
*/
/*
// ****************************TODO:The reduce() method*****************************************
// This method loop through the array and return a single value
//The first parameter is the value,second parameter is the index.
//The first parameter is the accumulator, second parameter is the current value and third parameter is the index.

// problem: sum all the element from an array and return the sum.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calculateSum = movements.reduce((acc, value) => {
  return acc + value;
}, 0);
console.log(calculateSum);

// solving this problem without reduce
let sum = 0;
for (const currentValue of movements) {
  sum += currentValue;
}
console.log(sum);

// problem2:Get the maximum value from the array.
const max = movements.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, movements[0]);
console.log(max);
*/
/*
//*************************************TODO:The magic of chaining method******************************
// We can use chaining with map,filter and reduce
// We can use chaining after map and filter because those return another array
// We can not use chaining after reduce because reduce method return a single value

// problem: Get all the deposit from the array, add 2 with every element and return the sum of all element
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const total = movements
  .filter(value => value > 0)
  .map((value, i, arr) => {
    //we can debug the code easily by seeing the returned array
    console.log(arr);
    return value + 1;
  })
  .reduce((acc, curr) => acc + curr, 0);
console.log(total);
*/

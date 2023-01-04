'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  oder: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    time,
    address,
    starterIndex,
    mainIndex,
    menu = 'my menu',
  }) {
    console.log(time, address, starterIndex, mainIndex, menu);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngrediants, ...othersThing) {
    console.log(mainIngrediants);
    console.log(othersThing);
  },
};
/*
// *****************************TODO:Maps*************************

// Map is a new data structure method in Javascript. Map in like an object. Object can contain string keys
//but map can contain any type of keys.
// Create a map
//You can create a Map by passing an Array to the new Map() constructor
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits)

//You can add elements to a Map with the set() method
// set() method add a key value pair in a Map.
const rest = new Map();
rest.set('name', 'Classic Italiano');
rest.set(1, 'Firenza, Italy');
rest.set(2, 'Lisbon, Portugul');
rest
  .set('catagories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest);

// We can access value from a Map with get() method by the key of the Map
console.log(rest.get('name'));
console.log(rest.get(true));

// a use case of map
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// We can check weather  a value is included in a map or not by the has() method
console.log(rest.has('catagories'));
console.log(rest.has('founder'));

// We can get a Map length by the size method
console.log(rest.size);

// We can clear the whole map by the clear() method
rest.clear();
console.log(rest);

// We can also pass an array in a key of a map
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
// But if we try to get the value by the key we can not get that. For that we need to stror the array in a variable
// console.log(rest.get([1, 2])); //Wrong way to get the value
console.log(rest.get(arr));
*/
/*

// *******************************TODO:Sets****************************

// Set is a new data structure method in Javascript. Sets only contain unique value.
// Create a set
// We can pass iterables like array, String in sets
const orderSet = new Set(['pizza', 'pasta', 'garlic', 'pizza', 'pizza']);
console.log(orderSet);
const orderSet2 = new Set('Shohag');
console.log(orderSet2);

// length of a sets
console.log(orderSet.size);
// Check a set has a specific value or not
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));
// Adding a value in a set
orderSet.add('bread');
console.log(orderSet);
// Delete a value from a set
orderSet.delete('pizza');
console.log(orderSet);

// We can not access any value from a set like an array
console.log(orderSet[1]); //This will show undefined

// delete the whole set
// orderSet.clear();
console.log(orderSet);

// set is an iterables, so we can loop through a set
for (let order of orderSet) {
  console.log(order);
}

// Example: Remove duplicate value from an array
// we can use spread operator in a set
const staff = ['waiter', 'chef', 'waiter', 'manager'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
*/

//******************************TODO:Looping Object_object MediaKeySession,values and Entries*******************************

//************************************TODO:Optional chaining*************************************
/*
//******************************TODO:Enhanced Object literals*****************************

// There are three type of objecte literals: 1.include an object in another object in a newer way 2. Write function in an object in a newer way 3.Write object key from an array
const parentsBio = ['Mother', 'Sister'];

const myObj2 = {
  profession: 'student',
  [parentsBio[0]]: 'Romana',
  [parentsBio[1]]: 'Romu',
};

const myObj = {
  name: 'Shohag',
  age: 21,
  //Old way to include an object in another object
  // myObj2:myObj2,
  //New way to include an object in another object
  myObj2,
  // Old way to write a function in an object
  hobby: function (hobby1, hobby2) {
    console.log(`My hobbies are ${hobby1} and ${hobby2}.`);
  },
  // New way to write a function in an object
  anotherHobby(hobby1, hobby2) {
    console.log(`My hobbies are ${hobby1} and ${hobby2}.`);
  },
};
console.log(myObj);
myObj.hobby('playing cricket', 'singing');
myObj.anotherHobby('playing video games', 'gardening');
/*
/*
//*****************************TODO:Looping Arrays_The for of loops***************************

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (let item of menu) {
  console.log(item);
}

// It's a bit complex to get the index number of an array by for of loop.
// To get the index number from an array by for of loop we need to use entries() method
for (let item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0]}:${item[1]}`);
}

// We can get the same result by an easier way using destructuring
for (let [i, el] of menu.entries()) {
  // console.log(item);
  console.log(`${i}:${el}`);
}
*/
//****************************TODO:The Nullish coalescing operator(__)*******************

// ******************************TODO:hort Circuiting(&& and ||)**********************

/*
// **********************************TODO:Rest pattern and Parameters*****************************

// Spread operator and Rest pattern looks same but they works in opposite way
// spread operator get all the element from an array but rest pattern converts the element into an array
// Spread operator, Because the right side of the =
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);

// Rest pattenrn, Because the left side of the =
const [a, ...restArr] = [1, 2, 3, 4];
console.log(a, restArr);

const myArr = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(myArr);
const [facaccia, , garlicBread, ...others] = myArr;
console.log(facaccia, garlicBread, others);

// Rest pattern in Object
const { fri, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Using rest pattern in functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(4, 5, 6);
add(7, 8, 9, 10);
add(1, 2, 3, 4, 5, 6);

// calling orderPizza function
restaurant.orderPizza('mushrooms', 'onion', 'olivers', 'spinach');
*/
/*
// ********************************TODO:The spread Operator*****************************************

//Old way to Create a new array from one array with some new element
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//New way to Create a new array from one array with some new element
const newArr = [1, 2, ...arr];
console.log(newArr);

// The spread operator don't get the whole array it's only get the elements of the array separated with comma
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

// Copy array by the spread operator
// copying mainMenu array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays or merge 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// The spread operator only works on iterables
// iterables: array, strings, maps, sets.
// Object is not an iterables
// spread operator in strings
const str = 'Shohag';
const letter = [...str, ' ', 'o'];
console.log(letter);

// calling orderPasta function
const ingredients = ['mushrooms', 'asparagus', 'chesse'];

// old way to call a function with multiple arguments from an array
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// new way to call a function with multiple arguments from an array
restaurant.orderPasta(...ingredients);

// even though object is not an iterables we can use spred operator in an object in modern Javascript

const newRestaurant = { ...restaurant, founder: 'Shohag' };
console.log(newRestaurant);

// We can copy an object by the spread operator.
const restaurantCopy = { ...restaurant, name: 'Vai Vai Restaurant' };
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
// ********************************TODO:Object Destructuring*****************************************

// For destructurnig object variable name and object property name must be the same
// Property name order is not a problem in objecet destructurnig
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing variable name in object destructuring
const { name: restaurantName, categories: restaurantCatagories } = restaurant;
console.log(restaurantName, restaurantCatagories);

// Set default value in object destructuring
const { menu = ['shohag'], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variable in object destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Pass many arguments in a function by one object
restaurant.orderDelivery({
  time: '22:30',
  address: ' Via del sole 21',
  mainIndex: 2,
  starterIndex: 2,

//**********************************TODO:Array destructuring******************************************

const arr  = [2, 3, 4];

// old way to store different value in different variable
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

//New way to store different value in different variable => [Destructuring]
const [x, y, z] = arr;
console.log(x, y, z);

//swictching two value in an array
// Old way to switch
let array = [1, 2];
let temp = array[0];
array[0] = array[1];
array[1] = temp;
console.log(array);

// New way to Switch [Destructuring]
let [main, secondary] = array;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// store value in a variable from array of Object
let [first, second] = restaurant.categories;
console.log(first, second);

// if we want to store first and third value without second value

let [firstt, , third] = restaurant.categories;
console.log(firstt, third);

// Receiving two return values from a function
console.log(restaurant.oder(0, 1));
const [starter, mainCourse] = restaurant.oder(0, 1);
console.log(starter, mainCourse);

// Nested array
const nested = [1, 2, [3, 4]];
const [p, q, r] = nested;
const [i, j, [k, l]] = nested;
console.log(p, q, r);
console.log(i, j, k, l);

// Default values
const myArray = [1, 2];
const [m = 1, n = 1, o = 1] = myArray;
console.log(m, n, o);
*/

//****************************************TODO:String**************************************************
/*
const airline = 'Tap air Portugal';
const plane = 'A320';

console.log(airline[2]); //We can access any index by this method

console.log(airline.length); //we can get the length of any string by this method

console.log(airline.indexOf('r')); //we can get the index of any letter by this method

console.log(
  airline.lastIndexOf('r')
); //if any letter repeated twice we can get the last 
//index of this letter by this method

console.log(airline.indexOf('Portugal')); //we can also get the index of any letter by this letter

// slice() method
console.log(airline.slice(4)); //we can extract any word or sentence by thid method
console.log(airline.slice(4, 7)); //This will extract the sentence(start from index 4 and end in index 6(7-1))
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-1)); //it will return the last letter of a sentence
console.log(airline.slice(0, -1));

// Exercise
// Find the middle seat
// B and E are middle seat

const checkMiddleSeat = function (seat) {
  let lastIndex = seat.slice(-1);
  if (lastIndex === 'B' || lastIndex === 'E') {
    return `You got the middle seat😞`;
  } else {
    return `You got lucky👱‍♀️`;
  }
};
console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23C'));
console.log(checkMiddleSeat('3E'));

// Some other method
// uppercase and lowercase method
const lastName = 'sHohag';
console.log(lastName.toLocaleLowerCase());
console.log(lastName.toUpperCase());

// make the firstletter uppercase and rest of the letter lowercase
let friendName = 'dIPta';

friendName = friendName.toLowerCase();
console.log(friendName);
let modifiedFriendName = friendName[0].toUpperCase();
console.log(modifiedFriendName);
console.log(modifiedFriendName + friendName.slice(1));

// comparing email
const email = 'hello@shohag.com';
const login = '  Hello@Shohag.com  \n';
const newEmailLogin = login.toLowerCase().trim();
console.log(newEmailLogin);
if (email === newEmailLogin) console.log(true);
else {
  console.log(fals);
}

// replace() method
const priceGb = '288,97£';
const priceUs = priceGb.replace('£', '$').replace(',', '.');
console.log(priceUs);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //we also can replace word by this method
// console.log(announcement.replaceAll('door','gate')); //This method will coming soon in javascript

console.log(announcement.replace(/door/g, 'gate')); //By following this method we can replace all the door word by gate

// Boolean method
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('B272'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo'));

// split() method
const str = 'a+very+nice+string';
console.log(str.split('+'));
const fullName = 'Ebadur Rahman Shohag';
const newFullName = fullName.split(' ');
console.log(newFullName);
console.log(fullName);

// we can now store this value in variable with destructuring
const [firstName, middleName, lstName] = newFullName;
console.log(middleName);

// join() method
// join() metthod will join the array value into a string
console.log(newFullName.join(' '));

// exercise
// make every word's first letter capital
const capitalizeName = name => {
  const array = [];
  name = name.split(' ');
  for (let n of name) {
    // array.push(n[0].toUpperCase() + n.slice(1));
    array.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return array.join(' ');
};
console.log(capitalizeName('ebadur rahman shohag'));

// padding() method
const message = 'Go to gate 23';
console.log(message.padStart(20, '+'));
console.log(message.padEnd(20, '+'));

const maskCreditCard = number => {
  number = number + ''; //Making number to string
  let last = number.slice(-4);
  return last.padStart(number.length, '*');
};
console.log(maskCreditCard(45456154561));

// Repeat() method
const message2 = 'Bad weather...';
console.log(message2.repeat(5));
*/

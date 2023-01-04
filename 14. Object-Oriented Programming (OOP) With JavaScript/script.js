'use strict';
/*
//******************************************TODO:Constructor function and the new operator*************************************

// By constructor function we can create Object. In constructor function function name first letter should be capital.

const Person = function (lastName, birthYear) {
  //we can not use arrow function in constructor function.Beacause arrow function does not have this method.
  // console.log(this); this return the Person object;
  this.lastName = lastName;
  this.birthYear = birthYear;

  //We can create method inside constructor function. But we should not do that
  // Question: Why we should not write method inside constructor function???
  // this.calcAge = function () {
  //   return 2037 - this.birthYear;
  // };
};

// What exactly happens when we call a function with new operator
// 1. New empty object {} created.
// 2. function is called, this = {}
// 3. Newly created object {} linked to prototype.
// 4. function automatically return the object {}

const shohag = new Person('Shohag', 1997); //In constructor function we use new keyword in function call
console.log(shohag);
const ony = new Person('Ony', 1998);
console.log(ony);

console.log(shohag instanceof Person); //Here shohag and ony are the instances of Person

//******************************************TODO:Prototypes***************************************************

//calcAge() method is now set in the prototype and any object that are crated from constructor function can access this method. We don't have to call it in every object separately.
Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};
//We can also set any data in the prototype
Person.prototype.species = 'Homo Sapiens';

console.log(Person.prototype);
console.log(shohag.calcAge());
console.log(shohag.__proto__);
console.log(shohag.__proto__ === Person.prototype);
console.log(ony.calcAge());
console.log(shohag.species);
console.log(ony.species);
console.log(shohag.hasOwnProperty(calcAge())) //should return false.
console.log(shohag.hasOwnProperty(lastName)) //should return true.

//******************************************FIXME:Prototypal Inheritance*******************************

//************************************TODO:Challange-1*****************************************

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
const car1 = new Car('BMW', 110);
const car2 = new Car('Mercedes', 100);
car1.accelarate();
car1.accelarate();
car1.break();
*/

/*
//***********************************************TODO:Classes*******************************************************

// class expression
// We can write class like this.Beacuse behind the scene class is also is one kind of function
//const PersonCl = class{} //there is no bracket for parameter in classes

// class declaration
class PersonCl {
  constructor(lastName, birthYear) {
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
  // We can also write method in classes and it directly goes to the protortype of the every created object.
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const shohag = new PersonCl('Shohag', 1997);
const ony = new PersonCl('Ony', 1998);
console.log(shohag);
shohag.calcAge();
ony.calcAge();

// We can also create method in classes like constructor function.
PersonCl.prototype.firstName = 'Ebadur Rahman';
console.log(shohag.firstName);

// Behind the scene classes also work like prototypal inheritance
console.log(shohag.__proto__ === PersonCl.prototype);

// Some Important topic about classes
// 1.Classes are not hoisted.
// 2.Class are first-class citizens
// 3. Classes are executed in strict mode
*/

//*********************************TODO:Setters and Getters***********************************************//50% completed
// Understanding getters and setters using Object
// getters and setters are looks like method. But we can simply use it as a property. we don't need to call it like method.

const account = {
  name: 'Shohag',
  movement: [200, 530, 120, 300],

  // get the latest movement value
  get latest() {
    return this.movement.slice(-1).pop();
  },
  // Add a new value to the array
  // In setters one parameter in compulsory
  set latest(mov) {
    return this.movement.push(mov);
  },
};
console.log(account.latest);

// we can set the value like this
account.latest = 50;
console.log(account.movement);

//*********************************TODO:Static Methods***********************************************

//*********************************TODO:Object.create***********************************************

//*********************************TODO:Coding Challenge #2***********************************************

//*********************************TODO:Inheritance Between _Classes__ Constructor Functions********************

//*********************************TODO:Coding Challenge #3***********************************************

//*********************************TODO:Inheritance Between _Classes__ Object.create***************************************

//*********************************TODO:Another Class Example***********************************************

//*********************************TODO:Encapsulation_ Protected Properties and Methods*************************************

//*********************************TODO:Encapsulation_ Private Class Fields and Methods*************************************

//*********************************TODO:Chaining Methods***********************************************

//*********************************TODO:ES6 Classes Summary***********************************************

//*********************************TODO:Coding Challenge #4***********************************************

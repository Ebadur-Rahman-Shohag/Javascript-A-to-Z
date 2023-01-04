'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// ************************************TODO:Converting and Checking Numbers***************************

// ************************************TODO:Math and Rounding*****************************************
// The Math.sqrt() method returns the square root of a number.
console.log(Math.sqrt(25));

// The exponentiation operator (**) raises the first operand to the power of the second operand.
console.log(25 ** (1 / 2));
// We can also get cubic root by this method
console.log(8 ** (1 / 3));

// The Math.max() method returns the number with the highest value.
console.log(Math.max(25, 30, 2, 10));
// This function actually does type coercion.
console.log(Math.max(25, '35', 2, 10));
// It does not parse the value
console.log(Math.max(25, '30px', 2, 10));

// The Math.max() method returns the number with the lowest value.
console.log(Math.min(25, 35, 2, 10));

// We can also get the value of PI
console.log(Math.PI);

// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive).
console.log(Math.random());

// ***Rounding Integers
// The Math.trunc() method returns the integer part of a number. This method will NOT round the number up/down to the nearest integer, but simply remove the decimals.
console.log(Math.trunc(23.3));

// The Math.round() method rounds a number to the nearest integer. 2.49 will be rounded down (2), and 2.5 will be rounded up (3).
console.log(Math.round(23.3));

// The Math.ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.
console.log(Math.ceil(23.1));

// The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
console.log(Math.floor(23.6));
// Math.Floor() rounds toward negative infinity
console.log(Math.floor(-3.4));

// ***Rounding decimals
// The toFixed() method rounds the string to a specified number of decimals. The toFixed() method converts a number to a string.
console.log((2.7).toFixed(0));
console.log(+(2.716).toFixed(2)); //We can convert the string output into number by using plus or using Number() method.

// ************************************TODO:The Remainder Operator************************************
// The remainder operator (%) returns the remainder left over when one operand is divided by a second operand.
console.log(8 % 3);
console.log(5 % 2);

// ************************************TODO:Working with BigInt***************************************
// Numbers are represented internally as 64 bits. That means there are 64 ones and zeroes. Now of these 64 bits only 53 are used to actually store the digit themselves.
// Therefore we can only use 53 bits to store the number so there is a limit how big numbers can be
// We can calculate this number
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); //Js can safely store digits up to this number.

// What we use in Js to store even bigger numbers are BigInt.
console.log(54684556454564564564564564564564564545n); //n represent that this is a bigint number.

// We can also use BigInt method. But we should use it for smaller BigInt numbers
console.log(BigInt(25555656));

// ***Operations
// We can add,substract and multiply two BigInt numbers.
console.log(50n + 50n);
console.log(50n - 20n);
console.log(50n * 5n);
// But for division there are some complcation. BigInt does not calculate decimal numbers for divivsion
console.log(10n / 3n);

// We can not add, substract, multiply and divide a BigInt number with a normal number
// console.log(10n + 5);

// ***Exceptions
console.log(20n > 15); //return true
console.log(20n === 20); //return false
console.log(20n == 20); //return true
console.log(typeof 20n); //return bigint

// ************************************TODO:Creating Dates********************************************

// ************************************TODO:Adding Dates to _Bankist_ App*****************************

// ************************************TODO:Operations With Dates*************************************

// ************************************TODO:Internationalizing Dates (Intl)***************************

// ************************************TODO:Internationalizing Numbers (Intl)*************************

// ************************************TODO:Timers_ setTimeout and setInterval************************

// ************************************TODO:Implementing a Countdown Timer****************************

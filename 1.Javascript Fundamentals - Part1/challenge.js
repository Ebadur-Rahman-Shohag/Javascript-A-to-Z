// Challenge-1
const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
let BMIJhon = massJhon / (heightJhon * heightJhon);
console.log(BMIJhon);

markHigherBMI = BMIMark > BMIJhon;
console.log(markHigherBMI);

// Challenge-2
if (BMIMark > BMIJhon) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than Jhon's (${BMIJhon}) BMI!`
  );
} else {
  console.log(
    `Jhon's (${BMIJhon}) BMI is higher than Mark's (${BMIMark}) BMI!`
  );
}

// challenge-3
let averageDolphins = (96 + 108 + 89) / 3;
console.log(averageDolphins);
let averageKoalas = (88 + 91 + 110) / 3;
console.log(averageKoalas);
if (averageDolphins === averageKoalas) {
  console.log("Draw!");
} else if (averageDolphins > averageKoalas) {
  console.log("The winner is Dolphins!");
} else {
  console.log("The winner is Koalas!");
}

// Bonus
let scoreDolphins = (97 + 112 + 101) / 3;
console.log(scoreDolphins);
let scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreKoalas);
if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
  console.log("The winner is Koalas!");
} else if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
  console.log("The winner is Dolphines!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!👏");
} else {
  console.log("No one win the trophy😥");
}

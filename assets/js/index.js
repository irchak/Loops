//1
const currentNumber1 = 25;

console.log("While");
let endNamber1 = currentNumber1;
while (endNamber1 >= 0) {
  console.log(endNamber1--);
}

console.log("Do While");
let endNamber2 = currentNumber1;
do {
  console.log(endNamber2--);
} while (endNamber2 >= 0);

console.log("For");
for (let endNamber3 = currentNumber1; endNamber3 >= 0; endNamber3--) {
  console.log(endNamber3);
}

//2
const startNumber = 10,
  lastNumber = 50;

console.log("While 2 ");
let startNumber1 = startNumber,
  lastNumber1 = lastNumber;
while (startNumber1 <= lastNumber1) {
  if (startNumber1 % 5 === 0) {
    console.log(startNumber1);
  }
  startNumber1++;
}

console.log("Do While 2 ");
let startNumber2 = startNumber,
  lastNumber2 = lastNumber;
do {
  if (startNumber2 % 5 === 0) {
    console.log(startNumber2);
  }
  startNumber2++;
} while (startNumber2 <= lastNumber2);

// console.log("For");
// for (
//   let startNumber3 = startNumber, lastNumber3 = lastNumber;
//   startNumber3 <= lastNumber3;

// ) {
//   if (startNumber3 % 5 === 0) {
//     console.log(startNumber3);
//   }
// }

//3
const firstNumber = 1,
  numberEnd = 100;

console.log("While 3");
let firstNumber1 = firstNumber,
  numberEnd1 = numberEnd;
let sum = null;

while (firstNumber1 <= numberEnd1) {
  sum += firstNumber1++;
}
console.log("Sum While:", sum);

console.log("Do While");
let firstNumber2 = firstNumber,
  numberEnd2 = numberEnd;
sum = null;

do {
  sum += firstNumber2++;
} while (firstNumber2 <= numberEnd2);

console.log("Sum Do While:", sum);

console.log("For");
for (
  let firstNumber3 = firstNumber, numberEnd3 = numberEnd, sum = null;
  (firstNumber3 = 0);

) {
  sum += firstNumber3;
}
console.log("Sum For:", sum);

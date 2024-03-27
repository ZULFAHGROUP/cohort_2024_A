let number = 15;
let value;

// Question 1
if (number > 0) {
  value = "Number is positive";
} else if (number < 0) {
  value = "number is negative";
} else {
  value = "number is zero";
}
console.log(value);

// Questíon 2
if (number % 2 == 0) {
  value = "number is even";
} else {
  value = "number is odd";
}
console.log(value);

// Question 3
if (number % 5 == 0 && number % 3 == 0) {
  value = "Number is a multiple of 5 and also a multiple of 3";
} else if (number % 5 == 0) {
  value = "Number is a multiple of 5";
} else if (number % 3 == 0) {
  value = "Number is a multiple of 3";
} else {
  value = "Number is neither negative or positive";
}
console.log(value);

// Question 4
let year = 1950;
let century;

if (year >= 1900 && year <= 2000) {
  century = "year is in the 20th century";
} else if (year >= 2001 && year <= 2100) {
  century = "year is in the 21st century";
} else if (year >= 2101 && year <= 2200) {
  century = "year is ín 22nd century";
} else if (year > 2201) {
  century = "Year is 23rd century and above";
}
console.log(century);

// Question 5

let variable = 10;
let result = 3;

if (variable < 10) {
  result = 0;
} else if (variable <= 50) {
  result = 1;
} else if (variable <= 100) {
  result = 2;
}
console.log(result);

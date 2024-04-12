// Question 1
// Print the numbers 0 - 20, one number per line.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Question 2
// Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 21; i += 2) {
  console.log(i);
}

// Question 3
// Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let i = 12; i > -14; i -= 2) {
  console.log(i);
}

// Question 4
// Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let i = 50; i >= 20; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// Question 5
// Given a string, change every second letter to an uppercase ‘Z’.
let word = "Programming is my hubby";
let result = "";
for (let i = 0; i < word.length; i++) {
  if (i % 2 == 0) {
    result += "Z";
  } else {
    result += word[i];
  }
}
console.log(result);

// Question 6
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let word1 = "Javascript is interestingly good";
if (word1.toLowerCase().includes("y")) {
  console.log("yes");
} else {
  console.log("no");
}

// Question 7
// Given any number, write a program to calculate the factorial of the number.
let num = 4;
let answer = 1;
for (let i = 1; i <= num; i++) {
  answer *= i;
}
console.log(answer);

// Question 8
// Write a program that use a loop to check if a given string is a palindrome
let str = "racebabecar";
let answer1 = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] === str[str.length - 1 - i]) {
    answer1 = false;
    break;
  }
}
console.log(answer1, str.length / 2);

// Question 9
// Write a program that finds the summation of every number from 1 to a given number.
let num1 = 10;
let sum = 0;
for (let i = 1; i <= num1; i++) {
  sum += i;
}
console.log(sum);

// Question 10
// Write a program that reverses your name and capitalizes the first letter.
let fname = "Azeez";
fname = fname.toLowerCase();
let reverse = "";
for (let i = fname.length - 1; i >= 0; i--) {
  reverse += fname[i];
}
reverse = reverse[0].toUpperCase() + reverse.slice(1);
console.log(reverse);

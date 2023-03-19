const prompt = require('prompt-sync')();

// study case
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
// while
// let sum = 0;
// // take input from the user
// let number = parseInt(prompt('Enter a number: '));
// while(number >= 0) {
//     console.log('in loop');
//     // add all positive numbers
//     sum += number;
//     // take input again if the number is positive
//     number = parseInt(prompt('Enter a number: '));
// }
// do while
let sum = 0;
let number = 0;
do {
    console.log('in loop');
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0);
// display the sum
console.log(`The sum is ${sum}.`);
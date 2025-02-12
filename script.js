// Exploring Array Manipulation in JavaScript

// TASK 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape'); // Adding a new fruit
fruits.pop(); // Removing the last fruit

// TASK 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b); // Sorting in ascending order

// TASK 3: Applying Array Methods
let moreNumbers = [3, 1, 5, 2, 4];
let doubled = moreNumbers.map(num => num * 2); // Doubling each number
let filtered = moreNumbers.filter(num => num % 2 !== 0); // Filtering out even numbers
let sum = moreNumbers.reduce((acc, num) => acc + num, 0); // Calculating the sum

console.log('Fruits:', fruits);
console.log('Sorted Numbers:', numbers);
console.log('Doubled Numbers:', doubled);
console.log('Filtered Numbers:', filtered);
console.log('Sum of Numbers:', sum);

// Exploring String Manipulation in JavaScript

// Objective: The aim of this assignment is to acquaint students with various string manipulation techniques in JavaScript, including string length, case conversion, substring extraction, and string splitting.

// Problem Statement: You are tasked with creating a JavaScript program that demonstrates different string manipulation operations. The program should cover obtaining the length of a string, converting cases (upper and lower), extracting substrings, and splitting strings based on a delimiter.

// Task 1: Obtaining String Length
let message = "Hello, World!";
console.log('String Length:', message.length); // Expected Outcome: Students should be able to understand how to determine the length of a string in JavaScript.

// Task 2: Converting Cases
let text = "Hello, World!";
console.log('Uppercase:', text.toUpperCase()); // Expected Outcome: Students should be able to demonstrate the ability to convert strings between uppercase and lowercase in JavaScript.
console.log('Lowercase:', text.toLowerCase());

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
console.log('Substring:', sentence.substring(10, 19)); // Expected Outcome: Students should be able to extract substrings from a given string using the `substring` method in JavaScript.

// Task 4: Splitting Strings
let words = "The quick brown fox";
console.log('Split Words:', words.split(' ')); // Expected Outcome: Students should be able to split a string into an array of substrings using the `split` method in JavaScript.

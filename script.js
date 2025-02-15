// Exploring Array Manipulation in JavaScript

// TASK 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape'); 
fruits.pop(); 

// TASK 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b); 

// TASK 3: Applying Array Methods
let moreNumbers = [3, 1, 5, 2, 4];
let doubled = moreNumbers.map(num => num * 2); 
let filtered = moreNumbers.filter(num => num % 2 !== 0); 
let sum = moreNumbers.reduce((acc, num) => acc + num, 0); 

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
console.log('String Length:', message.length); 

// Task 2: Converting Cases
let text = "Hello, World!";
console.log('Uppercase:', text.toUpperCase()); 
console.log('Lowercase:', text.toLowerCase());

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
console.log('Substring:', sentence.substring(10, 19)); 

// Task 4: Splitting Strings
let words = "The quick brown fox";
console.log('Split Words:', words.split(' ')); 

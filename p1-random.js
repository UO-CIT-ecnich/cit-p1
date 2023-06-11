/*
    CIT 281 Project 1
    Name: Elliott Nichols
*/

// Length determinant, empty string for result, and all lowercase characters in the English alphabet
let result = '';
let characters = 'abcdefghijklmnopqrstuvwxyz';
let length = Math.floor(Math.random() * 21) + 5;

/* 
For loop that iterates up until it reaches the length determined
characters.charAt returns the character at the specified index within the characters string
result += to concatenate the character generated and add them all to the result string at the specified length
*/

for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
}

// Paste result to the console to verify random length generation is working
console.log(result);

// Implicit Type Conversion

// If you do a math operation on a string of all string that are numbers, your output will result in a number and the correct result
// However, if you use the + sign, the you are doing string concatenation, and it will simply output the numbers one after another

const name = "Usman";
const lastName = "Sajid";
const fullName = name + " " + lastName;
console.log(fullName);

const num1 = 5;
const num2 = 10;
const result = num1 + num2;
console.log(result);

const value = name - lastName;
console.log(value);

let num3 = "2";
let num4 = "4";
//100 lines of code later...
num4 = "pizzas";
const result2 = num3 + num4;
console.log(result2);

const num5 = parseInt("5"); //this converts the string into an int before the result3 add variable
const num6 = parseInt("4"); //this converts the string into an int before the result3 add variable
let result3 = num5 + num6;
console.log(result3);

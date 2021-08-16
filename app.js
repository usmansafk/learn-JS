// Numbers
//Loosely Typed, don't declare the type

const number = 55;
let pants = 3.14;
pants = "are required for this job";
const number2 = 2.345;
const stringNumber3 = "2.345"; // this is a string

console.log(number);
console.log(pants);
console.log(number2);
console.log(stringNumber3); // this is a string - not a number

//NOTE!!
//IN THE CONSOLE, NUMBERS ARE BLUE.
//IF A NUMBER IS BLACK THIS MEANS IT IS A STRING!

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

const test = number + stringNumber3;
console.log(test); //the number is converted to a string here
//out put is 552.345
//aka 55(2.345)

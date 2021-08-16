//Functions - return
// default, undefined, shortcuts, ignores after

//note
// - anything after the return statement is ignored
//- if you do not explicity write what you are returning from a function, you will get undefined inside an array:

//Function that returns my size
//1 inch = 2.54cm

const myWallHeight = 69;

function calculate(value) {
  //   const newValue = value * 2.54;
  //   return newValue;
  return value * 2.54;
}

const width = calculate(50);
const height = calculate(myWallHeight);

const dimensions = [width, height];
console.log(dimensions); // output [127, 175.26]

//Write a function that returns inch to cm //1 inch = 2.54cm

// function inchToCm(inch) {
//   const cm = 2.54;
//   const result = inch * cm;
//   return result;
// }

// const myHeight = inchToCm(69.69);
// console.log(myHeight);

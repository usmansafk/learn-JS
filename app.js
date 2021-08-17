// Math Object
// Standard built in objects - always available

const num = 4.534525;
const result = Math.floor(num);

const result2 = Math.floor(8.999); //always rounds down

const result3 = Math.ceil(3.32235); //always rounds up

const num2 = 25;
const result4 = Math.sqrt(num2); //square root

const result5 = Math.PI; //3.14

const result6 = Math.min(2, 5, 4, 6, 32, 99, 4); //min num

const result7 = Math.max(2, 5, 4, 6, 32, 99, 4); //max num

const result8 = Math.random(); // random num from 0 and never 1
const result9 = Math.floor(Math.random() * 10 + 1); // random WHOLE num from 1 to 10,

console.log(result); //4
console.log(result2); //8
console.log(result3); //4
console.log(result4); //5
console.log(result5); //3.141592653589793
console.log(result6); //2
console.log(result7); //99
console.log(result8); //0.3367446480090155
console.log(result9); //random from 1 - 10

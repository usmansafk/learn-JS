//Template Literals ES6
// Backtick characters ``
// Interpolation ${} - insert expression (value).

//String Concat - classic way
const name = "Usman";
const age = 24;
const sentence = "Hey it's " + name + " and he is " + age + " years old";
console.log(sentence);

const wifeysName = "Hope";

//Template Literals - ES6 Way!
const sentenceTwo = `Hey it's ${wifeysName} and she is ${20 + 4} years old`; //you can insert an expressions inside the the {}
console.log(sentenceTwo);

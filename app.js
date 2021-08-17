// CallBack Functions, High Order Functions, Functions as First Class Objects/ Citizens

// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)
// High Order Functions - accepts another function as an argument or returns another function as a result
// Callback Functions - passed to a another function as an argument and executed inside that function

// function greetMorning(name) {
//   const myName = "namsu";
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = "namsu";
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
// greetMorning("bobo");
// greetAfternoon("peter");

//this is poor as it is rather repetitive, instead use callback function;
//this is done via creating one High Order Function, and multiple Call Back Functions

//The High Order Function is Universal
function greet(name, callback) {
  const myName = "namsu";
  console.log(`${callback(name)}, my name is ${myName}`);
}

//Call Back Functions:
function morning(name) {
  return `Good Morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good Afternoon ${name.repeat(3)}`;
}

function evening(name) {
  return `Good Evening ${name.toLowerCase()}`;
}

greet("Usman", morning);
greet("Hope", afternoon);
greet("Rija", evening);

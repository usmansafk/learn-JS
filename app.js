//Objects
// are a collection of properties(keys)
// each key has a value
// if the property value has a function, then it is called method

//Object
const person = {
  name: "Usman",
  age: 24,
  skin: "brown",
  hair: "black",
  isCool: true,
  education: true,
  married: true,
  family: ["Mum", "Dad", "Brother", "Sister"], // array inside an Object
  greeting: function () {
    console.log("Hello!");
  }, // yes- you can store function inside an object!
  //since ES6 you actually dont even need function keyword for methods inside objects:
  ES6greeting() {
    console.log("Hello ES6 style");
  }
};

//accessing the Object:
//use dot notation
console.log(person.name); //output: Usman
console.log(person.family[2]); //output: Brother
console.log(person.greeting); //outputs full function

//to run method within object:
person.greeting(); //output: Hello!
person.ES6greeting(); //output: Hello ES6 style

//can assign variables from the key/value of an object:
const myAge = person.age;
console.log(myAge);

//can modify value of an object:
person.name = "Usman Sajid";
console.log(person.name); //outputs: Usman Sajid
console.log(person); //prints updated name in full object

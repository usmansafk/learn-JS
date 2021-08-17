// Global Scope vs Local Scope

// ### Global Scope
// - any variable outside the code block {} is Global Scoped
// - **It can be accessed anywhere**
// - Gotchas: hence, beware of name collisions and modifying by mistake

let name = "bobo";
name = "peter";

// const name = "john"; // cant do this!

function calc() {
  //some code here
  console.log(name);
  name = "orange"; // can be modified
}

calc();
console.log(`my name is ${name} and im cool`); // my name is orange and im cool

// ### Local Scope

// - any variable inside a code block {} is Local Scoped
// - **It CAN NOT be accessed from outside the code block**
// - excluding VARs

let wifeyName = "hope";

function sayHi() {
  const wifeyName = "rija"; //allows same name and doesn't change original
  const age = 24;
  //code goes here
  //everything you do inside the code block
  return wifeyName;
}

sayHi();
console.log(wifeyName); // prints hope not rija
// console.log(age); // reference error - age is not defined

console.log(`my wifeys name is ${wifeyName} and shes lame`);

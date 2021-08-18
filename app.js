//Converting an element from NodeList Object to Array List Object
//USE SPREAD OPERATOR!

//elements selection----
const fruits = document.getElementsByTagName("li");

//elements modifications-----

// fruits.forEach(function (item) {
//   console.log(item);
// });
// THIS WILL NOT WORK- THIS IS BECAUSE IT IS A NODE OBJECT NOT AN ARRAY OBJECT
//THUS, YOU CAN NOT USE forEach() on node items

//options:
//1- set up a regular for loop to iterate over the node list
//2- change node list to array list, using the ES6 way, to use array methods on it:
const betterFruits = [...fruits]; // via spread operator

betterFruits.forEach(function (item) {
  //   console.log(item); // this now works!
});

console.log(fruits);
console.log(betterFruits);
//from these two logs, you can clearly see one is an node and one is an array. You can also see the various properties and methods available for each.

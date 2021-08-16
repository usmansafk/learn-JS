//Array Properties & Methods

let names = ["Usman", "Hope", "Zade", "Amna"];

//Properties -
//length
console.log(names.length);
console.log(names[names.length - 1]); // access the last item in array

//Methods -
//concat() - add an array to existing array
const lastNames = ["Pepper", "Onion", "Banana", "Mango"];
const fullNames = names.concat(lastNames);
console.log(fullNames);

//reverse()
console.log(fullNames.reverse());

//unshift() - insert in beginning of array
fullNames.unshift("Susy");
console.log(fullNames);

//shift() - remove from beginning of array
fullNames.shift();
console.log(fullNames);

//push() - insert item in end of array
fullNames.push("Namsu");
console.log(fullNames);

//pop() - remove last item in end of array
fullNames.pop();
console.log(fullNames);

//splice() - grab specific items in array, however mutates original array
const specificNames = fullNames.splice(2, 3); //first arguement is the starting point, second is option and how many items you want from that point
console.log(specificNames);

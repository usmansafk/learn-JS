// Local Storage with Multiple Values
// JSON.stringify() , JSON.parse()
// JSON allows you to store more than just strings...

const friends = ["usman", "hope", "rija"];

localStorage.setItem("friends", friends); // stores he friends but not as array - just a string!

const values = localStorage.getItem("friends");
console.log(values[0]); // since it is a string only prints first letter "u"

//solution - JSON
//use JSON.stringify - convert value to JSON
//then use JSON.parse to get back original value

const cars = ["bmw", "audi", "lambo"];

localStorage.setItem("cars", JSON.stringify(cars)); // now stored as array - make sure to use JSON.stringify()

const carValues = JSON.parse(localStorage.getItem("cars")); // must use JSON.parse() when accessing the values!
console.log(carValues[1]); //audi

//check if value is in local storage -
//if it is then assign it
//if it isn't then return empty array

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);

// fruits.push("apple");
fruits.push("orange");
fruits.push("orange");
fruits.push("orange");

localStorage.setItem("fruits", JSON.stringify(fruits));

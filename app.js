//EXERCISE  - Full Name
//Arrays and for loops

//Task - Insert the last name into each item of names array to give the full name
const siblingsNames = ["usman", "saleha", "sulaiman"];
const lastName = "sajid";

let newArray = [];

//for loop
for (let i = 0; i < siblingsNames.length; i++) {
  newArray.push(`${siblingsNames[i]} ${lastName}`);
}

console.log(newArray);

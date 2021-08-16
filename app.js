//Arrays
// Arrays - [], 0 index based
// Arrays offer an easy way to store a list of items and also access / perform various actions with ease
// inside the array, you can store strings, numbers, booleans, functions, objects etc.
// separate each element with a comma
// if you try to access an array item thats beyond the length of the array, you will get undefined

const friend1 = "bob";
const friend2 = "bob";
const friend3 = "bob";
const friend4 = "bob";

//instead use an array:
const friends = ["bob", "james", "troll", 45, undefined, null];

console.log(friends); // whole array
console.log(friends[1]); //james
console.log(friends[10]); //undefined

//assign array element to variable:
const bestFriend = friends[2];
console.log(bestFriend); // troll

//change value in array:
friends[3] = 50;
console.log(friends[3]);
console.log(friends);

// Powerful Array Methods:
// find --
// returns single instance - in this case object
// returns just the first match, if no match then returns undefined
// great for getting a unique value

const people = [
  {
    name: "usman",
    age: 24,
    position: "dev",
    id: 1
  },
  {
    name: "peter",
    age: 25,
    position: "designer",
    id: 2
  },
  {
    name: "susan",
    age: 30,
    position: "boss",
    id: 3
  }
];

const findById = people.find(function (person) {
  return person.id === 3;
});

const findMe = people.find(function (person) {
  return person.name === "usman";
});

console.log(findMe);
console.log(findById);

//filter is different from find as it returns a new array and for you to access an item, you must first give the index position:
const findMe2 = people.filter(function (person) {
  return person.name === "usman";
});

console.log(findMe2[0].name);

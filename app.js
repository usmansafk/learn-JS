// Powerful Array Methods:
// filter --
// Does return a new array
// Can manipulate the size of new array
// returns based on condition, unlike map

const people = [
  {
    name: "bob",
    age: 20,
    position: "dev"
  },
  {
    name: "peter",
    age: 25,
    position: "designer"
  },
  {
    name: "susan",
    age: 30,
    position: "boss"
  }
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developers = people.filter(function (person) {
  return person.position === "dev";
});

console.log(youngPeople);
console.log(developers);

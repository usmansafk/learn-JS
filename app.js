//Powerful Array Methods
//map -
// most powerful and popular array method, used in frameworks like REACT
// does returns a new array, unlike forEach
// does not change size of original array, unlike filter
// use values from original array when making new one

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

//example 1 -
const ages = people.map(function (person) {
  return person.age;
});

//example 2 -
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20 // can include any logic
  };
});

//map is EXTREMELY useful
//example task 3 -
//iterate over the peoples array using map
// extract the name value
//place it in a h1
//display it on the screen
const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");

//logging each to console
console.log(`Ages: ${ages}`);
console.log(newPeople);
console.log(names);

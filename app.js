//Powerful Array Methods
//forEach, map, filter, find, reduce

//forEach - does NOT return new array
//iterates over the array and then you decide what you want to do

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

function showPerson(person) {
  console.log(person.position.toUpperCase()); //inside the function, you can access each item and you can code any logic!
}
people.forEach(showPerson); // do NOT invoke it with ()

//OR --- you can do it one together using anonymous function (more popular) >>>
people.forEach(function (item) {
  console.log(item.position.toLowerCase());
});
//furthermore, this approach is now improved via arrow function, covered more later.

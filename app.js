// Powerful Array Methods:
// reduce
// still iterates over and still callback function
// however, reduces to a single value- Number, array, Object
// 1 paramter ('acc') - total of all calculations
// 2 paramter ('curr') - current iteration/ value

const people = [
  {
    name: "usman",
    age: 24,
    position: "dev",
    id: 1,
    salary: 200
  },
  {
    name: "peter",
    age: 25,
    position: "designer",
    id: 2,
    salary: 500
  },
  {
    name: "susan",
    age: 30,
    position: "boss",
    id: 3,
    salary: 900
  }
];

const total = people.reduce(function (acc, curr) {
  console.log(`Total ${acc}`);
  console.log(`Current Money ${curr.salary}`);
  acc += curr.salary;
  return acc; //ALWAYS MUST RETURN FIRST PARAM, THE TOTAL, YOU MUST DO THIS!
}, 0); // the 0 is the initial value

//Reference vs Value

//**🔑 when assigning primitive data type value to a variable, any changes are made directly to that value, without affecting the original value**
//**🔑 when assigning non-primitive data type value to a variable, it is done by reference so any changes will affect ALL the references - original reference as well**

//primitive
let number = 1;
let number2 = number;
number2 = 2;
console.log(`The first number is ${number}`); //The second number is 1
console.log(`The second number is ${number2}`); //The second number is 2

//object
let person = { name: "bob" };
let person2 = person;
person2.name = "susan";
console.log(`The name of the first person is ${person.name}`); //The name of the second person is susan <-- changed original value
console.log(`The name of the second person is ${person2.name}`); //The name of the second person is susan

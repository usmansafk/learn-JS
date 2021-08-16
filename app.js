//Functions Expressions / Anonymous function
// functions expressions are another way to define a function!
// This is done by first creating a variable, then assigning a Function  to the variable (not a value)...  then you can use that variable
// diff - hoisting, use - arrow func, libraries,

//Function definition/ declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

//Function Expression
//with function expression you can also remove the name
//(known as anonymous function)
const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 3);

let values = [firstValue, secondValue, thirdValue];

//can also invoke method directly into array, however make sure the fuctions returns something
values = [firstValue, secondValue, thirdValue, addValues(2, 2), add(3, 3)];
console.log(values);

//Arrow Expression -
//These are ES6 functions
//Can ONLY be function expressions, unless you pass them in as call backs

const multiply = (num1, num2) => num1 * num2;

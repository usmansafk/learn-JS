// Variable Lookup
//{} - code block

const globalNumber = 5;

function add(num1, num2) {
  const result = num1 + num2 + globalNumber; //here js will check if globalNumber exists in local scope - since it doesn't it next checks global scope. if it is not there in global scope you will get an error
  return result;
}

console.log(add(3, 4)); // 12

// EXERCISE - Calculate Total
// Functions, return, if, arrays for loop

//create a function that iterates over an array and returns total

const gas = [20, 40, 100];
const food = [10, 20, 30, 5];

function calcTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  //insert an if statement, if expenditure is greater than 100, alert!
  if (total > 100) {
    console.log(`Whoa! You're spending way too much`);
    return total;
  }
  console.log(`You're spending is good. You've spent less than 100`);
  return total;
}

const gasTotal = calcTotal(gas);
// console.log(gasTotal);
const foodTotal = calcTotal(food);
// console.log(foodTotal);
const randomTotal = calcTotal([50, 23, 2]);
// console.log(randomTotal);

// assign each total into an object and log it:
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal
});

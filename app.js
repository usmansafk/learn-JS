//Loops
//🔁 run a block of code while condition is true
// 1. while loop
// 2. do-while loop
// 3. for loop

//1. while loop
let amount = 10;

while (amount > 0) {
  console.log("I have " + amount + " dollahs");
  amount--;
}

//2. do-while loop
// run code block once, condition second
// runs at least once
let money = 12;

do {
  console.log("you have " + money + " dollars");
  money++;
} while (money < 10); // output 12, runs at least once

//3. for loop
let i;
for (i = 0; i < 4; i++) {
  console.log("and the number is: " + i);
}

for (let number = 5; number >= 0; number--) {
  console.log("the number is: " + number);
}

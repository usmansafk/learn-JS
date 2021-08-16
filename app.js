//Switch
//Another way to write if/else statements

//dice values: 1 - 6;

//if approach:
// const dice = 1;
// if (dice === 1) {
//   console.log("you got 1");
// }

// if (dice === 2) {
//   console.log("you got 2");
// }

// if (dice === 3) {
//   console.log("you got 4");
// }

// if (dice === 5) {
//   console.log("you got 5");
// }

// if (dice === 6) {
//   console.log("you got 6");
// }

// if (dice < 1 || dice > 6) {
//   console.log("you did not roll the dice");
// }

//switch statement:
const dice = 1;

switch (dice) {
  case 1:
    console.log("you got 1");
    break;
  case 2:
    console.log("you got 2");
    break;
  case 3:
    console.log("you got 3");
    break;
  case 4:
    console.log("you got 4");
    break;
  case 5:
    console.log("you got 5");
    break;
  case 6:
    console.log("you got 6");
    break;
  default:
    console.log("you did not roll the dice");
}
